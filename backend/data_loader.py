import pandas as pd
import os
import json

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
DATA_DIR = os.path.join(BASE_DIR, 'data')

def convert_csv_to_json():
    files = [
        ('mbu_risk_data.csv', 'mbu_risk_data.json'),
        ('fraud_radar_data.csv', 'fraud_radar_data.json'),
        ('migration_forecast_data.csv', 'migration_forecast_data.json')
    ]

    for csv_file, json_file in files:
        csv_path = os.path.join(DATA_DIR, csv_file)
        json_path = os.path.join(DATA_DIR, json_file)
        
        if os.path.exists(csv_path):
            try:
                df = pd.read_csv(csv_path)
                # Handle nested JSON strings if any (like trend_data)
                if 'trend_data' in df.columns:
                    df['trend_data'] = df['trend_data'].apply(lambda x: json.loads(x) if isinstance(x, str) else x)
                
                # Handle forensics columns for fraud data (flattened in CSV, nested in JSON)
                if 'forensics_volume_zscore' in df.columns:
                    forensics_cols = [c for c in df.columns if c.startswith('forensics_')]
                    df['forensics'] = df.apply(lambda row: {
                        c.replace('forensics_', ''): row[c] for c in forensics_cols
                    }, axis=1)
                    df = df.drop(columns=forensics_cols)

                df.to_json(json_path, orient='records', indent=2)
                print(f"Converted {csv_file} to {json_file}")
            except Exception as e:
                print(f"Error converting {csv_file}: {e}")
        else:
            print(f"File not found: {csv_file}")

if __name__ == "__main__":
    convert_csv_to_json()
