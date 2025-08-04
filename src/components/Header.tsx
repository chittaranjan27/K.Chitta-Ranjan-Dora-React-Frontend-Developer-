"use client"

import { useState } from "react"
import Link from "next/link"
import { useTheme } from "@/contexts/ThemeContext"
import { ChevronDown } from "lucide-react"
import { useRef, useEffect } from "react"


export default function Header() {
  const { currentTheme, setTheme } = useTheme()
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const themes = [
    { id: "theme1", name: "Theme 1 - Minimalist" },
    { id: "theme2", name: "Theme 2 - Dark Sidebar" },
    { id: "theme3", name: "Theme 3 - Colorful Grid" },
  ]

  const getHeaderClasses = () => {
    const base = "fixed top-0 left-0 right-0 z-50"
    switch (currentTheme) {
      case "theme1":
        return `${base} bg-white shadow-sm border-b border-gray-200 text-gray-900`
      case "theme2":
        return `${base} bg-gray-900 text-white border-b border-gray-700`
      case "theme3":
        return `${base} bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg`
      default:
        return `${base} bg-white shadow-sm border-b border-gray-200 text-gray-900`
    }
  }

  const getNavLinkClasses = () => {
    switch (currentTheme) {
      case "theme1":
        return "text-gray-700 hover:text-gray-900 transition-colors"
      case "theme2":
        return "text-gray-300 hover:text-white transition-colors"
      case "theme3":
        return "text-white hover:text-yellow-200 transition-colors font-bold"
      default:
        return "text-gray-700 hover:text-gray-900 transition-colors"
    }
  }

  const getDropdownMenuStyle = () => {
    switch (currentTheme) {
      case "theme1":
        return "bg-white border border-gray-200"
      case "theme2":
        return "bg-gray-800 border border-gray-700"
      case "theme3":
        return "bg-white border border-purple-200"
      default:
        return "bg-white border border-gray-200"
    }
  }

  const getMobileMenuBg = () => {
    switch (currentTheme) {
      case "theme1":
        return "bg-white text-gray-900"
      case "theme2":
        return "bg-gray-900 text-white"
      case "theme3":
        return "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
      default:
        return "bg-white text-gray-900"
    }
  }

  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false)
      }
    }

    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isMobileMenuOpen])


  return (
    <header className={getHeaderClasses()}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold">
            {currentTheme === "theme3" ? "🎨 ThemeApp" : "ThemeApp"}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className={getNavLinkClasses()}>Home</Link>
            <Link href="/about" className={getNavLinkClasses()}>About</Link>
            <Link href="/contact" className={getNavLinkClasses()}>Contact</Link>
          </nav>

          {/* Mobile Hamburger Icon */}
          <button
            className="md:hidden text-2xl ml-2"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle Menu"
          >
            &#9776;
          </button>

          {/* Theme Switcher */}
          <div className="relative ml-4">
            <button
              onClick={() => setIsDropdownOpen((prev) => !prev)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-colors ${currentTheme === "theme1"
                ? "bg-gray-100 hover:bg-gray-200 text-gray-900"
                : currentTheme === "theme2"
                  ? "bg-gray-800 hover:bg-gray-700 text-white"
                  : "bg-white bg-opacity-20 hover:bg-opacity-30 text-white"
                }`}
            >
              <span className="text-sm font-medium">
                {themes.find((t) => t.id === currentTheme)?.name}
              </span>
              <ChevronDown className="w-4 h-4" />
            </button>

            {isDropdownOpen && (
              <div className={`absolute right-0 mt-2 w-56 rounded-md shadow-lg z-50 ${getDropdownMenuStyle()}`}>
                <div className="py-1">
                  {themes.map((theme) => (
                    <button
                      key={theme.id}
                      onClick={() => {
                        setTheme(theme.id as any)
                        setIsDropdownOpen(false)
                      }}
                      className={`block w-full text-left px-4 py-2 text-sm ${currentTheme === theme.id
                        ? currentTheme === "theme1"
                          ? "bg-gray-100 text-gray-900"
                          : currentTheme === "theme2"
                            ? "bg-gray-700 text-white"
                            : "bg-purple-100 text-purple-900"
                        : currentTheme === "theme1"
                          ? "text-gray-700 hover:bg-gray-50"
                          : currentTheme === "theme2"
                            ? "text-gray-300 hover:bg-gray-700"
                            : "text-gray-700 hover:bg-purple-50"
                        }`}
                    >
                      {theme.name}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <nav
          ref={menuRef}
          className={`md:hidden border-t shadow flex flex-col items-center gap-4 py-4 ${getMobileMenuBg()}`}
        >
          <Link href="/" className="w-full text-center py-2" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
          <Link href="/about" className="w-full text-center py-2" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
          <Link href="/contact" className="w-full text-center py-2" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
        </nav>
      )}
    </header>
  )
}
