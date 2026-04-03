const API_BASE_URL = "http://localhost:8000";

export const authAPI = {
  register: async (userData) => {
    const response = await fetch(`${API_BASE_URL}/api/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    return response.json();
  },

  login: async (email, password) => {
    const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    return response.json();
  },

  getCurrentUser: async (token) => {
    const response = await fetch(`${API_BASE_URL}/api/users/me`, {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${token}`,
      },
    });
    return response.json();
  },

  updateUser: async (token, userData) => {
    const response = await fetch(`${API_BASE_URL}/api/users/me`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
      body: JSON.stringify(userData),
    });
    return response.json();
  },
};

export const logout = () => {
  localStorage.removeItem("access_token");
  localStorage.removeItem("user");
};

export const getStoredToken = () => {
  return localStorage.getItem("access_token");
};

export const getStoredUser = () => {
  const userStr = localStorage.getItem("user");
  return userStr ? JSON.parse(userStr) : null;
};

export const isAuthenticated = () => {
  return !!getStoredToken();
};
