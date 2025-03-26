"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin } from "lucide-react"
import { LocationSearch } from "@/components/location-search"
import { SunTimeDisplay } from "@/components/sun-time-display"
import { DayProgressTracker } from "@/components/day-progress-tracker"
import { WeatherInfo } from "@/components/weather-info"
import { ActivityTabs } from "@/components/activity-tabs"
import { getSunData, activities, availableCities } from "@/data/sun-data"
import { useToast } from "@/hooks/use-toast"
import { Toaster } from "@/components/ui/toaster"

export default function SunriseSunsetCard() {
  const [location, setLocation] = useState("")
  const [currentLocation, setCurrentLocation] = useState("New York")
  const [sunData, setSunData] = useState(getSunData("new york"))
  const [activeTab, setActiveTab] = useState("sunrise")
  const [dayProgress, setDayProgress] = useState(50)
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString())

  const { toast } = useToast()

  // Update current time and day progress
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date()
      setCurrentTime(now.toLocaleTimeString())

      // Calculate day progress
      const hour = now.getHours()
      const minute = now.getMinutes()
      const totalMinutes = hour * 60 + minute
      const progress = Math.floor((totalMinutes / (24 * 60)) * 100)
      setDayProgress(progress)
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const updateLocation = () => {
    if (location.trim()) {
      // Check if the location is in the available cities list (case-insensitive)
      const isValidLocation = availableCities.some((city) => city.toLowerCase() === location.toLowerCase())

      if (isValidLocation) {
        setSunData(getSunData(location))
        setCurrentLocation(location)
        toast({
          title: "Location updated",
          description: `Sun times now showing for ${location}`,
          variant: "default",
          position: "bottom-left",
        })
      } else {
        // Show error toast for invalid location
        toast({
          title: "Invalid location",
          description: `"${location}" is not in our database. Please try one of the suggested cities.`,
          variant: "destructive",
          position: "bottom-left",
        })
      }
    }
  }

  // Determine if it's currently day or night
  const getCurrentTimeOfDay = () => {
    const hour = new Date().getHours()
    return hour >= 6 && hour < 18 ? "day" : "night"
  }

  const timeOfDay = getCurrentTimeOfDay()

  return (
    <Card className="w-full max-w-6xl overflow-hidden bg-white">
      <div
        className={`h-2 ${activeTab === "sunrise" ? "bg-gradient-to-r from-amber-300 to-orange-500" : "bg-gradient-to-r from-indigo-800 to-purple-900"}`}
      />

      <div className="p-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left column - Main info */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">Daily Sun Times</h2>
              <Badge variant="outline" className="flex items-center gap-1">
                <MapPin className="h-3 w-3" />
                {currentLocation}
              </Badge>
            </div>

            <LocationSearch location={location} setLocation={setLocation} onSearch={updateLocation} />
            <SunTimeDisplay sunData={sunData} activeTab={activeTab} />
            <DayProgressTracker
              sunData={sunData}
              dayProgress={dayProgress}
              currentTime={currentTime}
              timeOfDay={timeOfDay as "day" | "night"}
            />
            <WeatherInfo sunData={sunData} />
          </div>

          {/* Right column - Activities */}
          <div className="lg:w-1/3">
            <ActivityTabs activities={activities} activeTab={activeTab} setActiveTab={setActiveTab} sunData={sunData} />
          </div>
        </div>
      </div>
      <Toaster />
    </Card>
  )
}

