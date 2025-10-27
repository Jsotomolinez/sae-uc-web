'use client'

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Wrench, Cpu, GraduationCap, FileText, CheckCircle2, ArrowRight } from "lucide-react"
import { useEffect, useState } from "react"
import { url } from "inspector"

export default function ServicesPage() {
  const [urlMap, setUrlMap] = useState<Record<string, string>>({});

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const paths = [
          '/index/principal.jpg',
          '/index/sobre_sae_uc.jpg',
          '/index/proyectos_destacados_1.jpg',
          '/index/proyectos_destacados_2.jpg',
          '/index/proyectos_destacados_3.jpg',
        ];
        const res = await fetch('/api/dropbox', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ paths }),
        });
        const data = await res.json();
        if (res.ok && data?.results) {
          setUrlMap(data.results as Record<string, string>);
        } else {
          console.warn('API /api/dropbox returned error', data);
          setUrlMap({});
        }
      } catch (err) {
        console.warn('Error fetching /api/dropbox', err);
        setUrlMap({});
      }
    };
    fetchImages();
  }, []);



  const services = [
    {
      icon: Cpu,
      title: "Diseño CAD",
      description:
        "Ofrecemos servicios de modelado 3D y diseño asistido por computadora utilizando software profesional como SolidWorks y CATIA.",
      features: [
        "Modelado 3D de piezas y ensamblajes",
        "Análisis FEA (Elementos Finitos)",
        "Simulaciones CFD (Dinámica de Fluidos)",
        "Optimización topológica",
        "Generación de planos técnicos",
      ],
      image: urlMap['/index/principal.jpg'] || "/placeholder.svg",
    },
    {
      icon: Wrench,
      title: "Manufactura",
      description:
        "Fabricación de componentes mecánicos con procesos de manufactura avanzados y control de calidad riguroso.",
      features: [
        "Maquinado CNC (torno y fresadora)",
        "Soldadura TIG y MIG",
        "Corte por plasma y láser",
        "Doblado y conformado de tubería",
        "Ensamblaje de sistemas mecánicos",
      ],
      image: urlMap['/index/sobre_sae_uc.jpg'] || "/placeholder.svg",
    },
    {
      icon: FileText,
      title: "Consultoría Técnica",
      description:
        "Asesoría especializada en proyectos de ingeniería mecánica y automotriz basada en nuestra experiencia en competencias.",
      features: [
        "Revisión y optimización de diseños",
        "Selección de materiales",
        "Análisis de viabilidad técnica",
        "Documentación técnica",
        "Gestión de proyectos de ingeniería",
      ],
      image: urlMap['/index/principal.jpg'] || "/placeholder.svg",
    },
    {
      icon: GraduationCap,
      title: "Capacitación",
      description:
        "Talleres y cursos prácticos para estudiantes y profesionales interesados en ingeniería automotriz y manufactura.",
      features: [
        "Talleres de diseño CAD",
        "Cursos de soldadura básica y avanzada",
        "Capacitación en maquinado CNC",
        "Seminarios de análisis estructural",
        "Gestión de proyectos técnicos",
      ],
      image: urlMap['/index/sobre_sae_uc.jpg'] || "/placeholder.svg",
    },
  ]

  const process = [
    {
      step: "01",
      title: "Consulta Inicial",
      description: "Reunión para entender tus necesidades y objetivos del proyecto",
    },
    {
      step: "02",
      title: "Propuesta",
      description: "Desarrollo de propuesta técnica y económica detallada",
    },
    {
      step: "03",
      title: "Ejecución",
      description: "Implementación del proyecto con seguimiento continuo",
    },
    {
      step: "04",
      title: "Entrega",
      description: "Entrega final con documentación completa y soporte",
    },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-linear-to-br from-primary/10 via-background to-secondary/10 py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl space-y-6">
            <Badge variant="secondary" className="text-sm">
              Nuestros Servicios
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-balance sm:text-5xl md:text-6xl">
              Servicios de Ingeniería Automotriz
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed md:text-xl">
              Ponemos nuestra experiencia y conocimientos al servicio de estudiantes, empresas y profesionales que
              buscan soluciones de ingeniería de calidad.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div key={service.title} className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
                <div className={`space-y-6 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="space-y-4">
                    <h2 className="text-3xl font-bold tracking-tight">{service.title}</h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">{service.description}</p>
                  </div>
                  <div className="space-y-3">
                    <p className="text-sm font-semibold">Servicios incluidos:</p>
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className={`relative aspect-4/3 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover rounded-lg shadow-lg"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl">Nuestro Proceso</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Trabajamos de manera estructurada para garantizar resultados de calidad
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {process.map((phase) => (
                <Card key={phase.step}>
                  <CardHeader>
                    <div className="text-4xl font-bold text-primary/20 mb-2">{phase.step}</div>
                    <CardTitle className="text-xl">{phase.title}</CardTitle>
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

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl">¿Por Qué Elegirnos?</h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Experiencia Comprobada",
                    description:
                      "Más de 10 años participando en competencias Baja SAE con múltiples reconocimientos nacionales e internacionales.",
                  },
                  {
                    title: "Equipo Multidisciplinario",
                    description:
                      "Contamos con estudiantes y egresados especializados en diferentes áreas de la ingeniería.",
                  },
                  {
                    title: "Tecnología de Punta",
                    description:
                      "Acceso a software profesional y equipos de manufactura modernos en las instalaciones de la UC.",
                  },
                  {
                    title: "Precios Competitivos",
                    description:
                      "Ofrecemos tarifas accesibles sin comprometer la calidad, ideal para estudiantes y startups.",
                  },
                ].map((reason) => (
                  <div key={reason.title} className="space-y-2">
                    <h3 className="text-lg font-semibold">{reason.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-square">
              <Image
                src="/engineering-team-working-together.jpg"
                alt="Equipo trabajando"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <Card className="bg-linear-to-br from-primary to-secondary text-primary-foreground border-0">
            <CardContent className="p-8 md:p-12">
              <div className="text-center space-y-6 max-w-2xl mx-auto">
                <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl">
                  ¿Tienes un Proyecto en Mente?
                </h2>
                <p className="text-lg leading-relaxed opacity-90">
                  Contáctanos para una consulta gratuita y descubre cómo podemos ayudarte a hacer realidad tu proyecto
                  de ingeniería.
                </p>
                <Button asChild size="lg" variant="secondary">
                  <Link href="/contacto">
                    Solicitar Cotización <ArrowRight className="ml-2 h-5 w-5" />
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
