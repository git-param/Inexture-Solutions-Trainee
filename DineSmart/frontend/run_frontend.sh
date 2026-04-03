#!/bin/bash

echo "🚀 Starting DineSmart Frontend..."
cd /Users/param/Desktop/Inexture-college/Inexture-Solutions-Trainee/DineSmart/frontend

echo "📦 Checking dependencies..."
npm install > /dev/null 2>&1

echo "✅ Starting dev server..."
npm run dev
