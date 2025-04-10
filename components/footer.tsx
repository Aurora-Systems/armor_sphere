import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-gray-300 border-t border-zinc-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/armor_sphere_logo-e881jYykev0ouu2CyKuMFopYsbVRns.png"
                alt="Armor Sphere Logo"
                width={60}
                height={60}
              />
              <span className="ml-2 text-xl font-bold text-white">Armor Sphere</span>
            </div>
            <p className="text-sm">
              Providing premium security solutions since 2024. Our mission is to protect what matters most to you.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>



          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-red-500 transition-colors">
                  About Us
                </Link>
              </li>
              
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 text-red-500 mt-1 flex-shrink-0" />
                <span>484 Goodwin ( along gleneagles Rd
                  Directly opposite to eaglesvile ) Unit 1A shop A&B</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-red-500 flex-shrink-0" />
                <span>+263 77 462 0747</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-red-500 flex-shrink-0" />
                <span>info@armorsphere.co.zw</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-800 mt-12 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Armor Sphere Solutions. All rights reserved.</p>
          <br/>
          <small><a href="https://aurorasystems.co.zw" target="blank"><u>Made By Aurora</u></a></small>
        </div>
      </div>
    </footer>
  )
}
