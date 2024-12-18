"use client"

import { createContext } from "react"

interface AuthContextType {
  token: string
  uuid: string
  setAuthData: (token: string, uuid: string) => void
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export default AuthContext
