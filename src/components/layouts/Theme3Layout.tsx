"use client"

import type { ReactNode } from "react"

interface Theme3LayoutProps {
  children: ReactNode
}

export default function Theme3Layout({ children }: Theme3LayoutProps) {
  return (
    <div
      className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500"
      style={{ fontFamily: "Pacifico, cursive" }}
    >
      <div className="pt-16">
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">{children}</div>
        </main>
      </div>
    </div>
  )
}
