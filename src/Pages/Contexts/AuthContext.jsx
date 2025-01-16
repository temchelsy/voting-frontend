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

  const isAuthenticated = Boolean(currentUser) && !currentUserLoading;

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");
    setCurrentUser(null);
    setCurrentUserLoading(false);
  };

  const fetchCurrentUser = async (token) => {
    try {
      console.log('Fetching current user with token:', token);
      
      const response = await fetch(`${API_URL}/users/current-user`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
      });
  
      if (!response.ok) {
        console.error('Failed to fetch user:', response.status);
        throw new Error("Failed to fetch current user");
      }
  
      const userData = await response.json();
      console.log('Received user data:', userData);
  
      // Ensure that userData has a 'data' field and is valid
      if (userData && userData.success && userData.data && userData.data._id) {
        setCurrentUser(userData.data); // Use the nested 'data' field
      } else {
        console.error('Invalid user data format:', userData);
        throw new Error("Invalid user data received");
      }
    } catch (error) {
      console.error('Error fetching current user:', error);
      logout();
    } finally {
      setCurrentUserLoading(false);
    }
  };
  
  
  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log('Initial token check:', Boolean(token));
    
    if (token) {
      setCurrentUserLoading(true);
      fetchCurrentUser(token);
    } else {
      setCurrentUserLoading(false);
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