import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Trophy, Wrench, ArrowRight } from "lucide-react"

// Images
import proyecto_1 from '@/app/assets/proyectos/proyecto_1.jpg'
import proyecto_2 from '@/app/assets/proyectos/proyecto_2.jpg'
import proyecto_3 from '@/app/assets/proyectos/proyecto_3.jpg'
import proyecto_4 from '@/app/assets/proyectos/proyecto_4.jpg'


export default function ProjectsPage() {
  const projects = [
    {
      id: "baja-uc-2024",
      title: "Baja UC 2024",
      year: "2024",
      status: "En Desarrollo",
      image: proyecto_1,
      description:
        "Nuestro proyecto más reciente incorpora mejoras significativas en el sistema de suspensión y transmisión, basadas en el aprendizaje de competencias anteriores.",
      highlights: [
        "Suspensión independiente mejorada",
        "Sistema de transmisión CVT optimizado",
        "Chasis más ligero con mayor rigidez",
        "Nuevo sistema de frenado hidráulico",
      ],
      achievements: ["En fase de pruebas", "Diseño completado"],
    },
    {
      id: "baja-uc-2023",
      title: "Baja UC 2023",
      year: "2023",
      status: "Completado",
      image: proyecto_2,
      description:
        "Este vehículo nos llevó a obtener el premio a mejor diseño en la competencia regional, destacando por su innovación en aerodinámica y eficiencia estructural.",
      highlights: [
        "Diseño aerodinámico optimizado",
        "Sistema de dirección de precisión",
        "Protección de piloto mejorada",
        "Peso reducido en 15%",
      ],
      achievements: ["Mejor Diseño - Competencia Regional 2023", "2do Lugar General", "Mejor Presentación Técnica"],
    },
    {
      id: "baja-uc-2022",
      title: "Baja UC 2022",
      year: "2022",
      status: "Completado",
      image: proyecto_3,
      description:
        "Nuestro vehículo de 2022 demostró excepcional resistencia y durabilidad, logrando el primer lugar en las pruebas de resistencia de la competencia nacional.",
      highlights: [
        "Chasis reforzado con tubería 4130",
        "Suspensión de largo recorrido",
        "Motor Briggs & Stratton optimizado",
        "Sistema eléctrico robusto",
      ],
      achievements: [
        "1er Lugar en Pruebas de Resistencia",
        "3er Lugar General Nacional",
        "Premio a la Innovación Técnica",
      ],
    },
    {
      id: "baja-uc-2021",
      title: "Baja UC 2021",
      year: "2021",
      status: "Completado",
      image: proyecto_4,
      description:
        "Proyecto que marcó un punto de inflexión en nuestro equipo, implementando por primera vez análisis FEA completo y simulaciones CFD en el proceso de diseño.",
      highlights: [
        "Primer uso de análisis FEA",
        "Simulaciones CFD implementadas",
        "Manufactura con CNC",
        "Documentación técnica completa",
      ],
      achievements: ["Participación Nacional", "Mejor Equipo Novato"],
    },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-linear-to-br from-primary/10 via-background to-secondary/10 py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl space-y-6">
            <Badge variant="secondary" className="text-sm">
              Nuestros Proyectos
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-balance sm:text-5xl md:text-6xl">
              Vehículos Baja SAE
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed md:text-xl">
              Cada año diseñamos y construimos un nuevo vehículo todo terreno para competir en Baja SAE. Conoce nuestros
              proyectos y los logros que hemos alcanzado.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="space-y-16">
            {projects.map((project, index) => (
              <Card key={project.id} className="overflow-hidden">
                <div className={`grid gap-8 lg:grid-cols-2 ${index % 2 === 1 ? "lg:grid-flow-dense" : ""}`}>
                  <div className={`relative aspect-4/3 ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 md:p-8 space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 flex-wrap">
                        <Badge variant={project.status === "En Desarrollo" ? "default" : "secondary"}>
                          {project.status}
                        </Badge>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          <span>{project.year}</span>
                        </div>
                      </div>
                      <h2 className="text-3xl font-bold tracking-tight">{project.title}</h2>
                      <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-sm font-semibold">
                        <Wrench className="h-4 w-4 text-primary" />
                        <span>Características Destacadas</span>
                      </div>
                      <ul className="space-y-2">
                        {project.highlights.map((highlight) => (
                          <li key={highlight} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="text-primary mt-1">•</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {project.achievements.length > 0 && (
                      <div className="space-y-3">
                        <div className="flex items-center gap-2 text-sm font-semibold">
                          <Trophy className="h-4 w-4 text-primary" />
                          <span>Logros</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {project.achievements.map((achievement) => (
                            <Badge key={achievement} variant="outline" className="text-xs">
                              {achievement}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Process Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl">Nuestro Proceso</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Cada proyecto sigue un riguroso proceso de ingeniería desde el concepto hasta la competencia
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  step: "01",
                  title: "Diseño",
                  description: "Modelado CAD, análisis FEA y simulaciones CFD para optimizar el rendimiento",
                },
                {
                  step: "02",
                  title: "Manufactura",
                  description: "Fabricación del chasis, ensamblaje de componentes y sistemas de control",
                },
                {
                  step: "03",
                  title: "Pruebas",
                  description: "Validación en pista, ajustes finales y preparación para competencia",
                },
              ].map((phase) => (
                <Card key={phase.step}>
                  <CardHeader>
                    <div className="text-4xl font-bold text-primary/20 mb-2">{phase.step}</div>
                    <CardTitle>{phase.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">{phase.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <Card className="bg-linear-to-br from-primary to-secondary text-primary-foreground border-0">
            <CardContent className="p-8 md:p-12">
              <div className="text-center space-y-6 max-w-2xl mx-auto">
                <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl">
                  ¿Quieres Ser Parte del Próximo Proyecto?
                </h2>
                <p className="text-lg leading-relaxed opacity-90">
                  Únete a nuestro equipo y participa en el diseño y construcción del próximo vehículo Baja SAE
                </p>
                <Button asChild size="lg" variant="secondary">
                  <Link href="/contacto">
                    Contáctanos <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
