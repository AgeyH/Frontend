import { createContext, useContext, useState } from "react";

/**
 * Auth Context
 * Handles logged-in user and role
 */
const AuthContext = createContext(null);

/**
 * Provider
 */
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // later from backend
  const [role, setRole] = useState(null); // staff | admin | director

  const login = (userData) => {
    setUser(userData.user);
    setRole(userData.role);
  };

  const logout = () => {
    setUser(null);
    setRole(null);
  };

  return (
    <AuthContext.Provider value={{ user, role, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

/**
 * Hook
 */
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }
  return context;
};
