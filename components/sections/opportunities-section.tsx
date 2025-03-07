import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const jobOpenings = [
  { title: "QA Engineer", company: "TechRD", description: "Buscamos un QA con experiencia en automatización" },
  { title: "Test Lead", company: "FinnovateRD", description: "Liderá nuestro equipo de QA en proyectos fintech" },
  {
    title: "Performance Tester",
    company: "MobileApps DR",
    description: "Especialista en testing de rendimiento para apps móviles",
  },
  // Add more job openings as needed
]

export function OpportunitiesSection() {
  return (
    <section id="oportunidades" className="py-24 bg-muted">
      <div className="container">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-12 text-center">Oportunidades Laborales</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {jobOpenings.map((job, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{job.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-semibold">{job.company}</p>
                <p className="text-sm text-muted-foreground mb-4">{job.description}</p>
                <Button asChild>
                  <Link href={`#apply-${index}`}>Aplicar</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
