import type * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"

const navItems = [
  { href: "#agenda", label: "Agenda" },
  { href: "#speakers", label: "Speakers" },
  { href: "#sponsors", label: "Patrocinadores" },
  { href: "#oportunidades", label: "Oportunidades" },
  { href: "#networking", label: "Networking" },
]

export function MainNav({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
  return (
    <>
      {/* Desktop Navigation */}
      <nav className={cn("hidden md:flex items-center space-x-4 lg:space-x-6", className)} {...props}>
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} className="text-sm font-medium transition-colors hover:text-primary">
            {item.label}
          </Link>
        ))}
      </nav>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        <Sheet>
          <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className="text-lg font-semibold">
                  {item.label}
                </Link>
              ))}
            </nav>
        </Sheet>
      </div>
    </>
  )
}
