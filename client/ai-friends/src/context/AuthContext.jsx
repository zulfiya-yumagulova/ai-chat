import { createContext, useState, useEffect } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [authUser, setAuthUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = async (email, password) => {};
  const logout = async (name, email, password) => {};
  const signup = async (name, email, password) => {};
  const value = {
    authUser,
    setAuthUser,
    isLoggedIn,
    setIsLoggedIn,
    login,
    logout,
    signup,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
