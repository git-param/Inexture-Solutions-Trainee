#!/bin/bash

echo "🍴 Welcome to DineSmart Setup!"
echo "================================"
echo ""

# Check if Python is installed
if ! command -v python3 &> /dev/null; then
    echo "❌ Python 3 is not installed. Please install Python 3.8 or higher."
    exit 1
fi

echo "✅ Python 3 found"
echo ""

# Setup Backend
echo "📦 Setting up Backend..."
echo "========================"

cd backend

# Create virtual environment
if [ ! -d "venv" ]; then
    echo "Creating virtual environment..."
    python3 -m venv venv
    echo "✅ Virtual environment created"
else
    echo "✅ Virtual environment already exists"
fi

# Activate virtual environment
source venv/bin/activate

# Install dependencies
echo "Installing Python dependencies..."
pip install -r requirements.txt > /dev/null 2>&1
echo "✅ Dependencies installed"

echo ""
echo "✅ Backend setup complete!"
echo ""
echo "To start the backend, run:"
echo "  cd backend"
echo "  source venv/bin/activate"
echo "  uvicorn main:app --reload"
echo ""

# Check for npm
if ! command -v npm &> /dev/null; then
    echo "❌ Node.js/npm is not installed."
    echo "Please install Node.js from https://nodejs.org/"
    echo ""
else
    echo "✅ npm found"
    echo ""
    echo "📦 Setting up Frontend..."
    echo "========================="
    
    cd ../frontend
    
    echo "Installing npm dependencies..."
    npm install > /dev/null 2>&1
    echo "✅ Dependencies installed"
    
    echo ""
    echo "✅ Frontend setup complete!"
    echo ""
    echo "To start the frontend, run:"
    echo "  cd frontend"
    echo "  npm run dev"
    echo ""
fi

echo "🚀 Setup Complete!"
echo ""
echo "Next steps:"
echo "1. Start backend:  cd backend && source venv/bin/activate && uvicorn main:app --reload"
echo "2. Start frontend: cd frontend && npm run dev"
echo "3. Visit: http://localhost:5173"
echo ""
