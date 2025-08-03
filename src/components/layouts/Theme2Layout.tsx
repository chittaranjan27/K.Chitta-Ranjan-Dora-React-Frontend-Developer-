"use client"

import type { ReactNode } from "react"

interface Theme2LayoutProps {
  children: ReactNode
}

export default function Theme2Layout({ children }: Theme2LayoutProps) {
  return (
    <div className="min-h-screen bg-gray-900 font-serif">
      <div className="pt-16 flex">
        {/* Sidebar */}
        <aside className="hidden lg:block w-64 bg-gray-800 min-h-screen p-6">
          <div className="text-white">
            <h3 className="text-lg font-bold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8 lg:p-12">
          <div className="max-w-6xl mx-auto">{children}</div>
        </main>
      </div>
    </div>
  )
}
