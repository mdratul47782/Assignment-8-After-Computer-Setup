import { createContext, useState, useContext } from "react";

// 1. Create Auth Context
const AuthContext = createContext();

// 2. Create AuthProvider
export function AuthProvider({ children }) {
  const [authUser, setAuthUser] = useState(null); // Initially, no user is logged in.

  const login = (user) => {
    setAuthUser(user); // Set the authenticated user.
  };

  const logout = () => {
    setAuthUser(null); // Clear user data on logout.
  };

  return (
    <AuthContext.Provider value={{ authUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// 3. Custom hook to use AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};
