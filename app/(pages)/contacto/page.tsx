"use client"

import type React from "react"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Mail, Phone, Clock, Facebook, Instagram, Linkedin } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    alert("Gracias por tu mensaje. Te contactaremos pronto!")
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: "Ubicación",
      details: ["Universidad de Carabobo", "Facultad de Ingeniería", "Valencia, Carabobo, Venezuela"],
    },
    {
      icon: Mail,
      title: "Email",
      details: ["contacto@saeuc.org", "info@saeuc.org"],
    },
    {
      icon: Phone,
      title: "Teléfono",
      details: ["+58 424 123 4567", "+58 412 987 6543"],
    },
    {
      icon: Clock,
      title: "Horario",
      details: ["Lunes - Viernes: 2:00 PM - 6:00 PM", "Sábados: 9:00 AM - 1:00 PM"],
    },
  ]

  const faqs = [
    {
      question: "¿Cómo puedo unirme al equipo?",
      answer:
        "Puedes contactarnos a través de este formulario o visitarnos en nuestro taller. Aceptamos estudiantes de todas las carreras de ingeniería.",
    },
    {
      question: "¿Necesito experiencia previa?",
      answer:
        "No es necesario tener experiencia previa. Ofrecemos capacitación y mentoría para todos los nuevos miembros del equipo.",
    },
    {
      question: "¿Cuánto cuesta solicitar un servicio?",
      answer:
        "Los costos varían según el proyecto. Contáctanos para una cotización gratuita y personalizada según tus necesidades.",
    },
    {
      question: "¿Realizan proyectos para empresas?",
      answer: "Sí, ofrecemos servicios de diseño CAD, manufactura y consultoría técnica para empresas y profesionales.",
    },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-linear-to-br from-primary/10 via-background to-secondary/10 py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl space-y-6">
            <Badge variant="secondary" className="text-sm">
              Contáctanos
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-balance sm:text-5xl md:text-6xl">
              Hablemos de Tu Proyecto
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed md:text-xl">
              ¿Tienes preguntas sobre nuestros servicios o quieres unirte al equipo? Estamos aquí para ayudarte.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Contact Form */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tight">Envíanos un Mensaje</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Completa el formulario y nos pondremos en contacto contigo lo antes posible.
                </p>
              </div>

              <Card>
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nombre Completo *</Label>
                      <Input
                        id="name"
                        placeholder="Tu nombre"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="tu@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Teléfono</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+58 424 123 4567"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Asunto *</Label>
                      <Select
                        value={formData.subject}
                        onValueChange={(value) => setFormData({ ...formData, subject: value })}
                      >
                        <SelectTrigger id="subject">
                          <SelectValue placeholder="Selecciona un asunto" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="join">Unirme al equipo</SelectItem>
                          <SelectItem value="services">Solicitar servicios</SelectItem>
                          <SelectItem value="sponsorship">Patrocinio</SelectItem>
                          <SelectItem value="collaboration">Colaboración</SelectItem>
                          <SelectItem value="other">Otro</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Mensaje *</Label>
                      <Textarea
                        id="message"
                        placeholder="Cuéntanos más sobre tu consulta..."
                        rows={6}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      Enviar Mensaje
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tight">Información de Contacto</h2>
                <p className="text-muted-foreground leading-relaxed">
                  También puedes contactarnos directamente a través de estos medios.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <Card key={info.title}>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 shrink-0">
                          <info.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div className="space-y-2 flex-1">
                          <h3 className="font-semibold">{info.title}</h3>
                          {info.details.map((detail, index) => (
                            <p key={index} className="text-sm text-muted-foreground">
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Social Media */}
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <h3 className="font-semibold">Síguenos en Redes Sociales</h3>
                    <div className="flex items-center gap-4">
                      <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        <Facebook className="h-5 w-5" />
                        <span className="sr-only">Facebook</span>
                      </a>
                      <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        <Instagram className="h-5 w-5" />
                        <span className="sr-only">Instagram</span>
                      </a>
                      <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        <Linkedin className="h-5 w-5" />
                        <span className="sr-only">LinkedIn</span>
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl">Preguntas Frecuentes</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Encuentra respuestas a las preguntas más comunes
              </p>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <Card key={index}>
                  <CardContent className="p-6 space-y-3">
                    <h3 className="text-lg font-semibold">{faq.question}</h3>
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl">Visítanos</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Encuéntranos en la Facultad de Ingeniería de la Universidad de Carabobo
              </p>
            </div>
            <Card className="overflow-hidden">
              <div className="relative aspect-21/9 bg-muted">
                {/* Google Maps embed - responsive iframe */}
                <div className="absolute inset-0">
                  <iframe
                    title="SAE UC - Universidad de Carabobo"
                    src="https://www.google.com/maps?q=10.2762365,-68.0172499&z=17&output=embed"
                    className="w-full h-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    aria-hidden={false}
                    allowFullScreen
                  />
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
