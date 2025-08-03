"use client"

import type { ReactNode } from "react"

interface Theme1LayoutProps {
  children: ReactNode
}

export default function Theme1Layout({ children }: Theme1LayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <div className="pt-16">
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">{children}</main>
      </div>
    </div>
  )
}
