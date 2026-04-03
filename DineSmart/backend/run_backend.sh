#!/bin/bash

echo "🚀 Starting DineSmart Backend..."
cd /Users/param/Desktop/Inexture-college/Inexture-Solutions-Trainee/DineSmart/backend

# Activate virtual environment
if [ -d "venv/bin/python" ]; then
    PYTHON="./venv/bin/python"
else
    PYTHON="python3"
fi

# Install packages if not already installed
echo "📦 Checking dependencies..."
$PYTHON -m pip install -q fastapi uvicorn sqlalchemy pydantic pydantic-settings python-dotenv passlib python-jose cryptography email-validator python-multipart

# Start the server
echo "✅ Starting Uvicorn server on http://0.0.0.0:8000"
echo "📚 API Docs available at http://localhost:8000/docs"
echo ""

$PYTHON -m uvicorn main:app --reload --host 0.0.0.0 --port 8000
