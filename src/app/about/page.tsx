"use client"

import ThemeWrapper from "@/components/ThemeWrapper"
import { useTheme } from "@/contexts/ThemeContext"

export default function AboutPage() {
  const { currentTheme } = useTheme()

  const getHeadingClasses = () => {
    switch (currentTheme) {
      case "theme1":
        return "text-3xl font-bold text-gray-900 mb-6"
      case "theme2":
        return "text-4xl font-bold text-white mb-6 font-serif"
      case "theme3":
        return "text-4xl font-bold text-white mb-6 text-center drop-shadow-lg"
      default:
        return "text-3xl font-bold text-gray-900 mb-6"
    }
  }

  const getTextClasses = () => {
    switch (currentTheme) {
      case "theme1":
        return "text-gray-700 leading-relaxed"
      case "theme2":
        return "text-gray-300 leading-relaxed text-lg"
      case "theme3":
        return "text-white leading-relaxed text-lg drop-shadow-sm"
      default:
        return "text-gray-700 leading-relaxed"
    }
  }

  return (
    <ThemeWrapper>
      <div className="max-w-4xl mx-auto">
        <h1 className={getHeadingClasses()}>{currentTheme === "theme3" ? "✨ About Us ✨" : "About Us"}</h1>

        <div className="space-y-6">
          <p className={getTextClasses()}>
           This project is a fun and practical example of how dynamic theming can be used in modern web development, built with Next.js 14, TypeScript, and Tailwind CSS.
          </p>

          <p className={getTextClasses()}>
            You can switch between three unique themes, each with its own style and personality:
          </p>

          <div className="space-y-4">
            <div
              className={`p-4 rounded-lg ${
                currentTheme === "theme1"
                  ? "bg-white border border-gray-200"
                  : currentTheme === "theme2"
                    ? "bg-gray-800 border border-gray-700"
                    : "bg-white bg-opacity-20 backdrop-blur-sm border border-white border-opacity-30"
              }`}
            >
              <h3
                className={`font-bold mb-2 ${
                  currentTheme === "theme1" ? "text-gray-900" : currentTheme === "theme2" ? "text-white" : "text-white"
                }`}
              >
                Theme 1 - Minimalist
              </h3>
              <p
                className={`text-sm ${
                  currentTheme === "theme1"
                    ? "text-gray-600"
                    : currentTheme === "theme2"
                      ? "text-gray-400"
                      : "text-white text-opacity-90"
                }`}
              >
                A clean and simple look with soft colors, spacious layouts, and easy-to-read sans-serif fonts.
              </p>
            </div>

            <div
              className={`p-4 rounded-lg ${
                currentTheme === "theme1"
                  ? "bg-white border border-gray-200"
                  : currentTheme === "theme2"
                    ? "bg-gray-800 border border-gray-700"
                    : "bg-white bg-opacity-20 backdrop-blur-sm border border-white border-opacity-30"
              }`}
            >
              <h3
                className={`font-bold mb-2 ${
                  currentTheme === "theme1" ? "text-gray-900" : currentTheme === "theme2" ? "text-white" : "text-white"
                }`}
              >
                Theme 2 - Dark Sidebar
              </h3>
              <p
                className={`text-sm ${
                  currentTheme === "theme1"
                    ? "text-gray-600"
                    : currentTheme === "theme2"
                      ? "text-gray-400"
                      : "text-white text-opacity-90"
                }`}
              >
               A sleek, professional dark theme with a sidebar layout and elegant serif fonts — great for focused work.
              </p>
            </div>

            <div
              className={`p-4 rounded-lg ${
                currentTheme === "theme1"
                  ? "bg-white border border-gray-200"
                  : currentTheme === "theme2"
                    ? "bg-gray-800 border border-gray-700"
                    : "bg-white bg-opacity-20 backdrop-blur-sm border border-white border-opacity-30"
              }`}
            >
              <h3
                className={`font-bold mb-2 ${
                  currentTheme === "theme1" ? "text-gray-900" : currentTheme === "theme2" ? "text-white" : "text-white"
                }`}
              >
                Theme 3 - Colorful Grid
              </h3>
              <p
                className={`text-sm ${
                  currentTheme === "theme1"
                    ? "text-gray-600"
                    : currentTheme === "theme2"
                      ? "text-gray-400"
                      : "text-white text-opacity-90"
                }`}
              >
                A vibrant, playful design filled with gradients, bold colors, and fun typography to bring energy to your interface.
              </p>
            </div>
          </div>

          <p className={getTextClasses()}>
           We've used React Context API to handle theme changes smoothly and localStorage to remember your chosen theme, so it stays consistent every time you visit.
          </p>
        </div>
      </div>
    </ThemeWrapper>
  )
}
