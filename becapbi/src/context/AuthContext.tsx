"use client";

import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

interface AuthContextType {
  token: string | null;
  uuid: string | null;
  setAuthData: (token: string, uuid: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useState<string | null>(null);
  const [uuid, setUuid] = useState<string | null>(null);

  useEffect(() => {
    // Recuperamos token y UUID del localStorage al cargar la aplicación
    const savedToken = localStorage.getItem('token');
    const savedUuid = localStorage.getItem('uuid');
    if (savedToken && savedUuid) {
      setToken(savedToken);
      setUuid(savedUuid);
    }
  }, []);

  const setAuthData = (newToken: string, newUuid: string) => {
    setToken(newToken);
    setUuid(newUuid);
    localStorage.setItem('token', newToken);
    localStorage.setItem('uuid', newUuid);
  };

  const logout = () => {
    setToken(null);
    setUuid(null);
    localStorage.removeItem('token');
    localStorage.removeItem('uuid');
  };

  return (
    <AuthContext.Provider value={{ token, uuid, setAuthData, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth debe ser usado dentro de un AuthProvider');
  }
  return context;
};
