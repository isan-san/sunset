"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Sunrise, Sunset } from "lucide-react"
import { ActivityList } from "@/components/activity-list"
import type { ActivityCollection, SunData } from "@/types/sun-data"

interface ActivityTabsProps {
  activities: ActivityCollection
  activeTab: string
  setActiveTab: (value: string) => void
  sunData: SunData
}

export function ActivityTabs({ activities, activeTab, setActiveTab, sunData }: ActivityTabsProps) {
  return (
    <Tabs defaultValue="sunrise" value={activeTab} onValueChange={setActiveTab} className="w-full">
      <TabsList className="grid w-full grid-cols-2 mb-4">
        <TabsTrigger value="sunrise" className="flex items-center gap-2">
          <Sunrise className="h-4 w-4" />
          <span className="max-[390px]:hidden">Sunrise Activities</span>
        </TabsTrigger>
        <TabsTrigger value="sunset" className="flex items-center gap-2">
          <Sunset className="h-4 w-4" />
          <span className="max-[390px]:hidden">Sunset Activities</span>
        </TabsTrigger>
      </TabsList>

      <TabsContent value="sunrise" className="m-0">
        <ActivityList activities={activities.sunrise} activeTab="sunrise" sunTime={sunData.sunrise} />
      </TabsContent>

      <TabsContent value="sunset" className="m-0">
        <ActivityList activities={activities.sunset} activeTab="sunset" sunTime={sunData.sunset} />
      </TabsContent>
    </Tabs>
  )
}

