import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

const speakers = [
  { name: "María Pérez", role: "QA Lead", company: "Fintech RD", time: "10:00 AM", language: "Español" },
  { name: "Juan Rodríguez", role: "AI Engineer", company: "Tech Innovators", time: "11:30 AM", language: "Español" },
  { name: "Ana Gómez", role: "Automation Specialist", company: "StartupDom", time: "2:00 PM", language: "Español" },
  { name: "Carlos Méndez", role: "Performance Guru", company: "MobileApps DR", time: "3:00 PM", language: "Español" },
  { name: "Laura Sánchez", role: "QA Manager", company: "BankTech RD", time: "4:30 PM", language: "Español" },
  // Add 4 more speakers to complete the 9 required
]

export function SpeakersSection() {
  return (
    <section id="speakers" className="py-24 bg-muted">
      <div className="container">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-12 text-center">Speakers</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {speakers.map((speaker, index) => (
            <Card key={index}>
              <CardHeader>
                <Image
                  src={`/placeholder.svg?height=100&width=100&text=${speaker.name}`}
                  alt={speaker.name}
                  width={100}
                  height={100}
                  className="rounded-full mx-auto"
                />
                <CardTitle className="text-center">{speaker.name}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-muted-foreground">
                  {speaker.role} en {speaker.company}
                </p>
                <p className="text-sm font-semibold mt-2">Charla: {speaker.time}</p>
                <p className="text-sm text-muted-foreground">Idioma: {speaker.language}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

