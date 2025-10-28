import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, Linkedin, ArrowRight } from "lucide-react"

// Images
import equipo from '@/app/assets/equipo/equipo.png'
import placeholder from '@/app/assets/equipo/placeholder.png'
import placeholder_2 from '@/app/assets/equipo/placeholder_2.png'

export default function TeamPage() {
  

  const leadership = [
    {
      name: "Carlos Rodríguez",
      role: "Capitán del Equipo",
      department: "Ingeniería Mecánica",
      image: placeholder,
      bio: "Lidera el equipo con 3 años de experiencia en Baja SAE, especializado en diseño de chasis y gestión de proyectos.",
      email: "carlos.rodriguez@saeuc.org",
      linkedin: "#",
    },
    {
      name: "María González",
      role: "Jefa de Diseño",
      department: "Ingeniería Mecánica",
      image: placeholder_2,
      bio: "Experta en CAD y análisis FEA, responsable del diseño estructural y optimización de componentes.",
      email: "maria.gonzalez@saeuc.org",
      linkedin: "#",
    },
    {
      name: "Luis Martínez",
      role: "Jefe de Manufactura",
      department: "Ingeniería Industrial",
      image: placeholder,
      bio: "Coordina todos los procesos de fabricación y ensamblaje, con experiencia en soldadura y maquinado CNC.",
      email: "luis.martinez@saeuc.org",
      linkedin: "#",
    },
  ]

  const departments = [
    {
      name: "Chasis y Estructura",
      description: "Diseño y análisis del chasis, jaula de seguridad y componentes estructurales",
      members: 6,
      // icon: "/chassis-icon.svg",
    },
    {
      name: "Suspensión y Dirección",
      description: "Desarrollo del sistema de suspensión, dirección y geometría de ruedas",
      members: 5,
      // icon: "/suspension-icon.svg",
    },
    {
      name: "Transmisión y Motor",
      description: "Optimización del motor, sistema CVT y transmisión de potencia",
      members: 5,
      // icon: "/engine-icon.svg",
    },
    {
      name: "Frenos y Sistemas",
      description: "Diseño de sistema de frenado, eléctrico y componentes auxiliares",
      members: 4,
      // icon: "/brakes-icon.svg",
    },
    {
      name: "Manufactura",
      description: "Fabricación, soldadura, maquinado y ensamblaje de componentes",
      members: 6,
      // icon: "/manufacturing-icon.svg",
    },
    {
      name: "Gestión y Finanzas",
      description: "Administración del proyecto, búsqueda de patrocinios y logística",
      members: 4,
      // icon: "/management-icon.svg",
    },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-linear-to-br from-primary/10 via-background to-secondary/10 py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl space-y-6">
            <Badge variant="secondary" className="text-sm">
              Nuestro Equipo
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-balance sm:text-5xl md:text-6xl">
              Conoce al Equipo SAE UC
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed md:text-xl">
              Un grupo multidisciplinario de estudiantes apasionados por la ingeniería automotriz, trabajando juntos
              para diseñar y construir vehículos de competencia.
            </p>
          </div>
        </div>
      </section>

      {/* Team Photo Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="relative aspect-21/9 rounded-lg overflow-hidden shadow-2xl">
            <Image src={equipo} alt="Equipo SAE UC completo" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl">Liderazgo</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Conoce a los líderes que guían nuestro equipo hacia la excelencia
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {leadership.map((leader) => (
                <Card key={leader.name} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative aspect-3/4">
                    <Image src={leader.image || "/placeholder.svg"} alt={leader.name} fill className="object-cover" />
                  </div>
                  <CardContent className="p-6 space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold">{leader.name}</h3>
                      <p className="text-sm font-medium text-primary">{leader.role}</p>
                      <p className="text-sm text-muted-foreground">{leader.department}</p>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{leader.bio}</p>
                    <div className="flex items-center gap-3 pt-2">
                      <a
                        href={`mailto:${leader.email}`}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Mail className="h-5 w-5" />
                        <span className="sr-only">Email</span>
                      </a>
                      <a
                        href={leader.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Linkedin className="h-5 w-5" />
                        <span className="sr-only">LinkedIn</span>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Departments Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl">Departamentos</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Nuestro equipo está organizado en departamentos especializados que trabajan en conjunto
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {departments.map((dept) => (
                <Card key={dept.name} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-start justify-between">
                      <div className="space-y-2 flex-1">
                        <h3 className="text-lg font-semibold">{dept.name}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{dept.description}</p>
                      </div>
                    </div>
                    <div className="pt-2 border-t border-border">
                      <p className="text-sm text-muted-foreground">
                        <span className="font-semibold text-foreground">{dept.members}</span> miembros activos
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-4">
            {[
              { value: "30+", label: "Miembros Activos" },
              { value: "6", label: "Departamentos" },
              { value: "5", label: "Carreras Representadas" },
              { value: "100%", label: "Pasión por la Ingeniería" },
            ].map((stat) => (
              <div key={stat.label} className="text-center space-y-2">
                <p className="text-4xl font-bold text-primary">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <Card className="bg-linear-to-br from-primary to-secondary text-primary-foreground border-0">
            <CardContent className="p-8 md:p-12">
              <div className="text-center space-y-6 max-w-2xl mx-auto">
                <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl">
                  ¿Quieres Unirte al Equipo?
                </h2>
                <p className="text-lg leading-relaxed opacity-90">
                  Estamos siempre buscando estudiantes motivados y apasionados por la ingeniería automotriz. No importa
                  tu nivel de experiencia, hay un lugar para ti en SAE UC.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row justify-center">
                  <Button asChild size="lg" variant="secondary">
                    <Link href="/contacto">
                      Contáctanos <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                  >
                    <Link href="/servicios">Ver Requisitos</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
