# UIDAI Early Warning System - Solution

This repository contains the source code for the UIDAI Early Warning System, designed to detect and visualize potential fraud, risk, and migration trends using Aadhar data.

The solution consists of two main components:
1.  **Backend**: A Python Flask application that serves data APIs.
2.  **Frontend**: A React application (Vite) that provides the user interface.

## Prerequisites

Before running the application, ensure you have the following installed:
-   **Node.js** (v16 or higher) & **npm**
-   **Python** (v3.8 or higher) & **pip**

---

## 1. Backend Setup

The backend serves the API endpoints required by the frontend.

1.  **Navigate to the backend directory:**
    ```bash
    cd backend
    ```

2.  **Create and activate a virtual environment (Recommended):**
    *   **Linux/macOS:**
        ```bash
        python3 -m venv venv
        source venv/bin/activate
        ```
    *   **Windows:**
        ```bash
        python -m venv venv
        .\venv\Scripts\activate
        ```

3.  **Install dependencies:**
    ```bash
    pip install -r requirements.txt
    ```

4.  **Run the backend server:**
    ```bash
    python app.py
    ```
    The server will start at `http://localhost:5000`.

    > **Note:** If you need to regenerate the sample data, you can run:
    > ```bash
    > python generate_data.py
    > ```

---

## 2. Frontend Setup

The frontend is a React application built with Vite.

1.  **Open a new terminal and navigate to the frontend directory:**
    ```bash
    cd frontend
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```
    The application will be accessible at `http://localhost:5173`.

---

## 3. Accessing the Application

Once both the backend and frontend servers are running:

1.  Open your web browser.
2.  Go to **[http://localhost:5173](http://localhost:5173)**.

You should see the UIDAI Early Warning System dashboard. The frontend will automatically communicate with the backend running on port 5000.
