"use client"

import Image from "next/image"
import type { Product } from "@/lib/types"
import { useTheme } from "@/contexts/ThemeContext"

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const { currentTheme } = useTheme()

  const getCardClasses = () => {
    switch (currentTheme) {
      case "theme1":
        return "bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow"
      case "theme2":
        return "bg-gray-800 border border-gray-700 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
      case "theme3":
        return "bg-gradient-to-br from-pink-100 to-purple-100 border-2 border-purple-200 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
      default:
        return "bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow"
    }
  }

  const getTextClasses = () => {
    switch (currentTheme) {
      case "theme1":
        return "text-gray-900"
      case "theme2":
        return "text-white"
      case "theme3":
        return "text-purple-900"
      default:
        return "text-gray-900"
    }
  }

  const getPriceClasses = () => {
    switch (currentTheme) {
      case "theme1":
        return "text-blue-600 font-semibold"
      case "theme2":
        return "text-blue-400 font-semibold"
      case "theme3":
        return "text-pink-600 font-bold text-lg"
      default:
        return "text-blue-600 font-semibold"
    }
  }

  return (
    <div className={`p-4 ${getCardClasses()}`}>
      <div className="aspect-square relative mb-4 overflow-hidden rounded-lg">
        <Image
          src={product.image || "/placeholder.svg?height=300&width=300"}
          alt={product.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <h3 className={`font-medium mb-2 line-clamp-2 ${getTextClasses()}`}>{product.title}</h3>
      <p
        className={`text-sm mb-3 line-clamp-3 ${
          currentTheme === "theme1" ? "text-gray-600" : currentTheme === "theme2" ? "text-gray-400" : "text-purple-700"
        }`}
      >
        {product.description}
      </p>
      <div className="flex justify-between items-center">
        <span className={getPriceClasses()}>${product.price.toFixed(2)}</span>
        <div
          className={`flex items-center text-sm ${
            currentTheme === "theme1"
              ? "text-gray-500"
              : currentTheme === "theme2"
                ? "text-gray-400"
                : "text-purple-600"
          }`}
        >
          ⭐ {product.rating.rate}
        </div>
      </div>
    </div>
  )
}
