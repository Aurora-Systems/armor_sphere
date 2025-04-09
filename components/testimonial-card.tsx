import { Quote } from "lucide-react"

interface TestimonialCardProps {
  quote: string
  author: string
  role: string
}

export default function TestimonialCard({ quote, author, role }: TestimonialCardProps) {
  return (
    <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800/50 rounded-lg p-6 transition-all duration-300 hover:border-red-900/50">
      <Quote className="h-8 w-8 text-red-600 mb-4 opacity-50" />
      <p className="text-gray-300 mb-6 italic">"{quote}"</p>
      <div>
        <p className="font-semibold">{author}</p>
        <p className="text-sm text-gray-400">{role}</p>
      </div>
    </div>
  )
}
