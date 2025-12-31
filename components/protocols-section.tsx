"use client"

import { useState } from "react"
import { motion } from "framer-motion"

interface Protocol {
  id: string
  painLabel: string
  title: string
  description: string
  ctaText: string
}

export function ProtocolsSection() {
  const protocols: Protocol[] = [
    {
      id: "PROTO-001",
      painLabel: "¿NIEBLA MENTAL CRÓNICA?",
      title: "Guía de Desfragmentación Cognitiva",
      description:
        "Protocolo de 7 días para eliminar la dispersión mental y restaurar la claridad operativa. Técnicas de reset neural probadas en entornos de alta presión.",
      ctaText: "Descargar Protocolo [Gratis]",
    },
    {
      id: "PROTO-002",
      painLabel: "¿OLVIDAS TODO LO QUE LEES?",
      title: "Manual de Retención Permanente",
      description:
        "Sistema de encoding mnemónico para transformar información fugaz en conocimiento permanente. De 10% a 90% de retención en 21 días.",
      ctaText: "Descargar Protocolo [Gratis]",
    },
    {
      id: "PROTO-003",
      painLabel: "¿PARÁLISIS POR ANÁLISIS?",
      title: "Framework de Decisión Rápida",
      description:
        "Metodología de triage cognitivo para eliminar la indecisión. Reduce el tiempo de decisión crítica de horas a minutos sin sacrificar precisión.",
      ctaText: "Descargar Protocolo [Gratis]",
    },
  ]

  const [hoveredId, setHoveredId] = useState<string | null>(null)

  return (
    <section
      id="protocolos"
      className="py-16 md:py-32 px-6 border-t border-border relative"
      style={{
        backgroundColor: "#0F0F0F",
        backgroundImage:
          "radial-gradient(circle at 10% 20%, rgba(255, 92, 0, 0.03) 0%, transparent 50%), radial-gradient(circle at 90% 80%, rgba(255, 92, 0, 0.03) 0%, transparent 50%)",
      }}
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-12 gap-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="col-span-12 lg:col-span-10 lg:col-start-2 mb-8 md:mb-12"
        >
          <div className="flex items-center gap-4 mb-3 md:mb-4">
            <div className="w-8 md:w-12 h-px bg-primary" />
            <span className="text-[10px] uppercase tracking-[0.5em] font-sans text-muted-foreground opacity-60">
              Acceso Inmediato / Recursos Tácticos
            </span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-3 md:mb-4 font-normal tracking-tight">
            Protocolos de Acceso Inmediato
          </h2>
          <p className="font-sans text-[10px] md:text-xs uppercase tracking-[0.5em] text-muted-foreground opacity-60">
            Recursos tácticos validados en campo. 0% teoría, 100% ejecución.
          </p>
        </motion.div>

        {/* Protocol Cards Grid */}
        <div className="col-span-12 lg:col-span-10 lg:col-start-2 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {protocols.map((protocol, index) => (
            <motion.div
              key={protocol.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.1 }}
              className="group relative flex flex-col bg-card border border-white/5 transition-all duration-400"
              onMouseEnter={() => setHoveredId(protocol.id)}
              onMouseLeave={() => setHoveredId(null)}
              style={{
                borderLeftColor: hoveredId === protocol.id ? "var(--primary)" : undefined,
                borderLeftWidth: hoveredId === protocol.id ? "2px" : undefined,
                transitionProperty: "border-color, box-shadow",
              }}
              onMouseOver={(e) => {
                if (hoveredId === protocol.id) {
                  e.currentTarget.style.boxShadow = "0 0 20px rgba(255, 92, 0, 0.15)"
                }
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.boxShadow = "none"
              }}
            >
              <div className="p-6 md:p-8 flex flex-col flex-grow">
                {/* Pain Label */}
                <span className="font-sans text-[9px] uppercase tracking-[0.3em] text-primary mb-4 md:mb-6 forged-text">
                  {protocol.painLabel}
                </span>

                {/* Resource Title */}
                <h3 className="font-serif text-xl md:text-2xl text-foreground leading-tight mb-4 md:mb-6">
                  {protocol.title}
                </h3>

                {/* Description */}
                <p className="font-sans text-sm text-muted-foreground leading-relaxed opacity-70 flex-grow mb-6 md:mb-8">
                  {protocol.description}
                </p>

                {/* Technical ID */}
                <div className="flex items-center gap-2 mb-6">
                  <span className="font-mono text-[9px] text-primary/60 uppercase tracking-widest forged-text">
                    {protocol.id}
                  </span>
                </div>
              </div>

              {/* CTA Button - Full Width */}
              <button className="w-full py-4 md:py-5 border-t border-white/5 bg-transparent hover:bg-white/[0.02] transition-all duration-400 group/btn min-h-[48px]">
                <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-foreground group-hover/btn:text-primary transition-colors duration-400">
                  {protocol.ctaText}
                </span>
              </button>

              {/* Bottom glow line on hover */}
              <div
                className="absolute bottom-0 left-0 h-px bg-primary transition-all duration-500"
                style={{
                  width: hoveredId === protocol.id ? "100%" : "0%",
                  boxShadow: hoveredId === protocol.id ? "0 0 12px var(--primary)" : "none",
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
