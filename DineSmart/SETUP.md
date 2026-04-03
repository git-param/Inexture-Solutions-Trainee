# DineSmart - Complete Setup Guide

## Project Overview

You now have a complete **DineSmart** application with:
- ✅ FastAPI Backend with user authentication
- ✅ SQLite database with SQLAlchemy ORM
- ✅ React Frontend with login and signup functionality
- ✅ JWT-based authentication
- ✅ Password hashing with bcrypt

---

## Backend Setup

### Step 1: Navigate to Backend Directory
```bash
cd DineSmart/backend
```

### Step 2: Create Virtual Environment
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

### Step 3: Install Dependencies
```bash
pip install -r requirements.txt
```

### Step 4: Configure Environment (Optional)
The `.env` file is already created. For production, update:
- `SECRET_KEY`: Generate a strong secret key
- `DATABASE_URL`: Change if using a different database
- `ACCESS_TOKEN_EXPIRE_MINUTES`: Token expiration time

### Step 5: Run the Backend Server
```bash
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

The API will be available at:
- **API**: `http://localhost:8000`
- **Swagger Docs**: `http://localhost:8000/docs`
- **ReDoc**: `http://localhost:8000/redoc`

---

## Frontend Setup

### Step 1: Navigate to Frontend Directory
```bash
cd DineSmart/frontend
```

### Step 2: Install Dependencies (if not already done)
```bash
npm install
```

### Step 3: Run Development Server
```bash
npm run dev
```

The frontend will be available at `http://localhost:5173`

---

## Database Schema

The backend automatically creates the SQLite database with the following structure:

### Users Table
```
Column          | Type      | Properties
─────────────────────────────────────
id              | Integer   | Primary Key
full_name       | String    | Required
email           | String    | Unique, Required
phone           | String    | Optional
hashed_password | String    | Required
is_active       | Boolean   | Default: True
created_at      | DateTime  | Auto-generated
updated_at      | DateTime  | Auto-generated
```

---

## API Endpoints

### Authentication

#### 1. Register User
```
POST /api/auth/register
Content-Type: application/json

{
  "full_name": "John Doe",
  "email": "john@example.com",
  "phone": "+1-555-000-0000",
  "password": "secure_password",
  "confirm_password": "secure_password"
}
```

**Response (200)**:
```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIs...",
  "token_type": "bearer",
  "user": {
    "id": 1,
    "full_name": "John Doe",
    "email": "john@example.com",
    "phone": "+1-555-000-0000",
    "is_active": true,
    "created_at": "2024-04-03T10:30:00",
    "updated_at": null
  }
}
```

#### 2. Login User
```
POST /api/auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "secure_password"
}
```

**Response (200)**:
```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIs...",
  "token_type": "bearer",
  "user": { ... }
}
```

### User Management

#### 3. Get Current User
```
GET /api/users/me
Authorization: Bearer <access_token>
```

#### 4. Update User Profile
```
PUT /api/users/me
Authorization: Bearer <access_token>
Content-Type: application/json

{
  "full_name": "Jane Doe",
  "phone": "+1-555-111-1111"
}
```

### Health Check
```
GET /health
```

---

## Frontend Features Implemented

### 1. Login Page (`/login`)
- ✅ Email input validation
- ✅ Password input
- ✅ Error message display
- ✅ Loading state
- ✅ Navigate to dashboard on success
- ✅ Token storage in localStorage
- ✅ Link to register page

### 2. Register Page (`/register`)
- ✅ Full name input
- ✅ Email input validation
- ✅ Phone number input (optional)
- ✅ Password input with confirmation
- ✅ Password matching validation
- ✅ Terms & conditions checkbox
- ✅ Error/Success message display
- ✅ Loading state
- ✅ Navigate to dashboard on success
- ✅ Link to login page

### 3. API Service (`src/services/api.js`)
- ✅ `authAPI.register()` - Register new user
- ✅ `authAPI.login()` - Login user
- ✅ `authAPI.getCurrentUser()` - Fetch current user
- ✅ `authAPI.updateUser()` - Update user profile
- ✅ `logout()` - Clear local storage
- ✅ `getStoredToken()` - Get stored JWT token
- ✅ `getStoredUser()` - Get stored user data
- ✅ `isAuthenticated()` - Check auth status

---

## Project Structure

```
DineSmart/
├── backend/
│   ├── main.py              # FastAPI application & routes
│   ├── models.py            # SQLAlchemy models
│   ├── schemas.py           # Pydantic request/response models
│   ├── database.py          # Database configuration
│   ├── security.py          # Password hashing & JWT
│   ├── config.py            # App configuration
│   ├── requirements.txt     # Python dependencies
│   ├── .env                 # Environment variables
│   ├── .gitignore          # Git ignore
│   ├── README.md           # Backend documentation
│   └── dinesmart.db        # SQLite database (auto-created)
│
└── frontend/
    ├── src/
    │   ├── pages/
    │   │   ├── Login.jsx        # Login page (UPDATED)
    │   │   ├── Register.jsx     # Register page (UPDATED)
    │   │   ├── Dashboard.jsx
    │   │   └── Home.jsx
    │   ├── services/
    │   │   └── api.js          # API service (NEW)
    │   ├── components/
    │   ├── App.jsx
    │   └── main.jsx
    ├── package.json
    └── ...
```

---

## Testing the Application

### 1. Start Backend
```bash
cd DineSmart/backend
source venv/bin/activate
uvicorn main:app --reload
```

### 2. Start Frontend
```bash
cd DineSmart/frontend
npm run dev
```

### 3. Test Registration
1. Go to `http://localhost:5173/register`
2. Fill in the form with:
   - Full Name: John Doe
   - Email: john@example.com
   - Phone: +1-555-000-0000
   - Password: password123
   - Confirm: password123
3. Accept terms and submit
4. Should redirect to dashboard after 1 second

### 4. Test Login
1. Go to `http://localhost:5173/login`
2. Enter:
   - Email: john@example.com
   - Password: password123
3. Should redirect to dashboard

### 5. Check Database
The SQLite database is created automatically at `backend/dinesmart.db`

You can view it using tools like:
- SQLite Browser (GUI)
- `sqlite3 dinesmart.db` (command line)

---

## Important Notes

### CORS Configuration
The backend is configured to accept requests from:
- `http://localhost:5173` (Vite dev server)
- `http://localhost:3000` (Common React port)
- `http://127.0.0.1:5173`
- `http://127.0.0.1:3000`

If your frontend runs on a different URL, update the `origins` list in `backend/main.py`.

### Security
1. **Change SECRET_KEY**: The default secret key is for development only
2. **Use HTTPS**: In production, always use HTTPS
3. **Environment Variables**: Never commit `.env` file to version control

### Database Reset
To reset the database and start fresh:
```bash
rm backend/dinesmart.db
# Restart the backend server
```

---

## Troubleshooting

### CORS Error: "Access to XMLHttpRequest blocked"
- Ensure backend is running on port 8000
- Check that frontend URL is in `origins` list in `main.py`
- Restart both servers

### "Connection refused" Error
- Verify backend is running: `http://localhost:8000/health`
- Check that port 8000 is not in use
- Backend and frontend might be on wrong ports

### Database Issues
- Delete `dinesmart.db` file and restart backend
- This will create a fresh database

### Authentication Issues
- Token might have expired (30 minutes default)
- Clear localStorage and login again
- Check browser DevTools Console for errors

---

## Next Steps

You can enhance the application with:

1. **Profile Page**: Display and edit user profile
2. **Password Reset**: Implement forgot password functionality
3. **Email Verification**: Verify email during registration
4. **Refresh Tokens**: Add refresh token mechanism
5. **Order Management**: Add endpoints for orders
6. **Favorites**: Add user favorites feature
7. **Rate Limiting**: Implement API rate limiting
8. **Logging**: Add application logging

---

## Support

For detailed backend documentation, see `backend/README.md`
