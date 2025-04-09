"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-lg bg-black/70 border-b border-zinc-800">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/armor_sphere_logo-e881jYykev0ouu2CyKuMFopYsbVRns.png"
                alt="Armor Sphere Logo"
                width={50}
                height={50}
              />
              <span className="ml-2 text-xl font-bold text-white tracking-wider">ARMOR SPHERE</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-white hover:text-red-500 transition-colors">
              Home
            </Link>
            <Link href="/products" className="text-white hover:text-red-500 transition-colors">
              Products
            </Link>
            <Link href="#about" className="text-white hover:text-red-500 transition-colors">
              About
            </Link>
            <Link href="#contact" className="text-white hover:text-red-500 transition-colors">
              Contact
            </Link>
          </nav>

          <div className="hidden md:flex">
            <Button className="bg-red-600 hover:bg-red-700 text-white">Get a Quote</Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
              {isMenuOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-zinc-900/95 backdrop-blur-lg">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <Link
              href="/"
              className="block text-white hover:text-red-500 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/products"
              className="block text-white hover:text-red-500 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </Link>
            <Link
              href="#features"
              className="block text-white hover:text-red-500 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              href="#about"
              className="block text-white hover:text-red-500 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="#contact"
              className="block text-white hover:text-red-500 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Button className="w-full bg-red-600 hover:bg-red-700 text-white">Get a Quote</Button>
          </div>
        </div>
      )}
    </header>
  )
}
