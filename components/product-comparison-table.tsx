import { CheckCircle, X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Product {
  id: number
  name: string
  size: string
  dimensions: string
  weight: string
  price: number
  specifications: Record<string, string>
  features: string[]
}

interface ProductComparisonTableProps {
  products: Product[]
}

export default function ProductComparisonTable({ products }: ProductComparisonTableProps) {
  // Collect all unique features across all products
  const allFeatures = Array.from(new Set(products.flatMap((product) => product.features))).sort()

  // Collect all unique specification keys across all products
  const allSpecKeys = Array.from(new Set(products.flatMap((product) => Object.keys(product.specifications)))).sort()

  return (
    <div className="bg-zinc-900/30 backdrop-blur-sm rounded-lg border border-zinc-800/50 overflow-hidden">
      <table className="w-full min-w-[800px]">
        <thead>
          <tr className="bg-zinc-800/50">
            <th className="py-4 px-6 text-left">Features</th>
            {products.map((product) => (
              <th key={product.id} className="py-4 px-6 text-center">
                <div className="font-bold text-lg">{product.name}</div>
                <div className="text-red-500">{product.size}</div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-4 px-6 font-medium border-b border-zinc-800/50">Price</td>
            {products.map((product) => (
              <td key={product.id} className="py-4 px-6 text-center border-b border-zinc-800/50">
                <span className="font-bold">${product.price}</span>
              </td>
            ))}
          </tr>
          <tr>
            <td className="py-4 px-6 font-medium border-b border-zinc-800/50">Dimensions</td>
            {products.map((product) => (
              <td key={product.id} className="py-4 px-6 text-center border-b border-zinc-800/50">
                {product.dimensions}
              </td>
            ))}
          </tr>
          <tr>
            <td className="py-4 px-6 font-medium border-b border-zinc-800/50">Weight</td>
            {products.map((product) => (
              <td key={product.id} className="py-4 px-6 text-center border-b border-zinc-800/50">
                {product.weight}
              </td>
            ))}
          </tr>

          {/* Specifications */}
          {allSpecKeys.map((specKey) => (
            <tr key={specKey}>
              <td className="py-4 px-6 font-medium border-b border-zinc-800/50">{specKey}</td>
              {products.map((product) => (
                <td key={product.id} className="py-4 px-6 text-center border-b border-zinc-800/50">
                  {product.specifications[specKey] || "-"}
                </td>
              ))}
            </tr>
          ))}

          {/* Features */}
          {allFeatures.map((feature) => (
            <tr key={feature}>
              <td className="py-4 px-6 font-medium border-b border-zinc-800/50">{feature}</td>
              {products.map((product) => (
                <td key={product.id} className="py-4 px-6 text-center border-b border-zinc-800/50">
                  {product.features.includes(feature) ? (
                    <CheckCircle className="h-5 w-5 text-red-500 mx-auto" />
                  ) : (
                    <X className="h-5 w-5 text-gray-600 mx-auto" />
                  )}
                </td>
              ))}
            </tr>
          ))}

          {/* Action row */}
          <tr>
            <td className="py-6 px-6"></td>
            {products.map((product) => (
              <td key={product.id} className="py-6 px-6 text-center">
                <Button className="bg-red-600 hover:bg-red-700 text-white w-full">Select {product.name}</Button>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  )
}
