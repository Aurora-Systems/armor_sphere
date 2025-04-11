import Image from "next/image"
import { Shield, Award, Users, Factory, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import "./about.css"

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Alexander Reynolds",
      role: "Founder & CEO",
      image: "/placeholder.svg?height=300&width=300",
      bio: "With over 20 years in security systems engineering, Alexander founded Armor Sphere with a vision to revolutionize personal security solutions.",
    },
    {
      name: "Sophia Chen",
      role: "Chief Technology Officer",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Leading our R&D team, Sophia brings expertise in advanced locking mechanisms and digital security integration from her background at MIT.",
    },
    {
      name: "Marcus Johnson",
      role: "Head of Manufacturing",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Marcus ensures our production processes maintain the highest standards of quality and precision in every vault we create.",
    },
    {
      name: "Elena Rodriguez",
      role: "Security Consultant",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Former security advisor to financial institutions, Elena helps design our products to meet real-world security challenges.",
    },
  ]

  const milestones = [
    {
      year: 2005,
      title: "Company Founded",
      description: "Armor Sphere was established with a mission to create uncompromising security solutions.",
    },
    {
      year: 2008,
      title: "First Product Line",
      description: "Launch of our original vault series, setting new standards in the industry.",
    },
    {
      year: 2012,
      title: "International Expansion",
      description: "Armor Sphere products become available in European and Asian markets.",
    },
    {
      year: 2015,
      title: "Industry Recognition",
      description: "Received the Security Innovation Award for our biometric locking system.",
    },
    {
      year: 2018,
      title: "Advanced Manufacturing Facility",
      description: "Opened our state-of-the-art production facility to enhance quality and capacity.",
    },
    {
      year: 2021,
      title: "Smart Security Integration",
      description: "Introduced network-connected safes with remote monitoring capabilities.",
    },
    {
      year: 2023,
      title: "Sustainability Initiative",
      description: "Committed to carbon-neutral manufacturing processes by 2025.",
    },
  ]

  const values = [
    {
      icon: <Shield className="h-8 w-8 text-red-500" />,
      title: "Uncompromising Security",
      description:
        "We never cut corners when it comes to the protection we provide. Every product is designed to exceed industry standards.",
    },
    {
      icon: <Award className="h-8 w-8 text-red-500" />,
      title: "Excellence in Craftsmanship",
      description:
        "Each vault is meticulously engineered and assembled with precision to ensure lasting quality and reliability.",
    },
    {
      icon: <Users className="h-8 w-8 text-red-500" />,
      title: "Customer-Focused Innovation",
      description: "We continuously evolve our products based on real customer needs and emerging security challenges.",
    },
    {
      icon: <Factory className="h-8 w-8 text-red-500" />,
      title: "Responsible Manufacturing",
      description:
        "Our production processes prioritize sustainability and minimal environmental impact without sacrificing quality.",
    },
  ]

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="about-hero relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black z-10"></div>
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1600')] bg-cover bg-center opacity-20"></div>
        </div>
        <div className="container mx-auto px-4 z-20 relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              Securing What <span className="text-red-600">Matters Most</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-2xl">
              Armor Sphere has been at the forefront of security innovation, protecting what's
              irreplaceable.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="about-image-container">
              <Image
                src="https://ngratesc.sirv.com/armor_sphere/as_logo.jpg"
                alt="Armor Sphere Headquarters"
                width={600}
                height={600}
                className="rounded-lg about-image"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">Our Story</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                Founded in 2024, Amor Sphere is a trusted provider of high-security safes designed to protect what matters most. From banks and businesses to private homes, our safes offer reliable, advanced protection for cash, documents, valuables, and sensitive materials.
                </p>
                <p>
                At Amor Sphere, security meets innovation. Each of our safes is engineered with state-of-the-art locking mechanisms, fire resistance, and tamper-proof construction to ensure complete peace of mind. Whether you're securing your home or a high-risk commercial environment, our solutions are built to perform under pressure.
                </p>
                <p>
                Driven by a passion for safety and precision, we are committed to delivering products that meet the highest industry standards. With Amor Sphere, you’re not just buying a safe—you’re investing in confidence, durability, and long-term protection.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                
                <div className="about-stat">
                  <span className="about-stat-number">100%</span>
                  <span className="about-stat-label">Customer Satisfaction</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-zinc-900/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center tracking-tight">
            Our <span className="text-red-600">Core Values</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="about-value-card">
                <div className="about-value-icon">{value.icon}</div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      {/* <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center tracking-tight">
            Meet Our <span className="text-red-600">Leadership</span>
          </h2>
          <p className="text-center text-gray-400 mb-12 max-w-3xl mx-auto">
            The experts behind Armor Sphere's commitment to excellence in security and innovation.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="about-team-card">
                <div className="about-team-image-container">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={300}
                    height={300}
                    className="about-team-image"
                  />
                </div>
                <h3 className="text-xl font-bold mt-4 mb-1">{member.name}</h3>
                <p className="text-red-500 mb-3">{member.role}</p>
                <p className="text-gray-400 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Manufacturing Process */}
      <section className="py-20 bg-zinc-900/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
                Precision <span className="text-red-600">Manufacturing</span>
              </h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  Every Armor Sphere safe is crafted in our state-of-the-art facility using a combination of advanced
                  robotics and skilled craftsmanship. Our manufacturing process involves over 200 quality checkpoints to
                  ensure each product meets our exacting standards.
                </p>
                <p>
                  We source only the highest quality materials, including military-grade steel and fire-resistant
                  composites. Our proprietary construction methods create safes that exceed industry standards for
                  security, durability, and fire protection.
                </p>
                <p>
                  Before leaving our facility, each safe undergoes rigorous testing, including drop tests, fire
                  resistance verification, and penetration attempts. Only products that pass every test earn the Armor
                  Sphere seal of quality.
                </p>
              </div>
              <Button className="mt-8 bg-red-600 hover:bg-red-700 text-white">
                Tour Our Facility <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Image
                src="https://ngratesc.sirv.com/armor_sphere/36l.png"
                alt="Manufacturing Process"
                width={300}
                height={300}
                className="rounded-lg about-process-image"
              />
              <Image
                src="https://ngratesc.sirv.com/armor_sphere/36l%20dpi.png"
                alt="Manufacturing Process"
                width={300}
                height={300}
                className="rounded-lg about-process-image"
              />
              <Image
                src="https://ngratesc.sirv.com/armor_sphere/60l.png"
                alt="Manufacturing Process"
                width={300}
                height={300}
                className="rounded-lg about-process-image"
              />
              <Image
                src="https://ngratesc.sirv.com/armor_sphere/80l.png"
                alt="Manufacturing Process"
                width={300}
                height={300}
                className="rounded-lg about-process-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
       {/* <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center tracking-tight">
            Our <span className="text-red-600">Journey</span>
          </h2>
          <div className="about-timeline">
            {milestones.map((milestone, index) => (
              <div key={index} className={`about-timeline-item ${index % 2 === 0 ? "left" : "right"}`}>
                <div className="about-timeline-content">
                  <div className="about-timeline-year">{milestone.year}</div>
                  <h3 className="about-timeline-title">{milestone.title}</h3>
                  <p className="about-timeline-description">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>*/}

      {/* Certifications Section */}
      {/* <section className="py-20 bg-zinc-900/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center tracking-tight">
            Industry <span className="text-red-600">Recognition</span>
          </h2>
          <p className="text-center text-gray-400 mb-12 max-w-3xl mx-auto">
            Our commitment to excellence has earned us recognition from leading security organizations worldwide.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            <div className="about-certification">
              <Image
                src="/placeholder.svg?height=150&width=150"
                alt="Security Certification"
                width={150}
                height={150}
              />
              <p>International Security Association</p>
            </div>
            <div className="about-certification">
              <Image
                src="/placeholder.svg?height=150&width=150"
                alt="Security Certification"
                width={150}
                height={150}
              />
              <p>Fire Protection Standard</p>
            </div>
            <div className="about-certification">
              <Image
                src="/placeholder.svg?height=150&width=150"
                alt="Security Certification"
                width={150}
                height={150}
              />
              <p>Quality Manufacturing Excellence</p>
            </div>
            <div className="about-certification">
              <Image
                src="/placeholder.svg?height=150&width=150"
                alt="Security Certification"
                width={150}
                height={150}
              />
              <p>Consumer Trust Award</p>
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      {/* <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="about-cta">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">Join the Armor Sphere Family</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl">
              Experience the peace of mind that comes with owning a security solution crafted with uncompromising
              attention to detail and backed by our lifetime commitment to your security.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
                Explore Our Products
              </Button>
              <Button size="lg" variant="outline" className="border-red-600 text-red-500 hover:bg-red-900/20">
                Contact Our Team
              </Button>
            </div>
          </div>
        </div>
      </section> */}
    </main>
  )
}
