# DineSmart Backend API

A FastAPI-based backend for the DineSmart food ordering application with user authentication and management.

## Features

- **User Authentication**: Register and login with secure password hashing
- **JWT Tokens**: JSON Web Token-based authentication
- **SQLite Database**: Lightweight database with SQLAlchemy ORM
- **User Management**: View and update user profiles
- **CORS Support**: Cross-Origin Resource Sharing enabled for frontend
- **Email Validation**: Built-in email validation with Pydantic

## Tech Stack

- **Framework**: FastAPI
- **ORM**: SQLAlchemy
- **Database**: SQLite
- **Authentication**: JWT (python-jose)
- **Password Hashing**: Passlib with bcrypt
- **Server**: Uvicorn

## Installation

### Prerequisites

- Python 3.8+
- pip

### Setup

1. **Clone the repository** (if needed)
   ```bash
   cd DineSmart/backend
   ```

2. **Create a virtual environment**
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```

4. **Set up environment variables**
   - Create a `.env` file in the backend root directory
   - Update `SECRET_KEY` with a strong secret key for production
   ```env
   DATABASE_URL=sqlite:///./dinesmart.db
   SECRET_KEY=your-secret-key-change-this-in-production
   ALGORITHM=HS256
   ACCESS_TOKEN_EXPIRE_MINUTES=30
   ```

## Running the Server

```bash
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

The API will be available at `http://localhost:8000`

### Interactive API Documentation

- **Swagger UI**: `http://localhost:8000/docs`
- **ReDoc**: `http://localhost:8000/redoc`

## API Endpoints

### Authentication

#### Register User
- **Endpoint**: `POST /api/auth/register`
- **Body**:
  ```json
  {
    "full_name": "John Doe",
    "email": "john@example.com",
    "phone": "+1-555-000-0000",
    "password": "secure_password",
    "confirm_password": "secure_password"
  }
  ```
- **Response**: User object with access token

#### Login User
- **Endpoint**: `POST /api/auth/login`
- **Body**:
  ```json
  {
    "email": "john@example.com",
    "password": "secure_password"
  }
  ```
- **Response**: User object with access token

### User Management

#### Get Current User
- **Endpoint**: `GET /api/users/me`
- **Headers**: `Authorization: Bearer <token>`
- **Response**: Current user information

#### Update User
- **Endpoint**: `PUT /api/users/me`
- **Headers**: `Authorization: Bearer <token>`
- **Body**:
  ```json
  {
    "full_name": "Jane Doe",
    "phone": "+1-555-111-1111"
  }
  ```
- **Response**: Updated user object

### Health Check

#### Server Health
- **Endpoint**: `GET /health`
- **Response**: Server status

## Database Schema

### Users Table

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
)
```

## Project Structure

```
backend/
├── main.py                 # Main application file with routes
├── models.py              # SQLAlchemy database models
├── schemas.py             # Pydantic request/response schemas
├── database.py            # Database configuration
├── security.py            # Authentication and hashing utilities
├── config.py              # Application configuration
├── requirements.txt       # Python dependencies
├── .env                   # Environment variables
├── .gitignore            # Git ignore file
└── README.md             # This file
```

## Error Handling

The API returns appropriate HTTP status codes:

- `200`: Success
- `400`: Bad request (validation error)
- `401`: Unauthorized (invalid credentials)
- `409`: Conflict (duplicate email)
- `500`: Internal server error

## Security Considerations

1. **Change SECRET_KEY**: Always use a strong, unique SECRET_KEY in production
2. **HTTPS**: Use HTTPS in production
3. **CORS**: Adjust allowed origins based on your frontend deployment
4. **Password**: Passwords are hashed using bcrypt before storage
5. **Tokens**: Access tokens expire after 30 minutes (configurable)

## Future Enhancements

- Add refresh tokens for better security
- Implement password reset functionality
- Add email verification
- Implement rate limiting
- Add order management endpoints
- Add restaurant and menu management
- Implement user preferences and favorites

## Troubleshooting

### Database Issues
- Delete `dinesmart.db` and restart the server to reset the database

### CORS Errors
- Check that your frontend URL is in the `allowed_origins` list in `main.py`

### Authentication Errors
- Ensure the token is being sent in the `Authorization` header as `Bearer <token>`
- Check that the token hasn't expired

## License

This project is part of the DineSmart application.

## Support

For issues or questions, please contact the development team.
