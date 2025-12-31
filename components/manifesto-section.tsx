"use client"

import { motion, useMotionValue, useSpring } from "framer-motion"
import { useEffect, useState } from "react"

export function ManifestoSection() {
  const mouseX = useMotionValue(0.5)
  const mouseY = useMotionValue(0.5)
  const smoothX = useSpring(mouseX, { stiffness: 50, damping: 30 })
  const smoothY = useSpring(mouseY, { stiffness: 50, damping: 30 })
  const [gradientPosition, setGradientPosition] = useState({ x: 50, y: 50 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const section = document.getElementById("manifiesto")
      if (section) {
        const rect = section.getBoundingClientRect()
        mouseX.set((e.clientX - rect.left) / rect.width)
        mouseY.set((e.clientY - rect.top) / rect.height)
      }
    }

    const unsubscribeX = smoothX.on("change", (v) => setGradientPosition((prev) => ({ ...prev, x: v * 100 })))
    const unsubscribeY = smoothY.on("change", (v) => setGradientPosition((prev) => ({ ...prev, y: v * 100 })))

    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      unsubscribeX()
      unsubscribeY()
    }
  }, [mouseX, mouseY, smoothX, smoothY])

  return (
    <section id="manifiesto" className="py-16 md:py-32 px-6 bg-background relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.05]"
        style={{
          background: `radial-gradient(ellipse 600px 400px at ${gradientPosition.x}% ${gradientPosition.y}%, #ff5c00, transparent 70%)`,
        }}
      />

      <div className="absolute inset-0 pointer-events-none opacity-[0.025]">
        <svg className="w-full h-full">
          <filter id="manifesto-noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#manifesto-noise)" />
        </svg>
      </div>

      <div className="absolute inset-y-0 left-6 md:left-12 w-px bg-white/[0.03]" />
      <div className="absolute inset-y-0 right-6 md:right-12 w-px bg-white/[0.03]" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-12 gap-6 relative z-10">
        <div className="col-span-12 lg:col-span-10 lg:col-start-2">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6 md:mb-8 flex justify-start"
          >
            <span className="text-[10px] font-mono text-primary uppercase tracking-[0.3em] opacity-70">
              [ DOCUMENTO_CLASIFICADO // NIVEL_OMEGA ]
            </span>
          </motion.div>

          <blockquote className="relative mb-12 md:mb-20">
            <motion.p
              initial={{ opacity: 0, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
              className="font-serif text-3xl md:text-5xl lg:text-[60px] text-foreground leading-[1.1] mb-4 font-normal tracking-tight"
            >
              El conocimiento no es poder.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
              className="font-serif text-3xl md:text-5xl lg:text-[60px] text-foreground leading-[1.1] mb-8 md:mb-10 font-normal tracking-tight"
            >
              El conocimiento esgrimido con{" "}
              <span
                className="text-primary italic font-medium tracking-[-0.02em] animate-forging-heat"
                style={{
                  textShadow: "0 0 20px rgba(255, 92, 0, 0.4), 0 0 40px rgba(255, 92, 0, 0.2)",
                }}
              >
                precisión
              </span>{" "}
              es poder.
            </motion.p>

            <motion.footer
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1.8 }}
              className="flex flex-col gap-4"
            >
              <div className="flex items-center gap-4 md:gap-6">
                <div className="w-8 md:w-16 h-px bg-primary" />
                <cite className="not-italic text-foreground font-sans text-base md:text-[18px] tracking-wider uppercase">
                  El Manifiesto RONIN
                </cite>
              </div>
              <div className="font-mono text-[10px] text-muted-foreground tracking-[0.2em] opacity-60 pl-12 md:pl-20">
                [ PROTOCOLO_VERDAD_01 // ENCRIPTACIÓN_ACTIVA ]
              </div>
            </motion.footer>
          </blockquote>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-12 border-t border-white/5 pt-8 md:pt-10">
            {[
              {
                number: "01",
                label: "DISCIPLINA",
                title: "Absoluta",
                description:
                  "Sin excusas, sin atajos. El camino del maestro exige compromiso total con la ejecución diaria.",
              },
              {
                number: "02",
                label: "PRECISIÓN",
                title: "Científica",
                description:
                  "Cada técnica es validada por la ciencia del aprendizaje. Eliminamos el misticismo, priorizamos la evidencia.",
              },
              {
                number: "03",
                label: "EVOLUCIÓN",
                title: "Perpetua",
                description:
                  "Kaizen cognitivo. El sistema no es estático; se afila con cada interacción y cada nuevo desafío.",
              },
            ].map((principle, index) => (
              <motion.div
                key={principle.number}
                initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 1.8 + index * 0.2 }}
                className="group"
              >
                <span className="font-mono text-[10px] text-primary mb-6 md:mb-8 block tracking-[0.3em] opacity-70">
                  [ {principle.number} // {principle.label} ]
                </span>
                <h3 className="font-serif text-3xl md:text-[32px] text-foreground mb-4 md:mb-6 font-normal group-hover:text-primary transition-colors duration-400 leading-tight">
                  {principle.title}
                </h3>
                <p className="font-sans text-[11px] text-muted-foreground leading-[1.8] border-l border-primary/40 pl-4 md:pl-6 bg-white/[0.02] py-3 opacity-70">
                  {principle.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
