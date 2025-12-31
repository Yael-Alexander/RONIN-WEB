"use client"

import Link from "next/link"
import { useState } from "react"

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="group">
          <span className="font-serif text-xl md:text-2xl font-bold text-foreground tracking-tight">RONIN</span>
          <span
            className="inline-block w-1.5 h-1.5 bg-primary ml-1 transition-all duration-150 hover:shadow-lg hover:shadow-orange-400"
            style={{
              boxShadow: "none",
            }}
          />
        </Link>

        <button
          className="md:hidden w-8 h-8 flex flex-col items-end justify-center gap-1.5 group"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`w-6 h-px bg-foreground transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span className={`w-4 h-px bg-foreground transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""}`} />
          <span
            className={`w-6 h-px bg-foreground transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>

        <div className="hidden md:flex items-center gap-8">
          <Link
            href="#sistemas"
            className="text-sm text-muted-foreground uppercase tracking-widest hover:text-foreground transition-colors duration-150"
          >
            Sistemas
          </Link>
          <Link
            href="#manifiesto"
            className="text-sm text-muted-foreground uppercase tracking-widest hover:text-foreground transition-colors duration-150"
          >
            Manifiesto
          </Link>
          <Link
            href="#contacto"
            className="text-sm text-muted-foreground uppercase tracking-widest hover:text-foreground transition-colors duration-150"
          >
            Contacto
          </Link>
        </div>

        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background/98 backdrop-blur-sm border-b border-border">
            <div className="flex flex-col px-6 py-6 space-y-6">
              <Link
                href="#sistemas"
                className="text-sm text-muted-foreground uppercase tracking-widest hover:text-foreground transition-colors duration-150"
                onClick={() => setIsMenuOpen(false)}
              >
                Sistemas
              </Link>
              <Link
                href="#manifiesto"
                className="text-sm text-muted-foreground uppercase tracking-widest hover:text-foreground transition-colors duration-150"
                onClick={() => setIsMenuOpen(false)}
              >
                Manifiesto
              </Link>
              <Link
                href="#contacto"
                className="text-sm text-muted-foreground uppercase tracking-widest hover:text-foreground transition-colors duration-150"
                onClick={() => setIsMenuOpen(false)}
              >
                Contacto
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
