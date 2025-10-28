import React from 'react'
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Users, Trophy, Wrench, GraduationCap } from "lucide-react"
import { PorqueUnirte, ProyectoDestacado } from '@/components/pages/index'

// Images
import prinicipal from '@/app/assets/index/principal.jpg'
import sobre_sae_uc from '@/app/assets/index/sobre_sae_uc.jpg'
import proyecto_destacado_1 from '@/app/assets/index/proyectos_destacados_1.jpg'
import proyecto_destacado_2 from '@/app/assets/index/proyectos_destacados_2.jpg'
import proyecto_destacado_3 from '@/app/assets/index/proyectos_destacados_3.jpg'



export default function HomePage() {

  const stats = [
    { label: "Años de Experiencia", value: "10+" },
    { label: "Competencias", value: "25+" },
    { label: "Miembros Activos", value: "30+" },
    { label: "Proyectos Completados", value: "15+" },
  ]

  const benefits = [
    {
      icon: Wrench,
      title: "Experiencia Práctica",
      description: "Aplica conocimientos teóricos en proyectos reales de ingeniería automotriz",
    },
    {
      icon: Users,
      title: "Trabajo en Equipo",
      description: "Colabora con estudiantes apasionados de diferentes especialidades",
    },
    {
      icon: Trophy,
      title: "Competencias",
      description: "Participa en competencias nacionales e internacionales Baja SAE",
    },
    {
      icon: GraduationCap,
      title: "Desarrollo Profesional",
      description: "Desarrolla habilidades técnicas y de liderazgo valoradas en la industria",
    },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-linear-to-br from-primary/10 via-background to-secondary/10 py-20 md:py-32">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl font-bold tracking-tight text-balance sm:text-5xl md:text-6xl lg:text-7xl">
                Diseñamos el Futuro de la <span className="text-primary">Ingeniería Automotriz</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed text-pretty md:text-xl">
                Somos SAE UC, el equipo de ingeniería automotriz de la Universidad de Carabobo dedicado al diseño,
                construcción y competición con vehículos Baja SAE.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button asChild size="lg" className="text-base">
                  <Link href="/proyectos">
                    Ver Proyectos <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-base bg-transparent">
                  <Link href="/contacto">Únete al Equipo</Link>
                </Button>
              </div>
            </div>
            <div className="relative aspect-4/3 lg:aspect-square">
              <Image
                src={prinicipal}
                alt="Vehículo Baja SAE en competencia"
                fill
                className="object-cover rounded-lg shadow-2xl"
                priority
              />
            </div>
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

      {/* About Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="relative aspect-4/3">
              <Image
                src={sobre_sae_uc}
                alt="Equipo SAE UC trabajando"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl md:text-5xl">Sobre SAE UC</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  La Sociedad de Ingenieros Automotrices de la Universidad de Carabobo es una organización estudiantil
                  dedicada a la excelencia en ingeniería automotriz. Participamos en la competencia Baja SAE, donde
                  diseñamos, construimos y probamos vehículos todo terreno de alto rendimiento.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Nuestro equipo multidisciplinario de estudiantes apasionados trabaja en todas las fases del proyecto,
                  desde el diseño CAD hasta la manufactura y las pruebas en pista, desarrollando habilidades técnicas y
                  profesionales invaluables.
                </p>
              </div>
              <Button asChild variant="outline" size="lg">
                <Link href="/equipo">
                  Conoce al Equipo <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl md:text-5xl">
                Proyectos Destacados
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Conoce algunos de nuestros vehículos Baja SAE más recientes y exitosos
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Baja UC 2024",
                  description: "Nuestro vehículo más reciente con mejoras en suspensión y transmisión",
                  image: proyecto_destacado_1.src,
                },
                {
                  title: "Baja UC 2023",
                  description: "Ganador del premio a mejor diseño en la competencia regional",
                  image: proyecto_destacado_2.src,
                },
                {
                  title: "Baja UC 2022",
                  description: "Primer lugar en pruebas de resistencia y durabilidad",
                  image: proyecto_destacado_3.src,
                },
              ].map((project) => (
                <ProyectoDestacado
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  image={project.image}
                />
              ))}
            </div>
            <div className="text-center">
              <Button asChild size="lg">
                <Link href="/proyectos">
                  Ver Todos los Proyectos <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl md:text-5xl">
                ¿Por Qué Unirte a SAE UC?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Forma parte de un equipo que te preparará para el futuro de la ingeniería
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {benefits.map((benefit) => (
                <PorqueUnirte
                  key={benefit.title}
                  title={benefit.title}
                  description={benefit.description}
                  icon={benefit.icon}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-linear-to-br from-primary to-secondary text-primary-foreground">
        <div className="container">
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl md:text-5xl">
              ¿Listo para Formar Parte del Equipo?
            </h2>
            <p className="text-lg leading-relaxed opacity-90">
              Únete a SAE UC y desarrolla tus habilidades en ingeniería automotriz mientras trabajas en proyectos
              desafiantes y emocionantes.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row justify-center">
              <Button asChild size="lg" variant="secondary" className="text-base">
                <Link href="/contacto">Contáctanos</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-base bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                <Link href="/servicios">Nuestros Servicios</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
