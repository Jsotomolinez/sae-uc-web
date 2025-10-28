import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import type { ComponentType, SVGProps } from "react";


function ProyectoDestacado(
  { title, description, image }: { title: string; description: string; image: string }
) {
  return (
    <Card key={title} className="overflow-hidden group hover:shadow-lg transition-shadow">
      <div className="relative aspect-3/2">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardContent className="p-6 space-y-2">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  )
};

function PorqueUnirte(
  { title, description, icon: Icon }: { title: string; description: string; icon: ComponentType<SVGProps<SVGSVGElement>> }
) {
  return (
    <Card key={title} className="text-center p-6 hover:shadow-lg transition-shadow">
      <CardContent className="space-y-4 p-0">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
          <Icon className="h-8 w-8 text-primary" />
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{ description}</p>
      </CardContent>
    </Card>
)};


export {
  ProyectoDestacado,
  PorqueUnirte
}