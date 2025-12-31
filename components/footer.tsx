import Link from "next/link"

export function Footer() {
  return (
    <footer id="contacto" className="py-12 md:py-16 px-6 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-12 md:mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="group inline-block mb-4">
              <span className="font-serif text-2xl md:text-3xl font-bold text-foreground tracking-tight">RONIN</span>
              <span className="inline-block w-2 h-2 bg-primary ml-1 group-hover:opacity-80 transition-opacity duration-150" />
            </Link>
            <p className="text-muted-foreground max-w-sm leading-relaxed text-sm md:text-base">
              La ciencia del aprendizaje al servicio de la maestría cognitiva. Sin atajos. Sin excusas. Solo resultados.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xs text-muted-foreground uppercase tracking-widest mb-4">Navegación</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#sistemas"
                  className="text-sm md:text-base text-foreground hover:text-primary transition-colors duration-150"
                >
                  Sistemas
                </Link>
              </li>
              <li>
                <Link
                  href="#manifiesto"
                  className="text-sm md:text-base text-foreground hover:text-primary transition-colors duration-150"
                >
                  Manifiesto
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm md:text-base text-foreground hover:text-primary transition-colors duration-150"
                >
                  Recursos
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs text-muted-foreground uppercase tracking-widest mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:contacto@ronin.dev"
                  className="text-sm md:text-base text-foreground hover:text-primary transition-colors duration-150 break-all"
                >
                  contacto@ronin.dev
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm md:text-base text-foreground hover:text-primary transition-colors duration-150"
                >
                  Twitter/X
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 md:pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-xs md:text-sm text-muted-foreground text-center md:text-left">
            © 2025 RONIN. Todos los sistemas reservados.
          </span>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-primary animate-pulse" style={{ boxShadow: "0 0 8px var(--primary)" }} />
            <span className="font-mono text-xs text-muted-foreground">SISTEMA OPERATIVO</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
