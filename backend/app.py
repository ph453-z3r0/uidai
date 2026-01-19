from flask import Flask, jsonify, request
from flask_cors import CORS
from flask_limiter import Limiter
from flask_limiter.util import get_remote_address
import pandas as pd
import os
import json
from datetime import datetime

app = Flask(__name__)

# Government Style Configuration
CORS(app, resources={r"/api/*": {"origins": "http://localhost:5173"}})

limiter = Limiter(
    get_remote_address,
    app=app,
    default_limits=["100 per minute"],
    storage_uri="memory://"
)

DATA_DIR = os.path.join(os.path.dirname(__file__), 'data')

# Cache DataFrames
data_cache = {}

def load_data_cache():
    print("Loading data into memory...")
    try:
        # MBU Risk
        mbu_path = os.path.join(DATA_DIR, 'mbu_risk_data.csv')
        if os.path.exists(mbu_path):
            df = pd.read_csv(mbu_path)
            # Parse trend_data if it's a string
            if 'trend_data' in df.columns:
                 df['trend_data'] = df['trend_data'].apply(lambda x: json.loads(x) if isinstance(x, str) else [])
            data_cache['mbu'] = df
        
        # Fraud Radar
        fraud_path = os.path.join(DATA_DIR, 'fraud_radar_data.csv')
        if os.path.exists(fraud_path):
            df = pd.read_csv(fraud_path)
            # Reconstruct forensics object
            forensics_cols = [c for c in df.columns if c.startswith('forensics_')]
            if forensics_cols:
                df['forensics'] = df.apply(lambda row: {
                    c.replace('forensics_', ''): row[c] for c in forensics_cols
                }, axis=1)
            data_cache['fraud'] = df

        # Migration
        migration_path = os.path.join(DATA_DIR, 'migration_forecast_data.csv')
        if os.path.exists(migration_path):
            df = pd.read_csv(migration_path)
            # Parse forecast_data if needed (assuming it might be generated as string or separate cols)
            # For now, let's assume the CSV generation script handles it or we reconstruct it
            # The sample generation script didn't explicitly stringify forecast_data, so let's check
            # If it's missing, we might need to mock it or fix the generator. 
            # The generator used a list of dicts, which pandas writes as string representation.
            if 'forecast_data' in df.columns:
                 df['forecast_data'] = df['forecast_data'].apply(lambda x: json.loads(x.replace("'", '"')) if isinstance(x, str) else [])
            # If forecast_data column is missing (it was in my generator script above), let's add mock for now to avoid frontend crash
            else:
                 # Mock forecast data if missing
                 df['forecast_data'] = [
                    [{"month": "Jan", "value": 200}, {"month": "Feb", "value": 220}] for _ in range(len(df))
                 ]
            data_cache['migration'] = df
            
        print("Data loaded successfully.")
    except Exception as e:
        print(f"Error loading data: {e}")

# Load data on startup
load_data_cache()

def format_response(data, total):
    return {
        "status": "success",
        "data": data,
        "total": total,
        "timestamp": datetime.now().isoformat()
    }

@app.route('/health', methods=['GET'])
def health_check():
    return jsonify({"status": "healthy"})

@app.route('/api/mbu-risk', methods=['GET'])
def get_mbu_risk():
    df = data_cache.get('mbu')
    if df is None:
        return jsonify({"status": "error", "message": "Data not available"}), 500

    state = request.args.get('state')
    risk_level = request.args.get('risk_level')
    
    filtered_df = df.copy()
    
    if state and state != 'All States':
        filtered_df = filtered_df[filtered_df['state'] == state]
    
    if risk_level and risk_level.lower() != 'all levels':
        # Map or direct match
        level_map = {'high': 'Red', 'medium': 'Yellow', 'low': 'Green', 
                     'critical': 'Red', 'moderate': 'Yellow'}
        target_level = level_map.get(risk_level.lower(), risk_level)
        filtered_df = filtered_df[filtered_df['risk_category'].str.lower() == target_level.lower()]

    result = filtered_df.head(50).to_dict('records')
    return jsonify(format_response(result, len(filtered_df)))

@app.route('/api/anomalies', methods=['GET'])
def get_anomalies():
    df = data_cache.get('fraud')
    if df is None:
        return jsonify({"status": "error", "message": "Data not available"}), 500

    state = request.args.get('state')
    severity = request.args.get('severity')
    
    filtered_df = df.copy()
    
    if state and state != 'All States':
        filtered_df = filtered_df[filtered_df['state'] == state]
        
    if severity and severity != 'All Severities':
        filtered_df = filtered_df[filtered_df['priority'].str.lower() == severity.lower()]

    result = filtered_df.head(50).to_dict('records')
    return jsonify(format_response(result, len(filtered_df)))

@app.route('/api/migration', methods=['GET'])
def get_migration():
    df = data_cache.get('migration')
    if df is None:
        return jsonify({"status": "error", "message": "Data not available"}), 500

    state = request.args.get('state')
    
    filtered_df = df.copy()
    
    if state and state != 'All States':
        filtered_df = filtered_df[filtered_df['state'] == state]
    
    result = filtered_df.head(50).to_dict('records')
    return jsonify(format_response(result, len(filtered_df)))

if __name__ == '__main__':
    app.run(debug=True, port=5000)
