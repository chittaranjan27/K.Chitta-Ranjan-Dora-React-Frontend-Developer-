"use client"

import { useState, useEffect } from "react"
import type { Product } from "@/lib/types"
import ProductCard from "@/components/ProductCard"
import ThemeWrapper from "@/components/ThemeWrapper"
import { useTheme } from "@/contexts/ThemeContext"

export default function HomePage() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const { currentTheme } = useTheme()

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("https://fakestoreapi.com/products")
        const data = await response.json()
        setProducts(data)
      } catch (error) {
        console.error("Error fetching products:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  const getHeadingClasses = () => {
    switch (currentTheme) {
      case "theme1":
        return "text-3xl font-bold text-gray-900 mb-8"
      case "theme2":
        return "text-4xl font-bold text-white mb-8 font-serif"
      case "theme3":
        return "text-4xl font-bold text-white mb-8 text-center drop-shadow-lg"
      default:
        return "text-3xl font-bold text-gray-900 mb-8"
    }
  }

  const getGridClasses = () => {
    switch (currentTheme) {
      case "theme1":
        return "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
      case "theme2":
        return "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      case "theme3":
        return "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      default:
        return "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
    }
  }

  if (loading) {
    return (
      <ThemeWrapper>
        <div className="flex justify-center items-center min-h-[400px]">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-current"></div>
        </div>
      </ThemeWrapper>
    )
  }

  return (
    <ThemeWrapper>
      <div>
        <h1 className={getHeadingClasses()}>
          {currentTheme === "theme3" ? "🛍️ Featured Products 🛍️" : "Featured Products"}
        </h1>
        <div className={getGridClasses()}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </ThemeWrapper>
  )
}
