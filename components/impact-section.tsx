"use client"

import { motion } from "framer-motion"

export function ImpactSection() {
  return (
    // CAMBIO: Se elimina cualquier borde y se asegura que el fondo sea negro puro
    <section
      id="impact-section"
      className="relative w-full h-[600px] overflow-visible bg-black border-none outline-none"
    >
      <div
        className="absolute top-0 left-0 w-full h-32 -translate-y-full z-50 pointer-events-none"
        style={{
          background: "linear-gradient(to top, black 0%, transparent 100%)",
        }}
      />

      <div
        className="absolute bottom-0 left-0 w-full h-32 translate-y-full z-50 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, black 0%, transparent 100%)",
        }}
      />

      {/* Contenedor de la Imagen */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="/images/forja-20ronin-20-20calor-20intenso-20-281-29.png"
          alt="Forja RONIN - Martillo golpeando metal incandescente"
          // CAMBIO: Eliminamos margenes negativos y usamos h-full para mantener el tamaño
          className="w-full h-full object-cover object-center"
          style={{
            // CAMBIO: Máscara más densa para que solo el centro sea el punto de luz real
            maskImage: "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
          }}
        />
      </div>

      {/* Vignette Cinematográfica */}
      <div
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          // CAMBIO: Ajuste de colores para que coincidan con el fondo absoluto del sitio
          background:
            "radial-gradient(circle at center, transparent 10%, rgba(0, 0, 0, 0.4) 50%, rgba(0, 0, 0, 1) 100%)",
        }}
      />

      {/* Capa de Ruido (Grano) */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none mix-blend-overlay z-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.5' numOctaves='6' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Telemetry data */}
      <motion.div
        className="absolute bottom-10 right-10 font-mono text-[10px] text-white/20 tracking-[0.4em] uppercase leading-relaxed z-30"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <div className="flex flex-col gap-1">
          <span>[ SYSTEM_STATUS: FORGING ]</span>
          <span>[ STRESS_LEVEL: OPTIMAL ]</span>
          <span>[ VOLTAGE: HIGH ]</span>
        </div>
      </motion.div>
    </section>
  )
}
