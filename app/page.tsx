"use client"

import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { SystemsSection } from "@/components/systems-section"
import { ProtocolsSection } from "@/components/protocols-section"
import { ImpactSection } from "@/components/impact-section"
import { ManifestoSection } from "@/components/manifesto-section"
import { Footer } from "@/components/footer"
import { useEffect, useState } from "react"

export default function HomePage() {
  const [showNav, setShowNav] = useState(false)
  const [showHero, setShowHero] = useState(false)

  useEffect(() => {
    setShowNav(true)
    const timer = setTimeout(() => {
      setShowHero(true)
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <main className="min-h-screen bg-background">
      <div className={`transition-opacity duration-1000 ${showNav ? "opacity-100" : "opacity-0"}`}>
        <Navigation />
      </div>
      <div className={`transition-opacity duration-1200 ${showHero ? "opacity-100" : "opacity-0"}`}>
        <HeroSection />
        <SystemsSection />
        <ProtocolsSection />
        <ImpactSection />
        <ManifestoSection />
        <Footer />
      </div>
    </main>
  )
}
