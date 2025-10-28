import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react"

// Images
import logo from '@/app/assets/patrocinadores/logo.jpg'



export function Footer() {
  const services = ["Diseño CAD", "Manufactura", "Consultoría Técnica", "Capacitación"]

  const quickLinks = [
    { href: "/proyectos", label: "Proyectos" },
    { href: "/equipo", label: "Equipo" },
    { href: "/servicios", label: "Servicios" },
    { href: "/historia", label: "Historia" },
  ]

  const sponsors = [
    { name: "Patrocinador 1", logo: logo },
    { name: "Patrocinador 2", logo: logo },
    { name: "Patrocinador 3", logo: logo },
  ]

  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* About Section */}
          <div className="space-y-4">
            <Image
              src="/assets/logo.png"
              alt="SAE UC Logo"
              width={140}
              height={50}
              className="h-12 w-auto"
            />
            <p className="text-sm text-muted-foreground leading-relaxed">
              Sociedad de Ingenieros Automotrices de la Universidad de Carabobo. Diseñamos, construimos y competimos con
              vehículos Baja SAE.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground">Servicios</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    href="/servicios"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground">Enlaces</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5 hrink-0" />
                <span>Universidad de Carabobo, Valencia, Venezuela</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 shrink-0" />
                <a href="mailto:contacto@saeuc.org" className="hover:text-primary transition-colors">
                  contacto@saeuc.org
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 shrink-0" />
                <span>+58 424 123 4567</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Sponsors Section - Hidden on mobile */}
        <div className="mt-12 pt-8 border-t border-border hidden md:block">
          <h3 className="text-sm font-semibold text-center text-foreground mb-6">Nuestros Patrocinadores</h3>
          <div className="flex items-center justify-center gap-8 flex-wrap">
            {sponsors.map((sponsor) => (
              <div
                key={sponsor.name}
                className="grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100"
              >
                <Image
                  src={sponsor.logo || "/placeholder.svg"}
                  alt={sponsor.name}
                  width={120}
                  height={60}
                  className="h-12 w-auto"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="mt-8 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} SAE UC. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
