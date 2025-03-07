import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const sponsors = [
  { name: "TechRD", tier: "Platino" },
  { name: "FinnovateRD", tier: "Oro" },
  { name: "StartupBoost", tier: "Plata" },
  // Add more sponsors as needed
]

export function SponsorsSection() {
  return (
    <section id="sponsors" className="py-24">
      <div className="container">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-12 text-center">Nuestros Sponsors</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-12">
          {sponsors.map((sponsor, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{sponsor.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Nivel: {sponsor.tier}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center">
          <Button asChild>
            <Link href="#contact-form">Conviértete en Sponsor</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

