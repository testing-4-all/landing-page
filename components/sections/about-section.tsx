import { Card, CardContent } from "@/components/ui/card"
import { Brain, Users, Zap, MapPin } from "lucide-react"

const stats = [
  {
    label: "Asistentes",
    value: "300+",
    icon: Users,
  },
  {
    label: "Speakers",
    value: "9",
    icon: Brain,
  },
  {
    label: "Charlas",
    value: "7",
    icon: Zap,
  },
  {
    label: "Empresas",
    value: "15+",
    icon: MapPin,
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-muted">
      <div className="container">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Where Human Insight Meets AI Innovation
            </h2>
            <p className="text-lg text-muted-foreground">
              Testing 4 All reúne a la comunidad de QA dominicana para explorar cómo la IA está transformando el
              testing. Un día completo dedicado a compartir conocimientos, mejores prácticas y las últimas innovaciones
              en el mundo del testing, adaptadas al contexto local.
            </p>
            <div className="space-y-2">
              <h3 className="font-semibold">Lo que aprenderás:</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Integración de IA en procesos de testing locales</li>
                <li>• Automatización adaptada a proyectos dominicanos</li>
                <li>• Estrategias de QA para startups y empresas locales</li>
                <li>• Oportunidades en el mercado tech dominicano</li>
              </ul>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {stats.map((stat) => {
              const Icon = stat.icon
              return (
                <Card key={stat.label} className="border-2">
                  <CardContent className="p-6 flex flex-col items-center text-center space-y-2">
                    <Icon className="h-8 w-8 text-primary" />
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

