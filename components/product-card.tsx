"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

interface ProductProps {
  product: {
    id: number
    name: string
    size: string
    dimensions: string
    weight: string
    price: number
    image: string
    features: string[]
  }
}

export default function ProductCard({ product }: ProductProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="relative group" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <div className="relative overflow-hidden rounded-lg transition-all duration-300 transform group-hover:scale-[1.02]">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-10"></div>

        <div className="relative bg-zinc-900/50 backdrop-blur-sm border border-zinc-800/50 rounded-lg overflow-hidden h-full flex flex-col">
          {/* Product Image */}
          <div className="relative h-48 overflow-hidden">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute top-2 right-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full z-20">
              {product.size}
            </div>
          </div>

          {/* Product Info */}
          <div className="p-5 flex flex-col flex-grow">
            <h3 className="text-xl font-bold mb-2">{product.name}</h3>

            <div className="space-y-2 mb-4 text-sm text-gray-300">
              <p>Dimensions: {product.dimensions}</p>
              <p>Weight: {product.weight}</p>
            </div>

            <div className="mt-auto">
              <div className="flex justify-between items-center mb-4">
                <span className="text-2xl font-bold text-white">${product.price}</span>
                <Button size="sm" variant="outline" className="border-red-600 text-red-500 hover:bg-red-900/20">
                  Details
                </Button>
              </div>

              <Button className="w-full bg-red-600 hover:bg-red-700 text-white">Add to Quote</Button>
            </div>
          </div>
        </div>

        {/* Features Overlay */}
        <div
          className={`absolute inset-0 bg-black/90 backdrop-blur-sm p-5 flex flex-col transition-all duration-300 z-20 ${isHovered ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        >
          <h4 className="text-lg font-bold mb-4 text-red-500">Key Features</h4>
          <ul className="space-y-2">
            {product.features.map((feature, index) => (
              <li key={index} className="flex items-center">
                <CheckCircle className="h-4 w-4 text-red-500 mr-2" />
                <span className="text-sm">{feature}</span>
              </li>
            ))}
          </ul>
          <div className="mt-auto">
            <Button className="w-full bg-red-600 hover:bg-red-700 text-white">Add to Quote</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
