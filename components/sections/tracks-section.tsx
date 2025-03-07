import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Bot, Cog, Shield, Workflow } from "lucide-react"

const tracks = [
  {
    title: "Testing & IA",
    description: "Exploración de herramientas de IA para testing, automatización inteligente y casos de uso prácticos.",
    icon: Bot,
  },
  {
    title: "Automatización Avanzada",
    description: "Frameworks modernos, mejores prácticas y estrategias de automatización end-to-end.",
    icon: Cog,
  },
  {
    title: "Performance & Security",
    description: "Testing de rendimiento, seguridad y optimización de aplicaciones modernas.",
    icon: Shield,
  },
  {
    title: "DevOps & QA",
    description: "Integración de QA en pipelines de CI/CD y cultura DevOps.",
    icon: Workflow,
  },
]

export function TracksSection() {
  return (
    <section id="tracks" className="py-24">
      <div className="container">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Tracks Temáticos</h2>
          <p className="text-muted-foreground mx-auto max-w-[700px]">
            Cuatro tracks especializados para cubrir los aspectos más relevantes del testing moderno
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {tracks.map((track) => {
            const Icon = track.icon
            return (
              <Card key={track.title} className="relative overflow-hidden">
                <CardHeader className="space-y-2">
                  <Icon className="h-8 w-8 text-primary" />
                  <CardTitle>{track.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{track.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

