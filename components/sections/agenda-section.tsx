"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {configDotenv} from "dotenv"
configDotenv()
interface AgendaItem {
  time: string
  title: string
  description: string
}

export function AgendaSection() {
  const [agendaItems, setAgendaItems] = useState<AgendaItem[]>([])

  useEffect(() => {
    async function fetchAgenda() {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_HOST}/api/agendas`, {
          headers: {
            "Authorization": `Bearer ${process.env.NEXT_PUBLIC_STRAPI_READ_TOKEN}`,            
            "Content-Type": "application/json"
          }
        })
        const data = await res.json()
  
        console.log("API Response:", data) 
  
        if (data?.data?.length > 0) {
          const formattedData: AgendaItem[] = data.data.map((item: any) => ({
            time: item.time,
            title: item.title,
            description: item.description,
          }))
  
          setAgendaItems(formattedData)
        } else {
          console.warn("No agenda data found.")
        }
      } catch (error) {
        console.error("Error fetching agenda:", error)
      }
    }
  
    fetchAgenda()
  }, [])
  

  return (
    <section id="agenda" className="py-24">
      <div className="container">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-12 text-center">Agenda</h2>
        <div className="space-y-6">
          {agendaItems.length > 0 ? (
            agendaItems.map((item, index) => (
              <Card key={index}>
                <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                  <CardTitle className="text-lg font-bold">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <h3 className="font-semibold">{item.description}</h3>
                  <p className="text-sm text-muted-foreground">{item.time}</p>
                </CardContent>
              </Card>
            ))
          ) : (
            <p className="text-center text-gray-500">Cargando agenda...</p>
          )}
        </div>
      </div>
    </section>
  )
}

