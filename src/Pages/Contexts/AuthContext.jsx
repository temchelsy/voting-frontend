import React, { createContext, useContext, useState, useEffect } from 'react';
import API_URL from '../Constants/Constants';
const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [currentUserLoading, setCurrentUserLoading] = useState(true);
  const [refetchCurrentUser, setRefetchCurrentUser] = useState(false);

  const isAuthenticated = currentUser && !currentUserLoading;

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");
    setCurrentUser(null);
    setCurrentUserLoading(true);
  };

  const fetchCurrentUser = async (token) => {
    try {
      const response = await fetch(`${API_URL}/users/current-user`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch current user");
      }

      const user = await response.json();
      setCurrentUser(user);
    } catch (error) {
      logout();
    } finally {
      setCurrentUserLoading(false);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      fetchCurrentUser(token);
    }
  }, [refetchCurrentUser]);

  return (
    <AuthContext.Provider value={{
      isAuthenticated,
      logout,
      currentUser,
      setCurrentUser,
      currentUserLoading,
      setRefetchCurrentUser
    }}>
      {children}
    </AuthContext.Provider>
  );
};
