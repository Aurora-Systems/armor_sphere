import Image from "next/image"
import { Shield, Lock, Award, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import ProductCard from "@/components/product-card"
import FeatureCard from "@/components/feature-card"
import TestimonialCard from "@/components/testimonial-card"

export default function Home() {
  const products = [
    {
      id: 1,
      name: "Compact Vault",
      size: "26L",
      dimensions: "50 × 40 × 40 CM",
      weight: "140 KGS",
      price: 300,
      image: "/placeholder.svg?height=300&width=300",
      features: ["Fire resistant", "Digital lock", "Emergency key", "Anchor points"],
    },
    {
      id: 2,
      name: "Standard Vault",
      size: "60L",
      dimensions: "66 × 48 × 40 CM",
      weight: "190 KGS",
      price: 600,
      image: "/placeholder.svg?height=300&width=300",
      features: ["Fire resistant", "Digital lock", "Emergency key", "Anchor points", "Interior lighting"],
    },
    {
      id: 3,
      name: "Family Vault",
      size: "80L",
      dimensions: "66 × 50 × 50 CM",
      weight: "240 KGS",
      price: 700,
      image: "/placeholder.svg?height=300&width=300",
      features: [
        "Fire resistant",
        "Digital lock",
        "Emergency key",
        "Anchor points",
        "Interior lighting",
        "Humidity control",
      ],
    },
    {
      id: 4,
      name: "Premium Vault",
      size: "200L",
      dimensions: "130 × 52 × 55 CM",
      weight: "600 KGS",
      price: 1100,
      image: "/placeholder.svg?height=300&width=300",
      features: [
        "Fire resistant",
        "Digital lock",
        "Emergency key",
        "Anchor points",
        "Interior lighting",
        "Humidity control",
        "Biometric access",
      ],
    },
  ]

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black z-10"></div>
          <div className="absolute inset-0 bg-[url('https://ngratesc.sirv.com/armor_sphere/safes.png')] bg-cover bg-center opacity-70"></div>
        </div>
        <div className="container mx-auto px-4 z-20 text-center">
          <div className="flex justify-center mb-8">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/armor_sphere_logo-e881jYykev0ouu2CyKuMFopYsbVRns.png"
              alt="Armor Sphere Logo"
              width={200}
              height={200}
              className="animate-pulse-slow"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700 tracking-tight">
            Uncompromising Security Solutions
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-300">
            Protect what matters most with our premium heavy-duty security safes, engineered for ultimate protection and
            peace of mind.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
              Explore Products
            </Button>
            <Button size="lg" variant="outline" className="border-red-600 text-red-500 hover:bg-red-900/20">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-black/80">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center tracking-tight">
            Why Choose <span className="text-red-600">Armor Sphere</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={<Shield className="h-10 w-10 text-red-600" />}
              title="Unmatched Protection"
              description="Our safes are engineered with multiple layers of security to protect your valuables against any threat."
            />
            <FeatureCard
              icon={<Lock className="h-10 w-10 text-red-600" />}
              title="Advanced Locking Systems"
              description="State-of-the-art digital and biometric locking mechanisms for maximum security and convenience."
            />
            <FeatureCard
              icon={<Award className="h-10 w-10 text-red-600" />}
              title="Industry Certified"
              description="All our products meet or exceed industry standards for security, fire protection, and durability."
            />
            <FeatureCard
              icon={<CheckCircle className="h-10 w-10 text-red-600" />}
              title="Lifetime Warranty"
              description="We stand behind our products with comprehensive warranty coverage and dedicated support."
            />
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-gradient-to-b from-black to-zinc-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center tracking-tight">
            Our Premium <span className="text-red-600">Security Safes</span>
          </h2>
          <p className="text-center text-gray-400 mb-12 max-w-3xl mx-auto">
            Engineered with precision and built to last, our range of security safes offers the perfect solution for
            every need.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center tracking-tight">
            What Our <span className="text-red-600">Clients Say</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard
              quote="The quality and security features of my Armor Sphere safe exceeded all my expectations. Worth every penny."
              author="James Wilson"
              role="Business Owner"
            />
            <TestimonialCard
              quote="After researching many options, I chose Armor Sphere for my home security. The peace of mind is invaluable."
              author="Sarah Johnson"
              role="Homeowner"
            />
            <TestimonialCard
              quote="As a collector of valuable items, I needed the best protection available. Armor Sphere delivers exactly that."
              author="Robert Chen"
              role="Art Collector"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=1200')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">Ready to Secure What Matters Most?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact our security experts today for personalized advice on the perfect safe for your needs.
            </p>
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
              Get in Touch
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
