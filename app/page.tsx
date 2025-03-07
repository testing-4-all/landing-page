import { SiteHeader } from "@/components/site-header"
import { CountdownTimer } from "@/components/countdown-timer"
import { AboutSection } from "@/components/sections/about-section"
import { AgendaSection } from "@/components/sections/agenda-section"
import { SpeakersSection } from "@/components/sections/speakers-section"
import { SponsorsSection } from "@/components/sections/sponsors-section"
import { OpportunitiesSection } from "@/components/sections/opportunities-section"
import { NetworkingSection } from "@/components/sections/networking-section"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Page() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="container flex flex-col items-center justify-center space-y-8 py-24 text-center">
          <div className="space-y-4">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Copia%20de%20Testing4ALLLogo-jTBdF88BoKwRGoyd4bawSWAw4olyoY.png"
              alt="Testing 4 All Logo"
              width={200}
              height={200}
              className="mx-auto"
            />
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">Testing 4 All</h1>
            <p className="mx-auto max-w-[700px] text-lg text-muted-foreground sm:text-xl">
              Where Human Insight Meets AI Innovation
            </p>
          </div>
          <div className="space-y-4">
            <p className="text-lg font-semibold">15 de Marzo, 2024 • Santo Domingo</p>
            <CountdownTimer targetDate="2025-03-15T09:00:00-04:00" />
          </div>
          <div className="space-x-4">
            <Button size="lg" asChild>
              <a href="https://www.eventbrite.com" target="_blank" rel="noopener noreferrer">
                Registro
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#agenda">Ver Agenda</a>
            </Button>
          </div>
        </section>
        <AboutSection />
        <AgendaSection />
        <SpeakersSection />
        <SponsorsSection />
        <OpportunitiesSection />
        <NetworkingSection />
      </main>
    </div>
  )
}

