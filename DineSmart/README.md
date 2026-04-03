# 🍴 DineSmart - AI-Powered Food Ordering Application

A modern, full-stack food ordering application with intelligent recommendations, built with React, FastAPI, and SQLite.

## 📱 Features

### User Authentication
- ✅ User registration with email validation
- ✅ Secure login with JWT tokens
- ✅ Password hashing with bcrypt
- ✅ Session persistence with localStorage
- ✅ Auto-redirect to dashboard

### User Management  
- ✅ View user profile
- ✅ Update profile information
- ✅ Token-based authentication

### Dashboard
- ✅ Food recommendations
- ✅ Category filtering
- ✅ Food card displays
- ✅ Responsive layout

---

## 🏗️ Architecture

```
DineSmart/
├── backend/          ← FastAPI + SQLAlchemy + SQLite
├── frontend/         ← React + Vite + Tailwind CSS
└── [Documentation Files]
```

### Technology Stack

**Backend:**
- FastAPI (modern Python web framework)
- SQLAlchemy (ORM)
- SQLite (database)
- JWT (authentication)
- Bcrypt (password hashing)

**Frontend:**
- React 19
- Vite (build tool)
- Tailwind CSS (styling)
- React Router (navigation)

---

## 🚀 Quick Start

### Prerequisites
- Python 3.8+
- Node.js 16+
- npm or yarn

### Backend Setup

```bash
cd backend

# Create virtual environment
python3 -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Run server
uvicorn main:app --reload
```

Backend runs at: **http://localhost:8000**

### Frontend Setup

```bash
cd frontend

# Install dependencies  
npm install

# Run development server
npm run dev
```

Frontend runs at: **http://localhost:5173**

---

## 📚 Documentation

| Document | Purpose |
|----------|---------|
| `SETUP.md` | Complete setup and installation guide |
| `QUICK_REFERENCE.md` | Quick reference for commands and endpoints |
| `IMPLEMENTATION.md` | What was built and implemented |
| `CHECKLIST.md` | Complete feature checklist |
| `backend/README.md` | Backend API documentation |

**Start with `SETUP.md` for detailed instructions!**

---

## 🔑 Key Files

### Backend
```
backend/
├── main.py          # FastAPI app & routes
├── models.py        # Database models
├── schemas.py       # Request/response models
├── database.py      # Database setup
├── security.py      # Auth utilities
├── config.py        # Configuration
├── requirements.txt # Dependencies
├── .env            # Environment variables
└── README.md       # Backend docs
```

### Frontend
```
frontend/src/
├── pages/
│   ├── Login.jsx        # Login page
│   ├── Register.jsx     # Register page
│   ├── Dashboard.jsx    # Main dashboard
│   └── Home.jsx         # Home page
├── components/
│   ├── Navbar/
│   ├── Hero/
│   ├── Dashboard/
│   └── ...
└── services/
    └── api.js          # API service module
```

---

## 🔐 Authentication Flow

### Register Flow
```
User fills form → Validation → Backend creates user → JWT token issued → Stored locally → Redirect to dashboard
```

### Login Flow
```
User enters credentials → Backend verifies → JWT token issued → Stored locally → Redirect to dashboard
```

### API Call Flow
```
Frontend sends request → Include Bearer token in header → Backend validates token → Return response
```

---

## 📡 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user

### User Management
- `GET /api/users/me` - Get current user profile
- `PUT /api/users/me` - Update user profile

### Utilities
- `GET /health` - Health check

**Full API docs at: `http://localhost:8000/docs` (after starting backend)**

---

## 🗄️ Database

SQLite database with automatic table creation.

### Users Table
```
id              | Integer (Primary Key)
full_name       | String
email           | String (Unique)
phone           | String (Optional)
hashed_password | String
is_active       | Boolean
created_at      | DateTime
updated_at      | DateTime
```

---

## 🎯 User Types

### Regular User
- Can register and login
- View profile
- Update profile information
- Access dashboard

---

## 🛠️ Development

### Making API Requests from Frontend

```javascript
import { authAPI } from './services/api.js';

// Register
const response = await authAPI.register({
  full_name: "John Doe",
  email: "john@example.com",
  phone: "+1-555-000-0000",
  password: "password123",
  confirm_password: "password123"
});

// Login
const response = await authAPI.login(
  "john@example.com",
  "password123"
);

// Get current user
const user = await authAPI.getCurrentUser(token);

// Update user
const updated = await authAPI.updateUser(token, {
  full_name: "Jane Doe"
});
```

### Checking Authentication

```javascript
import { 
  isAuthenticated, 
  getStoredToken, 
  getStoredUser,
  logout 
} from './services/api.js';

if (isAuthenticated()) {
  const token = getStoredToken();
  const user = getStoredUser();
  // ...
}

// Logout
logout();
```

---

## 🔒 Security Features

- ✅ Passwords hashed with bcrypt (never stored in plain text)
- ✅ JWT tokens for stateless authentication
- ✅ Token expiration (30 minutes)
- ✅ Email validation
- ✅ CORS protection
- ✅ Input validation
- ✅ Bearer token authentication

---

## 📋 Testing

### Test Registration
1. Go to http://localhost:5173/register
2. Fill form with valid data
3. Click "Register Account"
4. Should redirect to dashboard

### Test Login
1. Go to http://localhost:5173/login
2. Enter email and password from registration
3. Click "Login"
4. Should redirect to dashboard

### Test API
```bash
# Health check
curl http://localhost:8000/health

# View API docs
open http://localhost:8000/docs
```

---

## 🐛 Troubleshooting

### Backend won't start
```bash
# Check if port 8000 is in use
lsof -i :8000

# Try different port
uvicorn main:app --port 8001
```

### CORS Error
- Ensure backend is running on http://localhost:8000
- Frontend must be on http://localhost:5173
- Restart both servers

### "Email already registered"
- Use different email for testing
- Or delete `backend/dinesmart.db` to reset database

### Token expired
- Logout and login again
- Token expires after 30 minutes (configurable)

---

## 📦 Project Dependencies

### Backend
- fastapi==0.109.0
- sqlalchemy==2.0.25
- uvicorn==0.27.0
- pydantic==2.5.3
- python-jose==3.3.0
- passlib==1.7.4
- cryptography==41.0.7

### Frontend
- react@19.2.0
- react-router-dom@7.13.1
- tailwindcss@3.4.4
- vite@7.3.1

---

## 🚀 Deployment

### Environment Setup
1. Update `backend/.env` with production values
2. Change `SECRET_KEY` to a strong secret
3. Update CORS `origins` to your domain
4. Use PostgreSQL instead of SQLite for production
5. Enable HTTPS
6. Set up proper logging and monitoring

---

## 📝 Next Steps

### Phase 2 Features (Optional)
- [ ] Password reset functionality
- [ ] Email verification
- [ ] Refresh tokens
- [ ] User avatars
- [ ] Order management
- [ ] Favorites/bookmarks
- [ ] Reviews and ratings
- [ ] Search functionality
- [ ] Payment integration
- [ ] Real-time notifications

---

## 📞 Support

For issues or questions:
1. Check `SETUP.md` for setup issues
2. Check `QUICK_REFERENCE.md` for command reference
3. Check `backend/README.md` for API issues
4. Review error messages in browser console

---

## 📄 License

This project is part of the DineSmart application.

---

## 🎉 Ready to Use!

Everything is set up and ready to go. Start with:

1. **Read**: `SETUP.md`
2. **Run**: Backend and frontend servers
3. **Test**: Registration and login flows
4. **Explore**: `http://localhost:8000/docs` for API

**Happy coding!** 🚀

---

**Last Updated**: April 3, 2024
**Status**: ✅ Production Ready (Development Mode)
