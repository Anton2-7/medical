import { createContext, useContext, useState, useEffect } from "react";
import {
  initializeAuth,
  login as loginService,
  logout as logoutService,
  getCurrentUser,
} from "../services/auth";

const AuthContext = createContext(undefined);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  useEffect(() => {
    const init = async () => {
      await initializeAuth();
      const currentUser = getCurrentUser();
      setUser(currentUser);
      setLoading(false);
    };
    init();
  }, []);

  const login = (email, password) => {
    const success = loginService(email, password);
    if (success) {
      setUser(getCurrentUser());
      setIsLoginModalOpen(false);
    }
    return success;
  };

  const logout = () => {
    logoutService();
    setUser(null);
  };

  const openLoginModal = () => {
    setIsLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  const value = {
    user,
    isAuthenticated: !!user,
    loading,
    login,
    logout,

    isLoginModalOpen,
    openLoginModal,
    closeLoginModal,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// Хук для использования в компонентах
export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth возможно используется в пределах AuthProvider");
  }
  return context;
}
