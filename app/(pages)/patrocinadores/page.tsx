import Image from "next/image"
import { Building2, MapPin, Phone, Mail, Briefcase, Heart } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// Images
import logo from '@/app/assets/patrocinadores/logo.jpg'


const tierColors = {
  Platino: "bg-slate-200 text-slate-900 border-slate-300",
  Oro: "bg-yellow-100 text-yellow-900 border-yellow-300",
  Plata: "bg-gray-100 text-gray-900 border-gray-300",
}

export default function PatrocinadoresPage() {

  

  const sponsors = [
    {
      id: 1,
      name: "Industrias Metalúrgicas CA",
      logo: logo,
      field: "Manufactura y Metalurgia",
      contributions: [
        "Fabricación de componentes estructurales",
        "Acceso a maquinaria CNC",
        "Asesoría técnica en soldadura",
      ],
      location: "Valencia, Carabobo, Venezuela",
      contact: {
        phone: "+58 241-123-4567",
        email: "contacto@industriasmetalurgicas.com",
      },
      tier: "Platino",
    },
    {
      id: 2,
      name: "AutoPartes del Centro",
      logo: logo,
      field: "Distribución de Autopartes",
      contributions: [
        "Suministro de componentes automotrices",
        "Descuentos en repuestos y accesorios",
        "Apoyo logístico para competencias",
      ],
      location: "Naguanagua, Carabobo, Venezuela",
      contact: {
        phone: "+58 241-234-5678",
        email: "ventas@autopartescentro.com",
      },
      tier: "Oro",
    },
    {
      id: 3,
      name: "Universidad de Carabobo",
      logo: logo,
      field: "Educación Superior",
      contributions: ["Instalaciones y talleres", "Apoyo académico y administrativo", "Financiamiento para competencias"],
      location: "Valencia, Carabobo, Venezuela",
      contact: {
        phone: "+58 241-868-8888",
        email: "info@uc.edu.ve",
      },
      tier: "Platino",
    },
    {
      id: 4,
      name: "TechSolutions Engineering",
      logo: logo,
      field: "Ingeniería y Consultoría",
      contributions: [
        "Software de diseño CAD/CAM",
        "Capacitación en herramientas digitales",
        "Simulaciones y análisis estructural",
      ],
      location: "Valencia, Carabobo, Venezuela",
      contact: {
        phone: "+58 241-345-6789",
        email: "soporte@techsolutions.com",
      },
      tier: "Oro",
    },
    {
      id: 5,
      name: "Lubricantes Premium",
      logo: logo,
      field: "Productos Automotrices",
      contributions: ["Suministro de lubricantes y fluidos", "Productos de mantenimiento", "Apoyo económico"],
      location: "Valencia, Carabobo, Venezuela",
      contact: {
        phone: "+58 241-456-7890",
        email: "ventas@lubricantespremium.com",
      },
      tier: "Plata",
    },
    {
      id: 6,
      name: "Neumáticos del Caribe",
      logo: logo,
      field: "Neumáticos y Suspensión",
      contributions: [
        "Suministro de neumáticos especializados",
        "Asesoría en sistemas de suspensión",
        "Descuentos corporativos",
      ],
      location: "Valencia, Carabobo, Venezuela",
      contact: {
        phone: "+58 241-567-8901",
        email: "info@neumaticoscaribe.com",
      },
      tier: "Plata",
    },
  ]



  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-linear-to-br from-primary/10 via-background to-secondary/10 py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">Nuestros Patrocinadores</h1>
            <p className="text-lg md:text-xl text-muted-foreground text-balance">
              Gracias a nuestros patrocinadores, SAE UC puede continuar innovando, compitiendo y formando a los
              ingenieros del futuro. Su apoyo es fundamental para nuestro éxito.
            </p>
          </div>
        </div>
      </section>

      {/* Sponsors Grid */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {sponsors.map((sponsor) => (
              <Card key={sponsor.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardHeader className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="relative w-32 h-20 bg-muted rounded-lg overflow-hidden">
                      <Image
                        src={sponsor.logo || "/placeholder.svg"}
                        alt={`${sponsor.name} logo`}
                        fill
                        className="object-contain p-2"
                      />
                    </div>
                    <Badge variant="outline" className={tierColors[sponsor.tier as keyof typeof tierColors]}>
                      {sponsor.tier}
                    </Badge>
                  </div>
                  <div>
                    <CardTitle className="text-xl mb-2">{sponsor.name}</CardTitle>
                    <CardDescription className="flex items-center gap-2">
                      <Briefcase className="h-4 w-4" />
                      {sponsor.field}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Contributions */}
                  <div>
                    <h3 className="font-semibold mb-3 flex items-center gap-2 text-sm">
                      <Heart className="h-4 w-4 text-primary" />
                      Aportaciones
                    </h3>
                    <ul className="space-y-2">
                      {sponsor.contributions.map((contribution, index) => (
                        <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>{contribution}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Location */}
                  <div>
                    <h3 className="font-semibold mb-2 flex items-center gap-2 text-sm">
                      <MapPin className="h-4 w-4 text-primary" />
                      Ubicación
                    </h3>
                    <p className="text-sm text-muted-foreground">{sponsor.location}</p>
                  </div>

                  {/* Contact */}
                  <div>
                    <h3 className="font-semibold mb-2 flex items-center gap-2 text-sm">
                      <Building2 className="h-4 w-4 text-primary" />
                      Contacto
                    </h3>
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground flex items-center gap-2">
                        <Phone className="h-3 w-3" />
                        {sponsor.contact.phone}
                      </p>
                      <p className="text-sm text-muted-foreground flex items-center gap-2 break-all">
                        <Mail className="h-3 w-3" />
                        {sponsor.contact.email}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-linear-to-br from-primary/5 to-secondary/5">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Quieres ser nuestro patrocinador?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Únete a nuestra familia de patrocinadores y apoya el desarrollo de futuros ingenieros automotrices. Juntos
              podemos lograr grandes cosas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contacto"
                className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
              >
                Contáctanos
              </a>
              <a
                href="mailto:patrocinios@saeuc.org"
                className="inline-flex items-center justify-center rounded-md border border-input bg-background px-8 py-3 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                Enviar Email
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
