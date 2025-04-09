import Image from "next/image"
import Link from "next/link"
import { Shield, Lock, ArrowRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import ProductFeatureList from "@/components/product-feature-list"
import ProductComparisonTable from "@/components/product-comparison-table"

export default function ProductsPage() {
  const products = [
    {
      id: 1,
      name: "Compact Vault",
      size: "26L",
      dimensions: "50 × 40 × 40 CM",
      weight: "140 KGS",
      price: 300,
      image: "/placeholder.svg?height=500&width=500",
      description: "Perfect for home use, the Compact Vault offers essential security in a space-saving design.",
      features: [
        "Fire resistant up to 1 hour at 1700°F",
        "Digital lock with backup key",
        "Emergency override system",
        "4 anchor points for secure installation",
        "Reinforced steel door (10mm thickness)",
        "Anti-pry design",
        "Scratch-resistant powder coating",
      ],
      specifications: {
        "External Dimensions": "50 × 40 × 40 CM",
        "Internal Dimensions": "42 × 32 × 32 CM",
        Weight: "140 KGS",
        Volume: "26L",
        "Door Thickness": "10mm solid steel",
        "Body Construction": "Double-walled steel with fire-resistant material",
        "Lock Type": "Digital with key backup",
        "Power Source": "2 AA batteries (included)",
        Warranty: "5 years",
      },
      rating: 4.7,
      bestFor: ["Apartments", "Small homes", "Office spaces"],
    },
    {
      id: 2,
      name: "Standard Vault",
      size: "60L",
      dimensions: "66 × 48 × 40 CM",
      weight: "190 KGS",
      price: 600,
      image: "/placeholder.svg?height=500&width=500",
      description: "Our most popular model, balancing capacity and security for the average household.",
      features: [
        "Fire resistant up to 2 hours at 1700°F",
        "Digital lock with backup key",
        "Emergency override system",
        "6 anchor points for secure installation",
        "Reinforced steel door (12mm thickness)",
        "Anti-pry design",
        "Interior LED lighting",
        "Scratch-resistant powder coating",
        "Adjustable shelving",
      ],
      specifications: {
        "External Dimensions": "66 × 48 × 40 CM",
        "Internal Dimensions": "58 × 40 × 32 CM",
        Weight: "190 KGS",
        Volume: "60L",
        "Door Thickness": "12mm solid steel",
        "Body Construction": "Double-walled steel with fire-resistant material",
        "Lock Type": "Digital with key backup",
        "Power Source": "4 AA batteries (included)",
        Warranty: "10 years",
      },
      rating: 4.8,
      bestFor: ["Family homes", "Small businesses", "Document storage"],
    },
    {
      id: 3,
      name: "Family Vault",
      size: "80L",
      dimensions: "66 × 50 × 50 CM",
      weight: "240 KGS",
      price: 700,
      image: "/placeholder.svg?height=500&width=500",
      description: "Designed for families with extensive valuables requiring both space and advanced protection.",
      features: [
        "Fire resistant up to 2 hours at 1700°F",
        "Digital lock with backup key",
        "Emergency override system",
        "8 anchor points for secure installation",
        "Reinforced steel door (15mm thickness)",
        "Anti-pry design",
        "Interior LED lighting",
        "Humidity control system",
        "Scratch-resistant powder coating",
        "Adjustable shelving",
        "Soft interior lining",
      ],
      specifications: {
        "External Dimensions": "66 × 50 × 50 CM",
        "Internal Dimensions": "58 × 42 × 42 CM",
        Weight: "240 KGS",
        Volume: "80L",
        "Door Thickness": "15mm solid steel",
        "Body Construction": "Triple-walled steel with fire-resistant material",
        "Lock Type": "Digital with key backup",
        "Power Source": "4 AA batteries (included)",
        Warranty: "Lifetime limited warranty",
      },
      rating: 4.9,
      bestFor: ["Large families", "Collectors", "Valuable document storage"],
    },
    {
      id: 4,
      name: "Premium Vault",
      size: "200L",
      dimensions: "130 × 52 × 55 CM",
      weight: "600 KGS",
      price: 1100,
      image: "/placeholder.svg?height=500&width=500",
      description: "Our flagship model offering maximum security and capacity for serious protection needs.",
      features: [
        "Fire resistant up to 3 hours at 1700°F",
        "Digital lock with backup key",
        "Biometric fingerprint scanner",
        "Emergency override system",
        "12 anchor points for secure installation",
        "Reinforced steel door (20mm thickness)",
        "Anti-pry design",
        "Interior LED lighting with motion sensor",
        "Advanced humidity control system",
        "Scratch-resistant powder coating",
        "Adjustable shelving and compartments",
        "Soft interior lining",
        "Silent alarm capability",
        "Network connectivity for remote monitoring",
      ],
      specifications: {
        "External Dimensions": "130 × 52 × 55 CM",
        "Internal Dimensions": "122 × 44 × 47 CM",
        Weight: "600 KGS",
        Volume: "200L",
        "Door Thickness": "20mm solid steel",
        "Body Construction": "Triple-walled steel with advanced fire-resistant material",
        "Lock Type": "Digital + Biometric with key backup",
        "Power Source": "4 AA batteries with backup power system",
        Warranty: "Lifetime limited warranty with extended service plan",
      },
      rating: 5.0,
      bestFor: ["Businesses", "High-value collections", "Multi-user environments"],
    },
  ]

  return (
    <main className="min-h-screen bg-black text-white pb-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black z-10"></div>
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=1200')] bg-cover bg-center opacity-20"></div>
        </div>
        <div className="container mx-auto px-4 z-20 relative">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              Security <span className="text-red-600">Without Compromise</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl">
              Explore our complete range of premium security safes, each engineered to provide unmatched protection for
              your most valuable possessions.
            </p>
          </div>
        </div>
      </section>

      {/* Product Navigation */}
      <section className="py-8 bg-zinc-900/50 backdrop-blur-sm sticky top-16 z-30">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            {products.map((product) => (
              <a
                key={product.id}
                href={`#product-${product.id}`}
                className="px-4 py-2 bg-zinc-800/50 hover:bg-red-900/30 rounded-full transition-colors border border-zinc-700 hover:border-red-700"
              >
                {product.name}
              </a>
            ))}
            <a
              href="#comparison"
              className="px-4 py-2 bg-red-900/30 hover:bg-red-900/50 rounded-full transition-colors border border-red-700"
            >
              Compare All
            </a>
          </div>
        </div>
      </section>

      {/* Individual Product Sections */}
      {products.map((product) => (
        <section key={product.id} id={`product-${product.id}`} className="py-20 border-b border-zinc-800 scroll-mt-32">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="bg-zinc-900/30 backdrop-blur-sm rounded-lg p-6 border border-zinc-800/50 overflow-hidden relative group">
                <div className="absolute top-4 right-4 bg-red-600 text-white text-sm font-bold px-3 py-1 rounded-full z-10">
                  {product.size}
                </div>
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={500}
                  height={500}
                  className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div>
                <div className="flex items-center mb-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${i < Math.floor(product.rating) ? "fill-red-500 text-red-500" : "fill-zinc-700 text-zinc-700"}`}
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-gray-400">{product.rating}/5</span>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">{product.name}</h2>
                <p className="text-xl text-gray-300 mb-6">{product.description}</p>

                <div className="mb-6">
                  <span className="text-3xl font-bold">${product.price}</span>
                  <span className="text-gray-400 ml-2">Free delivery & installation</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <div className="bg-zinc-900/30 backdrop-blur-sm rounded-lg p-4 border border-zinc-800/50">
                    <h3 className="font-semibold mb-2 text-red-500">Dimensions</h3>
                    <p className="text-gray-300">{product.dimensions}</p>
                  </div>
                  <div className="bg-zinc-900/30 backdrop-blur-sm rounded-lg p-4 border border-zinc-800/50">
                    <h3 className="font-semibold mb-2 text-red-500">Weight</h3>
                    <p className="text-gray-300">{product.weight}</p>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4">Best For:</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.bestFor.map((use, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-zinc-800/50 rounded-full text-sm border border-zinc-700"
                      >
                        {use}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
                    Request Quote
                  </Button>
                  <Button size="lg" variant="outline" className="border-red-600 text-red-500 hover:bg-red-900/20">
                    Download Specs
                  </Button>
                </div>
              </div>
            </div>

            <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <Shield className="mr-2 h-6 w-6 text-red-500" />
                  Key Features
                </h3>
                <ProductFeatureList features={product.features} />
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <Lock className="mr-2 h-6 w-6 text-red-500" />
                  Technical Specifications
                </h3>
                <div className="bg-zinc-900/30 backdrop-blur-sm rounded-lg border border-zinc-800/50 overflow-hidden">
                  <table className="w-full">
                    <tbody>
                      {Object.entries(product.specifications).map(([key, value], index) => (
                        <tr key={key} className={`${index % 2 === 0 ? "bg-zinc-800/20" : "bg-transparent"}`}>
                          <td className="py-3 px-4 border-b border-zinc-800/50 font-medium">{key}</td>
                          <td className="py-3 px-4 border-b border-zinc-800/50 text-gray-300">{value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Product Comparison Section */}
      <section id="comparison" className="py-20 scroll-mt-32">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center tracking-tight">
            Product <span className="text-red-600">Comparison</span>
          </h2>
          <p className="text-center text-gray-400 mb-12 max-w-3xl mx-auto">
            Compare our vault models to find the perfect security solution for your needs.
          </p>

          <div className="overflow-x-auto">
            <ProductComparisonTable products={products} />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-zinc-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-zinc-900 to-black p-8 rounded-lg border border-zinc-800/50 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/placeholder.svg?height=400&width=800')] bg-cover bg-center opacity-10"></div>
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight">Need Help Choosing the Right Safe?</h2>
              <p className="text-gray-300 mb-6">
                Our security experts are available to provide personalized recommendations based on your specific needs
                and requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-red-600 hover:bg-red-700 text-white">Schedule Consultation</Button>
                <Link href="/" className="inline-flex items-center text-red-500 hover:text-red-400 transition-colors">
                  Return to Homepage <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
