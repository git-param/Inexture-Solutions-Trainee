# 🍴 DineSmart - Quick Reference Guide

## 📋 Files Created

### Backend (in `backend/` folder):
```
✅ main.py              - FastAPI application (routes, middleware)
✅ models.py            - SQLAlchemy User model  
✅ schemas.py           - Pydantic validation schemas
✅ database.py          - Database configuration & sessions
✅ security.py          - Password hashing & JWT tokens
✅ config.py            - Settings from .env
✅ requirements.txt     - Python dependencies
✅ .env                 - Environment variables
✅ .gitignore          - Git ignore rules
✅ README.md           - Backend documentation
```

### Frontend (in `frontend/src/` folder):
```
✅ pages/Login.jsx          - Updated with form handling & API calls
✅ pages/Register.jsx       - Updated with form handling & API calls  
✅ services/api.js          - API service module (NEW)
```

### Documentation (in root `DineSmart/` folder):
```
✅ SETUP.md             - Complete setup instructions
✅ IMPLEMENTATION.md    - This file + summary
✅ setup.sh            - Automated setup script
```

---

## 🚀 Getting Started (3 Steps)

### Step 1: Setup Backend
```bash
cd backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
uvicorn main:app --reload
```
✅ Backend runs at: http://localhost:8000

### Step 2: Setup Frontend  
```bash
cd frontend
npm install
npm run dev
```
✅ Frontend runs at: http://localhost:5173

### Step 3: Test It!
1. Go to http://localhost:5173/register
2. Create an account
3. Auto-redirects to dashboard
4. Go to http://localhost:5173/login
5. Login with same credentials
6. Auto-redirects to dashboard

---

## 📡 API Endpoints

### Register
```http
POST http://localhost:8000/api/auth/register
Content-Type: application/json

{
  "full_name": "John Doe",
  "email": "john@example.com",
  "phone": "+1-555-000-0000",
  "password": "password123",
  "confirm_password": "password123"
}
```

### Login
```http
POST http://localhost:8000/api/auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "password123"
}
```

### Get Current User (Requires Token)
```http
GET http://localhost:8000/api/users/me
Authorization: Bearer <your_token_here>
```

### Update User Profile (Requires Token)
```http
PUT http://localhost:8000/api/users/me
Authorization: Bearer <your_token_here>
Content-Type: application/json

{
  "full_name": "Jane Doe",
  "phone": "+1-555-111-1111"
}
```

---

## 🎯 User Flow

```
┌─────────────────┐
│  Home Page      │
│  /             │
└────────┬────────┘
         │
    ┌────▼─────┐
    │  Register │◄──────┐
    │  /register│       │
    └────┬─────┘        │
         │ Success      │
         │ + Token      │
         ▼              │
    ┌─────────────┐     │
    │  Dashboard  │     │
    │  /dashboard │     │
    └─────────────┘     │
                        │
         ┌──────────────┘
         │
    ┌────▼────┐
    │  Login   │
    │  /login  │
    └─────────┘
         │ Success + Token
         ▼
    ┌──────────────┐
    │  Dashboard   │
    └──────────────┘
```

---

## 💾 Database

SQLite database is automatically created at:
```
backend/dinesmart.db
```

### Users Table Structure:
```sql
CREATE TABLE users (
    id INTEGER PRIMARY KEY,
    full_name VARCHAR NOT NULL,
    email VARCHAR UNIQUE NOT NULL,
    phone VARCHAR,
    hashed_password VARCHAR NOT NULL,
    is_active BOOLEAN DEFAULT TRUE,
    created_at DATETIME,
    updated_at DATETIME
);
```

---

## 🔒 Security Features

- ✅ **Password Hashing**: Passwords stored as bcrypt hashes (not plaintext)
- ✅ **JWT Tokens**: Secure token-based authentication
- ✅ **Email Validation**: Built-in email format checking
- ✅ **Token Expiration**: Tokens expire after 30 minutes
- ✅ **CORS Protection**: Only allowed origins can access API
- ✅ **Dependency Injection**: Clean, secure session management

---

## 🛠️ Troubleshooting

### Issue: "Connection refused" when accessing localhost:8000
**Solution**: 
- Make sure backend is running: `uvicorn main:app --reload`
- Check port 8000 is not occupied: `lsof -i :8000`

### Issue: CORS error in browser console
**Solution**:
- Ensure backend is running on port 8000
- Frontend must be on localhost:5173
- Restart both servers

### Issue: "Email already registered" error
**Solution**:
- Use a different email for testing
- Or delete `dinesmart.db` to reset database

### Issue: Token expired
**Solution**:
- Logout and login again
- Token expires after 30 minutes (configurable in config.py)

### Issue: "Invalid credentials" on login
**Solution**:
- Check email and password are correct
- Password is case-sensitive
- Email must match exactly (john@example.com ≠ john@EXAMPLE.COM)

---

## 📱 Frontend Components

### Login Component
- Email input field
- Password input field
- Error/Success messages
- Loading state during API call
- Link to register page
- Forgot password link (placeholder)

### Register Component  
- Full name input field
- Email input field
- Phone number input field
- Password input field
- Confirm password input field
- Terms & conditions checkbox
- Error/Success messages
- Loading state during API call
- Link to login page

### API Service Module
Functions available:
- `authAPI.register(userData)` - Register new user
- `authAPI.login(email, password)` - Login user
- `authAPI.getCurrentUser(token)` - Get user profile
- `authAPI.updateUser(token, userData)` - Update profile
- `logout()` - Clear stored token
- `getStoredToken()` - Get JWT token from storage
- `getStoredUser()` - Get user data from storage
- `isAuthenticated()` - Check if user is logged in

---

## 🔄 API Response Format

### Success Response (Register/Login):
```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
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

### Error Response:
```json
{
  "detail": "Email already registered"
}
```

---

## 📚 Documentation Files

1. **SETUP.md** - Complete installation & setup guide
2. **IMPLEMENTATION.md** - Summary of what was built
3. **backend/README.md** - Backend-specific documentation
4. **This file** - Quick reference guide

---

## 🎓 Key Technologies

| Component | Technology |
|-----------|-----------|
| **Backend Framework** | FastAPI |
| **Database** | SQLite with SQLAlchemy |
| **Authentication** | JWT (JSON Web Tokens) |
| **Password Security** | Bcrypt hashing |
| **Frontend** | React 19 with Vite |
| **Styling** | Tailwind CSS |
| **Validation** | Pydantic (backend), HTML5 (frontend) |

---

## ✨ What's Ready to Use

✅ Full user registration flow
✅ Full user login flow  
✅ Token-based authentication
✅ User profile endpoints
✅ Secure password storage
✅ Error handling & validation
✅ CORS configuration
✅ Database persistence
✅ Form validation
✅ Loading states
✅ Error messages

---

## 🚀 Next Steps (Optional Enhancements)

1. **Add Password Reset**: Implement forgot password flow
2. **Add Email Verification**: Verify email on registration
3. **Add Refresh Tokens**: Better security with token rotation
4. **Add User Avatar**: Store profile pictures
5. **Add Order Management**: Create order endpoints
6. **Add Favorites**: Save favorite restaurants/dishes
7. **Add Reviews**: User review system
8. **Add Search**: Search restaurants and dishes
9. **Add Notifications**: Real-time order notifications
10. **Deploy**: Move from localhost to cloud (AWS, Vercel, etc.)

---

## 📞 Quick Commands Reference

```bash
# Backend setup
cd backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt

# Run backend
uvicorn main:app --reload

# Frontend setup
cd frontend
npm install

# Run frontend
npm run dev

# Check backend health
curl http://localhost:8000/health

# View API docs
open http://localhost:8000/docs

# Reset database
rm backend/dinesmart.db
# Restart backend
```

---

## 🎉 You're All Set!

Your DineSmart application is complete and ready to use!

**Start here:**
1. Read `SETUP.md` for detailed instructions
2. Run the setup commands above
3. Test the login/register flow
4. Visit `http://localhost:8000/docs` to explore the API

Happy coding! 🚀
