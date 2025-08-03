"use client"

import type React from "react"
import { useState } from "react"
import ThemeWrapper from "@/components/ThemeWrapper"
import { useTheme } from "@/contexts/ThemeContext"

export default function ContactPage() {
  const { currentTheme } = useTheme()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

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

  const getFormClasses = () => {
    switch (currentTheme) {
      case "theme1":
        return "bg-white p-8 rounded-lg shadow-sm border border-gray-200"
      case "theme2":
        return "bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-700"
      case "theme3":
        return "bg-white bg-opacity-20 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-white border-opacity-30"
      default:
        return "bg-white p-8 rounded-lg shadow-sm border border-gray-200"
    }
  }

  const getInputClasses = () => {
    switch (currentTheme) {
      case "theme1":
        return "w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      case "theme2":
        return "w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-blue-400 focus:border-transparent"
      case "theme3":
        return "w-full px-4 py-2 bg-white bg-opacity-80 border border-purple-300 rounded-lg focus:ring-2 focus:ring-pink-400 focus:border-transparent"
      default:
        return "w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
    }
  }

  const getLabelClasses = () => {
    switch (currentTheme) {
      case "theme1":
        return "block text-sm font-medium text-gray-700 mb-2"
      case "theme2":
        return "block text-sm font-medium text-gray-300 mb-2"
      case "theme3":
        return "block text-sm font-bold text-white mb-2 drop-shadow-sm"
      default:
        return "block text-sm font-medium text-gray-700 mb-2"
    }
  }

  const getButtonClasses = () => {
    switch (currentTheme) {
      case "theme1":
        return "w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors font-medium"
      case "theme2":
        return "w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors font-medium"
      case "theme3":
        return "w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-2 px-4 rounded-lg hover:from-pink-600 hover:to-purple-700 transition-all font-bold shadow-lg"
      default:
        return "w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors font-medium"
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    alert("✌️Thank you for your message! #This is a demo")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <ThemeWrapper>
      <div className="max-w-2xl mx-auto">
        <h1 className={getHeadingClasses()}>{currentTheme === "theme3" ? "📧 Contact Us 📧" : "Contact Us"}</h1>

        <div className={getFormClasses()}>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className={getLabelClasses()}>
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className={getInputClasses()}
                placeholder="Full name"
              />
            </div>

            <div>
              <label htmlFor="email" className={getLabelClasses()}>
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className={getInputClasses()}
                placeholder="Your email address"
              />
            </div>

            <div>
              <label htmlFor="message" className={getLabelClasses()}>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className={getInputClasses()}
                placeholder="Tell us how we can help you..."
              />
            </div>

            <button type="submit" className={getButtonClasses()}>
              Send Message
            </button>
          </form>
        </div>

        <div className="mt-8 text-center">
          <p
            className={`text-sm ${
              currentTheme === "theme1"
                ? "text-gray-600"
                : currentTheme === "theme2"
                  ? "text-gray-400"
                  : "text-white text-opacity-90"
            }`}
          >
            We value your feedback and inquiries. Feel free to reach out with any questions or comments!
          </p>
        </div>
      </div>
    </ThemeWrapper>
  )
}
