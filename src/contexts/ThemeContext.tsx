"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import type { ThemeType, ThemeContextType } from "@/lib/types"

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [currentTheme, setCurrentTheme] = useState<ThemeType>("theme1")
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Load theme from localStorage on mount
    const savedTheme = localStorage.getItem("selectedTheme") as ThemeType
    if (savedTheme && ["theme1", "theme2", "theme3"].includes(savedTheme)) {
      setCurrentTheme(savedTheme)
    }
    setIsLoaded(true)
  }, [])

  const setTheme = (theme: ThemeType) => {
    setCurrentTheme(theme)
    localStorage.setItem("selectedTheme", theme)
    // localStorage.clear()
  }

  if (!isLoaded) {
    return <div className="min-h-screen bg-white" />
  }

  return (
    <ThemeContext.Provider value={{ currentTheme, setTheme }}>
      <div className={`theme-${currentTheme} transition-all duration-500 ease-in-out`}>{children}</div>
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}
