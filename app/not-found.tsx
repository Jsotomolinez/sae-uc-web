import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, Search } from "lucide-react"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] px-4">
      <div className="text-center space-y-6 max-w-2xl">
        {/* 404 Number */}
        <div className="space-y-2">
          <h1 className="text-9xl font-bold text-primary/20 select-none">404</h1>
          <div className="h-1 w-24 bg-primary mx-auto rounded-full" />
        </div>

        {/* Error Message */}
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl">Página No Encontrada</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Lo sentimos, la página que estás buscando no existe o ha sido movida. Verifica la URL o regresa a la página
            principal.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-center pt-4">
          <Button asChild size="lg">
            <Link href="/">
              <Home className="mr-2 h-5 w-5" />
              Ir al Inicio
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/proyectos">
              <Search className="mr-2 h-5 w-5" />
              Ver Proyectos
            </Link>
          </Button>
        </div>

        {/* Quick Links */}
        <div className="pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground mb-4">Enlaces rápidos:</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link href="/equipo" className="text-primary hover:underline">
              Equipo
            </Link>
            <Link href="/servicios" className="text-primary hover:underline">
              Servicios
            </Link>
            <Link href="/historia" className="text-primary hover:underline">
              Historia
            </Link>
            <Link href="/contacto" className="text-primary hover:underline">
              Contacto
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
