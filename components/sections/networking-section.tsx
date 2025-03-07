import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

export function NetworkingSection() {
  return (
    <section id="networking" className="py-24">
      <div className="container">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-12 text-center">Área de Networking</h2>
        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Mapa de Stands</CardTitle>
            </CardHeader>
            <CardContent>
              <Image
                src="/placeholder.svg?height=300&width=400&text=Mapa+de+Stands"
                alt="Mapa de Stands"
                width={400}
                height={300}
                className="w-full h-auto"
              />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Horarios de Networking</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li>8:00 AM - 9:00 AM: Desayuno y Networking</li>
                <li>11:00 AM - 11:30 AM: Coffee Break y Networking</li>
                <li>12:30 PM - 2:00 PM: Almuerzo y Networking</li>
                <li>4:00 PM - 4:30 PM: Coffee Break y Networking</li>
                <li>5:30 PM - 6:30 PM: Cierre y Networking Final</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

