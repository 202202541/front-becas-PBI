"use client"

import AuthContext from "@/context/AuthContext"
import { ReactNode, useEffect, useState } from "react"

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useState<string>("")
  const [uuid, setUuid] = useState<string>("")

  useEffect(() => {
    // Recuperamos token y UUID del localStorage al cargar la aplicación
    const savedToken = localStorage.getItem("token")
    const savedUuid = localStorage.getItem("uuid")
    if (savedToken && savedUuid) {
      setToken(savedToken)
      setUuid(savedUuid)
    }
  }, [])

  const setAuthData = (newToken: string, newUuid: string) => {
    setToken(newToken)
    setUuid(newUuid)
    localStorage.setItem("token", newToken)
    localStorage.setItem("uuid", newUuid)
  }

  const logout = () => {
    setToken("")
    setUuid("")
    localStorage.removeItem("token")
    localStorage.removeItem("uuid")
  }

  return (
    <AuthContext.Provider value={{ token, uuid, setAuthData, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
