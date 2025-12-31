"use client"

import { motion } from "framer-motion"
import { useEffect, useRef } from "react"

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const spotlightRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    const spotlight = spotlightRef.current
    if (!section || !spotlight) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      spotlight.style.setProperty("--mouse-x", `${x}px`)
      spotlight.style.setProperty("--mouse-y", `${y}px`)
    }

    section.addEventListener("mousemove", handleMouseMove)
    return () => section.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden py-20 md:py-32 bg-background"
    >
      <div
        ref={spotlightRef}
        className="absolute inset-0 pointer-events-none z-[1] transition-[background] duration-300 ease-out"
        style={{
          background: `radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255, 92, 0, 0.07), transparent 100%)`,
        }}
      />

      <svg className="absolute inset-0 w-full h-full pointer-events-none z-[2]" aria-hidden="true">
        <filter id="heroGrain">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#heroGrain)" opacity="0.025" />
      </svg>

      {/* 12-column grid system - only main vertical axes */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02] z-[3]">
        <div className="max-w-7xl mx-auto h-full grid grid-cols-12 gap-6 px-6">
          <div className="col-span-1 border-r border-primary" />
          <div className="col-span-10" />
          <div className="col-span-1 border-l border-primary" />
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 max-w-7xl mx-auto px-6 w-full grid grid-cols-12 gap-6"
      >
        <div className="col-span-12 lg:col-span-10 lg:col-start-2">
          {/* Status indicator - with subtle glow */}
          <div className="flex items-center gap-3 mb-4 md:mb-6">
            <span className="w-1.5 h-1.5 bg-primary" style={{ boxShadow: "0 0 8px var(--primary)" }} />
            <span className="text-[10px] text-muted-foreground uppercase tracking-[0.6em] font-sans opacity-70">
              Sistema Activo
            </span>
          </div>

          <h1 className="font-serif text-4xl md:text-6xl lg:text-[80px] font-normal text-foreground leading-[0.95] mb-6 md:mb-8 tracking-tight">
            Transformo el conocimiento en{" "}
            <span className="text-primary italic font-medium forged-text">armas cognitivas</span>
          </h1>

          <div className="w-full max-w-2xl mb-8 md:mb-12">
            <p className="font-sans font-light text-base md:text-[18px] leading-[1.8] text-foreground opacity-70 mb-6">
              Protocolos de adquisición de maestría basados en ciencia cognitiva. Metodologías diseñadas para dominar
              cualquier disciplina y eliminar la dispersión mental.
            </p>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
              className="h-px w-full origin-left"
              style={{
                background: "linear-gradient(to right, #ff5c00 0%, transparent 100%)",
              }}
            />
          </div>

          <div className="flex justify-start mb-12 md:mb-20">
            <button
              className="group relative bg-transparent text-foreground px-8 md:px-12 py-3 md:py-4 text-[10px] uppercase tracking-[0.3em] font-sans font-bold border border-primary/50 transition-all duration-500 hover:bg-primary hover:text-background hover:border-primary w-full md:w-auto text-center"
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 0 20px rgba(255, 92, 0, 0.3)"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "none"
              }}
            >
              Acceder al Arsenal
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 border-t border-white/5 pt-6 md:pt-8">
            <div className="text-center md:text-left">
              <span className="block font-sans text-3xl font-light text-foreground mb-2 tracking-tight">+2</span>
              <span className="text-[10px] text-muted-foreground uppercase tracking-[0.4em] opacity-70">
                Años de Investigación
              </span>
            </div>
            <div className="text-center md:text-left md:border-l border-white/5 md:pl-12">
              <span className="block font-sans text-3xl font-light text-foreground mb-2 tracking-tight">12</span>
              <span className="text-[10px] text-muted-foreground uppercase tracking-[0.4em] opacity-70">Sistemas</span>
            </div>
            <div className="text-center md:text-left md:border-l border-white/5 md:pl-12">
              <span className="block font-sans text-3xl font-light text-foreground mb-2 tracking-tight">∞</span>
              <span className="text-[10px] text-muted-foreground uppercase tracking-[0.4em] opacity-70">Potencial</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
