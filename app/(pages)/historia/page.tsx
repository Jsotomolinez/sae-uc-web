import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Trophy, Users, Wrench, Rocket } from "lucide-react"

// Images
import proyecto_1 from '@/app/assets/proyectos/proyecto_1.jpg'
import proyecto_2 from '@/app/assets/proyectos/proyecto_2.jpg'
import proyecto_3 from '@/app/assets/proyectos/proyecto_3.jpg'
import proyecto_4 from '@/app/assets/proyectos/proyecto_4.jpg'

export default function TimelinePage() {




  const milestones = [
    {
      year: "2014",
      title: "Fundación de SAE UC",
      description:
        "Un grupo de estudiantes apasionados por la ingeniería automotriz funda la Sociedad de Ingenieros Automotrices en la Universidad de Carabobo.",
      image: proyecto_1,
      icon: Users,
      achievements: ["Registro oficial del equipo", "Primeros 15 miembros fundadores", "Establecimiento de objetivos"],
    },
    {
      year: "2015",
      title: "Primer Vehículo Baja",
      description:
        "Diseño y construcción de nuestro primer vehículo Baja SAE. Un hito importante que marcó el inicio de nuestra participación en competencias.",
      image: proyecto_2,
      icon: Wrench,
      achievements: [
        "Primer vehículo completado",
        "Participación en competencia regional",
        "Experiencia invaluable adquirida",
      ],
    },
    {
      year: "2017",
      title: "Primera Victoria Regional",
      description:
        "Logramos nuestro primer reconocimiento importante al ganar el premio a Mejor Equipo Novato en la competencia regional.",
      image: proyecto_3,
      icon: Trophy,
      achievements: ["Mejor Equipo Novato", "Reconocimiento nacional", "Expansión del equipo a 25 miembros"],
    },
    {
      year: "2019",
      title: "Competencia Internacional",
      description:
        "Primera participación en una competencia internacional Baja SAE, representando a Venezuela y la Universidad de Carabobo.",
      image: proyecto_4,
      icon: Rocket,
      achievements: [
        "Participación internacional",
        "Intercambio con equipos de otros países",
        "Top 20 en clasificación general",
      ],
    },
    {
      year: "2021",
      title: "Innovación Tecnológica",
      description:
        "Implementación de análisis FEA y simulaciones CFD en nuestro proceso de diseño, elevando la calidad técnica de nuestros proyectos.",
      image: proyecto_1,
      icon: Wrench,
      achievements: [
        "Adopción de software profesional",
        "Mejora en metodología de diseño",
        "Premio a la Innovación Técnica",
      ],
    },
    {
      year: "2023",
      title: "Mejor Diseño Nacional",
      description:
        "Nuestro vehículo Baja UC 2023 gana el premio a Mejor Diseño en la competencia nacional, consolidando nuestra reputación de excelencia.",
      image: proyecto_2,
      icon: Trophy,
      achievements: ["Mejor Diseño Nacional", "2do Lugar General", "Reconocimiento de la industria"],
    },
    {
      year: "2024",
      title: "Expansión de Servicios",
      description:
        "Lanzamiento de servicios de ingeniería para la comunidad, ofreciendo diseño CAD, manufactura y consultoría técnica.",
      image: proyecto_4,
      icon: Rocket,
      achievements: ["Nuevos servicios de ingeniería", "Alianzas con empresas locales", "Más de 30 miembros activos"],
    },
  ]

  const stats = [
    { value: "10+", label: "Años de Historia" },
    { value: "15+", label: "Vehículos Construidos" },
    { value: "25+", label: "Competencias" },
    { value: "50+", label: "Premios y Reconocimientos" },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-linear-to-br from-primary/10 via-background to-secondary/10 py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl space-y-6">
            <Badge variant="secondary" className="text-sm">
              Nuestra Historia
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-balance sm:text-5xl md:text-6xl">
              Una Década de Excelencia en Ingeniería
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed md:text-xl">
              Desde 2014, SAE UC ha sido pionero en ingeniería automotriz estudiantil en Venezuela, construyendo una
              tradición de innovación y excelencia.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-muted/30 border-y border-border">
        <div className="container">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center space-y-2">
                <p className="text-3xl font-bold text-primary md:text-4xl">{stat.value}</p>
                <p className="text-sm text-muted-foreground md:text-base">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={milestone.year} className="relative">
                  {/* Timeline Line */}
                  {index !== milestones.length - 1 && (
                    <div className="hidden md:block absolute left-8 top-24 bottom-0 w-0.5 bg-border md:left-1/2 md:-ml-px" />
                  )}

                  <div className="grid gap-8 md:grid-cols-2 md:gap-12">
                    {/* Year Badge - Always on left for mobile, alternates for desktop */}
                    <div
                      className={`flex items-start gap-4 md:gap-0 ${index % 2 === 0 ? "md:justify-end md:text-right" : "md:col-start-2"
                        }`}
                    >
                      <div className="relative z-10 shrink-0">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg">
                          <milestone.icon className="h-8 w-8" />
                        </div>
                      </div>
                      <div className="flex-1 md:hidden">
                        <div className="inline-block">
                          <Badge variant="outline" className="text-lg font-bold px-4 py-1">
                            {milestone.year}
                          </Badge>
                        </div>
                      </div>
                    </div>

                    {/* Year Badge - Desktop only, on opposite side */}
                    <div
                      className={`hidden md:flex items-start ${index % 2 === 0 ? "md:col-start-2 md:justify-start" : "md:col-start-1 md:justify-end"
                        }`}
                    >
                      <Badge variant="outline" className="text-lg font-bold px-4 py-1">
                        {milestone.year}
                      </Badge>
                    </div>

                    {/* Content Card */}
                    <Card
                      className={`md:col-span-1 hover:shadow-lg transition-shadow ${index % 2 === 0 ? "md:col-start-2" : "md:col-start-1 md:row-start-1"
                        }`}
                    >
                      <div className="relative aspect-video">
                        <Image
                          src={milestone.image || "/placeholder.svg"}
                          alt={milestone.title}
                          fill
                          className="object-cover rounded-t-lg"
                        />
                      </div>
                      <CardContent className="p-6 space-y-4">
                        <h3 className="text-2xl font-bold">{milestone.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{milestone.description}</p>
                        <div className="space-y-2">
                          <p className="text-sm font-semibold">Logros destacados:</p>
                          <ul className="space-y-1">
                            {milestone.achievements.map((achievement) => (
                              <li key={achievement} className="flex items-start gap-2 text-sm text-muted-foreground">
                                <span className="text-primary mt-1">•</span>
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Future Vision Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl">Mirando Hacia el Futuro</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Continuamos comprometidos con la excelencia en ingeniería automotriz, formando la próxima generación de
              ingenieros y expandiendo nuestro impacto en la comunidad universitaria y la industria venezolana.
            </p>
            <div className="grid gap-6 md:grid-cols-3 pt-8">
              {[
                {
                  title: "Innovación Continua",
                  description: "Implementar nuevas tecnologías y metodologías en nuestros proyectos",
                },
                {
                  title: "Expansión Internacional",
                  description: "Participar en más competencias internacionales y establecer alianzas globales",
                },
                {
                  title: "Impacto Social",
                  description: "Ampliar nuestros servicios y programas de capacitación para la comunidad",
                },
              ].map((goal) => (
                <Card key={goal.title}>
                  <CardContent className="p-6 space-y-3">
                    <h3 className="text-lg font-semibold">{goal.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{goal.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
