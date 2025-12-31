"use client"

interface SystemProps {
  system: {
    id: string
    title: string
    category: string
    description: string
    status: string
    version: string
    metrics: {
      retention: number
      efficiency: number
    }
  }
}

export function SystemCard({ system }: SystemProps) {
  return (
    <article
      className="group bg-card border border-border p-6 transition-all duration-300 relative overflow-hidden"
      style={{
        borderBottomColor: "transparent",
        borderBottomWidth: "2px",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderBottomColor = "var(--primary)"
        e.currentTarget.style.boxShadow = "0 2px 0 0 var(--primary)"
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderBottomColor = "transparent"
        e.currentTarget.style.boxShadow = "none"
      }}
    >
      {/* Precision corner indicator */}
      <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-primary opacity-40" />

      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <span className="font-mono text-xs text-primary">{system.id}</span>
        <span
          className={`text-xs uppercase tracking-widest px-2 py-1 ${
            system.status === "Operativo"
              ? "bg-primary/10 text-primary border border-primary/20"
              : "bg-[var(--color-status-beta)]/10 text-[var(--color-status-beta)] border border-[var(--color-status-beta)]/20"
          }`}
        >
          {system.status}
        </span>
      </div>

      {/* Category */}
      <span className="text-xs text-muted-foreground uppercase tracking-widest">{system.category}</span>

      {/* Title */}
      <h3 className="font-serif text-2xl font-bold text-foreground mt-2 mb-3 group-hover:text-primary transition-colors duration-150">
        {system.title}
      </h3>

      {/* Description */}
      <p className="text-sm text-muted-foreground leading-relaxed mb-6">{system.description}</p>

      {/* Metrics */}
      <div className="border-t border-border pt-4 mt-auto">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <span className="text-xs text-muted-foreground uppercase tracking-widest block mb-1">Retención</span>
            <div className="flex items-center gap-2">
              <span className="font-mono text-xl text-foreground">{system.metrics.retention}</span>
              <span className="text-xs text-muted-foreground">%</span>
            </div>
          </div>
          <div>
            <span className="text-xs text-muted-foreground uppercase tracking-widest block mb-1">Eficiencia</span>
            <div className="flex items-center gap-2">
              <span className="font-mono text-xl text-foreground">{system.metrics.efficiency}</span>
              <span className="text-xs text-muted-foreground">%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Version footer */}
      <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
        <span className="font-mono text-xs text-muted-foreground">v{system.version}</span>
        <span className="text-xs text-muted-foreground group-hover:text-primary transition-colors duration-150">
          Acceder →
        </span>
      </div>
    </article>
  )
}
