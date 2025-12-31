"use client"

import { useState } from "react"
import { motion } from "framer-motion"

export function SystemsSection() {
  const systems = [
    {
      id: "SYS-001",
      moduleId: "MOD_01",
      title: "Método RONIN",
      category: "Sistema Principal",
      description: "Framework de adquisición acelerada de conocimiento basado en neurociencia.",
      status: "Operativo",
      version: "3.2.1",
    },
    {
      id: "SYS-002",
      moduleId: "MOD_02",
      title: "Protocolo Samurai",
      category: "Disciplina Mental",
      description: "Sistema de foco profundo y eliminación de distracciones. Inmersión total.",
      status: "Operativo",
      version: "2.0.4",
    },
    {
      id: "SYS-003",
      moduleId: "MOD_03",
      title: "Arsenal Mnemónico",
      category: "Memoria",
      description: "Palacios de memoria, asociación y encoding multisensorial avanzado.",
      status: "Operativo",
      version: "4.1.0",
    },
    {
      id: "SYS-004",
      moduleId: "MOD_04",
      title: "Katana Analítica",
      category: "Pensamiento Crítico",
      description: "Metodología para descomponer problemas complejos en soluciones lineales.",
      status: "Beta",
      version: "1.5.2",
    },
    {
      id: "SYS-005",
      moduleId: "MOD_05",
      title: "Dojo de Lectura",
      category: "Procesamiento",
      description: "Lectura activa y extracción. De 300 a 1000+ PPM con comprensión total.",
      status: "Operativo",
      version: "2.8.0",
    },
    {
      id: "SYS-006",
      moduleId: "MOD_06",
      title: "Red Cognitiva",
      category: "Conexión",
      description: "Framework para crear redes de conocimiento. Segundo cerebro optimizado.",
      status: "Operativo",
      version: "3.0.1",
    },
  ]

  const [hoveredId, setHoveredId] = useState<string | null>(null)
  const [scanningId, setScanningId] = useState<string | null>(null)

  const handleMouseEnter = (id: string) => {
    setHoveredId(id)
    setScanningId(id)
    // Reset scanning after animation completes
    setTimeout(() => setScanningId(null), 600)
  }

  return (
    <section
      id="sistemas"
      className="py-16 md:py-32 px-6 bg-background border-t border-border relative overflow-hidden"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-30" preserveAspectRatio="none">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="#ff5c00" stopOpacity="0.3" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
        {/* Horizontal connection lines */}
        <line x1="10%" y1="60%" x2="90%" y2="60%" stroke="url(#lineGradient)" strokeWidth="1" strokeDasharray="4 8" />
        <line x1="15%" y1="75%" x2="85%" y2="75%" stroke="url(#lineGradient)" strokeWidth="1" strokeDasharray="4 8" />
      </svg>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-12 gap-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="col-span-12 lg:col-span-10 lg:col-start-2 mb-8 md:mb-12"
        >
          <div className="flex items-center gap-4 mb-3 md:mb-4">
            <div className="w-8 md:w-12 h-px bg-primary" />
            <span className="text-[10px] uppercase tracking-[0.5em] font-sans text-muted-foreground opacity-70">
              La forja / Inventario Activo
            </span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-[60px] text-foreground leading-tight mb-3 md:mb-4 font-normal tracking-tight">
            Sistemas de <span className="text-primary forged-text">Combate</span>
          </h2>
          <div className="w-full max-w-2xl border-l border-primary/40 pl-6 md:pl-8 bg-white/[0.02] py-4">
            <p className="text-muted-foreground text-base md:text-[18px] leading-relaxed opacity-70 font-serif">
              Cada sistema es un arma cognitiva refinada. Herramientas diseñadas para la dominación intelectual absoluta
              y la eliminación del ruido.
            </p>
          </div>
        </motion.div>

        <div className="col-span-12 lg:col-span-10 lg:col-start-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {systems.map((system, index) => (
            <motion.div
              key={system.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.1 }}
              className="group relative p-6 md:p-8 bg-[#0a0a0a] overflow-hidden"
              onMouseEnter={() => handleMouseEnter(system.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary/60 transition-all duration-300 group-hover:border-primary group-hover:w-6 group-hover:h-6" />
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-primary/60 transition-all duration-300 group-hover:border-primary group-hover:w-6 group-hover:h-6" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-primary/60 transition-all duration-300 group-hover:border-primary group-hover:w-6 group-hover:h-6" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-primary/60 transition-all duration-300 group-hover:border-primary group-hover:w-6 group-hover:h-6" />

              <div
                className="absolute inset-0 pointer-events-none z-20 opacity-0 group-hover:opacity-100"
                style={{
                  background:
                    scanningId === system.id
                      ? "linear-gradient(to bottom, transparent 0%, rgba(255,92,0,0.15) 50%, transparent 100%)"
                      : "transparent",
                  animation: scanningId === system.id ? "scanLine 0.6s ease-out forwards" : "none",
                }}
              />

              <div className="absolute top-2 left-1/2 -translate-x-1/2">
                <span className="font-mono text-[9px] text-primary/50 uppercase tracking-[0.3em]">
                  {system.moduleId}
                </span>
              </div>

              <div className="flex justify-between items-start mb-6 md:mb-8 mt-4">
                <span className="font-mono text-[10px] text-primary uppercase tracking-[0.5em]">{system.id}</span>
                <span className="font-sans text-[9px] text-muted-foreground uppercase tracking-widest opacity-40">
                  v.{system.version}
                </span>
              </div>

              <div className="mb-4 md:mb-6">
                <p className="font-sans text-[10px] text-muted-foreground uppercase tracking-[0.5em] mb-3 md:mb-4 opacity-70">
                  {system.category}
                </p>
                <h3 className="font-serif text-2xl md:text-[28px] text-foreground group-hover:text-primary transition-colors duration-300 leading-tight">
                  {system.title}
                </h3>
              </div>

              <div className="transition-all duration-500 overflow-hidden md:opacity-0 md:max-h-0 group-hover:opacity-100 group-hover:max-h-[100px]">
                <p className="font-sans text-[11px] text-muted-foreground leading-relaxed mb-6 opacity-70">
                  {system.description}
                </p>
              </div>

              <div className="flex justify-between items-center pt-4 md:pt-6 border-t border-white/10 min-h-[44px]">
                <div className="flex items-center gap-2">
                  <div
                    className={`w-1.5 h-1.5 ${system.status === "Operativo" ? "bg-green-500" : "bg-primary"}`}
                    style={{
                      boxShadow: `0 0 8px ${system.status === "Operativo" ? "#22c55e" : "var(--primary)"}`,
                    }}
                  />
                  <span className="text-[10px] text-muted-foreground uppercase tracking-widest opacity-70 font-mono">
                    {system.status}
                  </span>
                </div>
                <span className="text-[10px] text-muted-foreground group-hover:text-primary transition-colors duration-300 font-mono uppercase tracking-wider">
                  [ACCEDER]
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="col-span-12 lg:col-span-10 lg:col-start-2 mt-12 flex justify-center">
          <div className="font-mono text-[10px] text-muted-foreground/40 uppercase tracking-[0.3em]">
            [ SISTEMAS_ACTIVOS: 6 // ESTADO_RED: ÓPTIMO // LATENCIA: 0.02ms ]
          </div>
        </div>
      </div>
    </section>
  )
}
