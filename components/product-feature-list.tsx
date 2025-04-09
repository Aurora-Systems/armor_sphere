import { CheckCircle } from "lucide-react"

interface ProductFeatureListProps {
  features: string[]
}

export default function ProductFeatureList({ features }: ProductFeatureListProps) {
  return (
    <ul className="space-y-3">
      {features.map((feature, index) => (
        <li key={index} className="flex items-start">
          <CheckCircle className="h-5 w-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
          <span className="text-gray-300">{feature}</span>
        </li>
      ))}
    </ul>
  )
}
