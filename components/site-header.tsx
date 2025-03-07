import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Copia%20de%20Testing4ALLLogo-jTBdF88BoKwRGoyd4bawSWAw4olyoY.png"
            alt="Testing 4 All Logo"
            width={40}
            height={40}
            className="h-10 w-auto"
          />
          <span className="hidden font-bold sm:inline-block">Testing 4 All</span>
        </Link>
        <MainNav className="mx-6" />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <ThemeToggle />
          <Button variant="outline" asChild>
            <Link href="#sponsors">Patrocinar</Link>
          </Button>
          <Button asChild>
            <a href="https://www.eventbrite.com" target="_blank" rel="noopener noreferrer">
              Registro
            </a>
          </Button>
        </div>
      </div>
    </header>
  )
}

