"use client"

import type { ReactNode } from "react"
import { useTheme } from "@/contexts/ThemeContext"
import Theme1Layout from "./layouts/Theme1Layout"
import Theme2Layout from "./layouts/Theme2Layout"
import Theme3Layout from "./layouts/Theme3Layout"

interface ThemeWrapperProps {
  children: ReactNode
}

export default function ThemeWrapper({ children }: ThemeWrapperProps) {
  const { currentTheme } = useTheme()

  switch (currentTheme) {
    case "theme1":
      return <Theme1Layout>{children}</Theme1Layout>
    case "theme2":
      return <Theme2Layout>{children}</Theme2Layout>
    case "theme3":
      return <Theme3Layout>{children}</Theme3Layout>
    default:
      return <Theme1Layout>{children}</Theme1Layout>
  }
}
