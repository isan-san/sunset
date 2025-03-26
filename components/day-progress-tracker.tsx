import { Progress } from "@/components/ui/progress"
import { Sunrise, Sunset, Sun, Moon } from "lucide-react"
import type { SunData } from "@/types/sun-data"

interface DayProgressTrackerProps {
  sunData: SunData
  dayProgress: number
  currentTime: string
  timeOfDay: "day" | "night"
}

export function DayProgressTracker({ sunData, dayProgress, currentTime, timeOfDay }: DayProgressTrackerProps) {
  return (
    <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 mb-6">
      <h3 className="font-semibold mb-3">Day Progress</h3>
      <div className="mb-2 flex justify-between text-sm text-slate-500">
        <div className="flex items-center gap-1">
          <Sunrise className="h-4 w-4 text-amber-500" />
          <span>{sunData.sunrise}</span>
        </div>
        <div className="flex items-center gap-1">
          <Sunset className="h-4 w-4 text-indigo-600" />
          <span>{sunData.sunset}</span>
        </div>
      </div>
      <Progress value={dayProgress} className="h-3" />
      <div className="mt-3 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-slate-200 flex items-center justify-center">
            {timeOfDay === "day" ? (
              <Sun className="h-5 w-5 text-amber-500" />
            ) : (
              <Moon className="h-5 w-5 text-indigo-600" />
            )}
          </div>
          <div>
            <p className="text-sm font-medium">{timeOfDay === "day" ? "Daytime" : "Nighttime"}</p>
            <p className="text-xs text-slate-500">{currentTime}</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-sm font-medium">Day Length</p>
          <p className="text-xs text-slate-500">{sunData.dayLength}</p>
        </div>
      </div>
    </div>
  )
}

