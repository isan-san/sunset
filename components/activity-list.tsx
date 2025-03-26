import { Badge } from "@/components/ui/badge"
import { CloudSun, Moon } from "lucide-react"
import type { Activity } from "@/types/sun-data"

interface ActivityListProps {
  activities: Activity[]
  activeTab: string
  sunTime: string
}

export function ActivityList({ activities, activeTab, sunTime }: ActivityListProps) {
  const getBackgroundGradient = () => {
    if (activeTab === "sunrise") {
      return "bg-gradient-to-r from-amber-50 to-orange-100"
    } else {
      return "bg-gradient-to-r from-indigo-50 to-purple-100"
    }
  }

  const getIconBgClass = () => {
    return activeTab === "sunrise" ? "bg-amber-100" : "bg-indigo-100"
  }

  const getIconTextClass = () => {
    return activeTab === "sunrise" ? "text-amber-600" : "text-indigo-600"
  }

  return (
    <>
      <div className={`p-4 rounded-lg ${getBackgroundGradient()} mb-4`}>
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-semibold">{activeTab === "sunrise" ? "Morning Activities" : "Evening Activities"}</h3>
          {activeTab === "sunrise" ? (
            <CloudSun className="h-5 w-5 text-amber-500" />
          ) : (
            <Moon className="h-5 w-5 text-indigo-600" />
          )}
        </div>
        <p className="text-sm text-slate-600 mb-2">
          {activeTab === "sunrise"
            ? `Make the most of your morning with these activities timed around sunrise at ${sunTime}.`
            : `Wind down your day with these activities timed around sunset at ${sunTime}.`}
        </p>
      </div>

      <div className="space-y-3 max-h-[400px] overflow-y-auto pr-2">
        {activities.map((activity, index) => {
          const Icon = activity.icon
          return (
            <div
              key={index}
              className="flex items-start gap-3 p-3 rounded-md bg-white border border-slate-200 hover:border-slate-300 transition-colors"
            >
              <div
                className={`mt-0.5 ${getIconBgClass()} h-10 w-10 rounded-full flex items-center justify-center ${getIconTextClass()}`}
              >
                <Icon className="h-4 w-4" />
              </div>
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
                  <p className="font-medium text-sm">{activity.name}</p>
                  <Badge
                    variant="outline"
                    className="text-xs w-fit whitespace-nowrap flex-shrink-0 self-start sm:self-center sm:ml-auto sm:text-right"
                  >
                    {activity.time}
                  </Badge>
                </div>
                <p className="text-xs text-slate-500 mt-1">{activity.description}</p>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

