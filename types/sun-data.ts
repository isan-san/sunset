import type { LucideIcon } from "lucide-react"

export interface SunData {
  sunrise: string
  sunset: string
  dayLength: string
  lat: number
  lng: number
  weather: "clear" | "cloudy" | "rainy"
  temperature: number
  moonPhase: string
}

export interface Activity {
  icon: LucideIcon
  name: string
  description: string
  time: string
}

export interface ActivityCollection {
  sunrise: Activity[]
  sunset: Activity[]
}

