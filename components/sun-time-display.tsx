import { Sunrise, Sunset, Clock } from "lucide-react"
import type { SunData } from "@/types/sun-data"

interface SunTimeDisplayProps {
  sunData: SunData
  activeTab: string
}

export function SunTimeDisplay({ sunData, activeTab }: SunTimeDisplayProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
      <div
        className={`p-4 rounded-lg ${activeTab === "sunrise" ? "bg-amber-50 border border-amber-200" : "bg-slate-50 border border-slate-200"}`}
      >
        <div className="flex items-center gap-3 mb-2">
          <Sunrise className="h-5 w-5 text-amber-500" />
          <h3 className="font-semibold">Sunrise</h3>
        </div>
        <p className="text-3xl font-bold text-amber-700">{sunData.sunrise}</p>
        <div className="flex items-center gap-2 mt-2 text-sm text-amber-600">
          <Clock className="h-4 w-4" />
          <span>
            First light:{" "}
            {sunData.sunrise.replace("AM", "AM").replace(/(\d+):(\d+)/, (_, h, m) => `${Number.parseInt(h) - 1}:${m}`)}
          </span>
        </div>
      </div>

      <div
        className={`p-4 rounded-lg ${activeTab === "sunset" ? "bg-indigo-50 border border-indigo-200" : "bg-slate-50 border border-slate-200"}`}
      >
        <div className="flex items-center gap-3 mb-2">
          <Sunset className="h-5 w-5 text-indigo-600" />
          <h3 className="font-semibold">Sunset</h3>
        </div>
        <p className="text-3xl font-bold text-indigo-700">{sunData.sunset}</p>
        <div className="flex items-center gap-2 mt-2 text-sm text-indigo-600">
          <Clock className="h-4 w-4" />
          <span>
            Last light:{" "}
            {sunData.sunset.replace("PM", "PM").replace(/(\d+):(\d+)/, (_, h, m) => `${Number.parseInt(h) + 1}:${m}`)}
          </span>
        </div>
      </div>
    </div>
  )
}

