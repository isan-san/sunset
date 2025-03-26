import { Moon, Calendar, Sun, Cloud, CloudRain } from "lucide-react"
import type { SunData } from "@/types/sun-data"

interface WeatherInfoProps {
  sunData: SunData
}

export function WeatherInfo({ sunData }: WeatherInfoProps) {
  // Weather icon mapping
  const weatherIcons = {
    clear: <Sun className="h-5 w-5 text-amber-500" />,
    cloudy: <Cloud className="h-5 w-5 text-slate-500" />,
    rainy: <CloudRain className="h-5 w-5 text-blue-500" />,
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
        <div className="flex items-center gap-2 mb-2">
          {weatherIcons[sunData.weather]}
          <h3 className="font-semibold">Weather</h3>
        </div>
        <p className="text-lg font-medium capitalize">{sunData.weather}</p>
        <p className="text-sm text-slate-500">{sunData.temperature}°F</p>
      </div>

      <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
        <div className="flex items-center gap-2 mb-2">
          <Moon className="h-5 w-5 text-slate-700" />
          <h3 className="font-semibold">Moon Phase</h3>
        </div>
        <p className="text-lg font-medium">{sunData.moonPhase}</p>
        <p className="text-sm text-slate-500">Visibility: Good</p>
      </div>

      <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
        <div className="flex items-center gap-2 mb-2">
          <Calendar className="h-5 w-5 text-slate-700" />
          <h3 className="font-semibold">Date</h3>
        </div>
        <p className="text-lg font-medium">
          {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric" })}
        </p>
        <p className="text-sm text-slate-500">{new Date().getFullYear()}</p>
      </div>
    </div>
  )
}

