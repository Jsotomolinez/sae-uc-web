"use client"

import React, { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí puedes enviar la data a tu API (fetch / axios)
    console.log("Form submitted:", formData)
    alert("Gracias por tu mensaje. Te contactaremos pronto!")
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
  }

  return (
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
  )
}
