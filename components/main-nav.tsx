import type * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

const navItems = [
  { href: "#agenda", label: "Agenda" },
  { href: "#speakers", label: "Speakers" },
  { href: "#sponsors", label: "Sponsors" },
  { href: "#oportunidades", label: "Oportunidades" },
  { href: "#networking", label: "Networking" },
]

export function MainNav({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav className={cn("flex items-center space-x-4 lg:space-x-6", className)} {...props}>
      {navItems.map((item) => (
        <Link key={item.href} href={item.href} className="text-sm font-medium transition-colors hover:text-primary">
          {item.label}
        </Link>
      ))}
    </nav>
  )
}

