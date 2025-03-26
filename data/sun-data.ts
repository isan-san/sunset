import type { SunData, ActivityCollection } from "@/types/sun-data"
import { Coffee, Bike, Moon, Camera, Mountain, BookOpen, Umbrella, Utensils, Music } from "lucide-react"

// Available cities for the dropdown
export const availableCities = ["New York", "London", "Tokyo", "Sydney", "Paris"]

// Mock data for sunrise/sunset times
export const getSunData = (location: string): SunData => {
  // In a real app, this would be an API call
  const locations: Record<string, SunData> = {
    "new york": {
      sunrise: "06:32 AM",
      sunset: "07:45 PM",
      dayLength: "13h 13m",
      lat: 40.7128,
      lng: -74.006,
      weather: "clear",
      temperature: 72,
      moonPhase: "Waxing Crescent",
    },
    london: {
      sunrise: "05:58 AM",
      sunset: "08:12 PM",
      dayLength: "14h 14m",
      lat: 51.5074,
      lng: -0.1278,
      weather: "cloudy",
      temperature: 65,
      moonPhase: "First Quarter",
    },
    tokyo: {
      sunrise: "05:12 AM",
      sunset: "06:32 PM",
      dayLength: "13h 20m",
      lat: 35.6762,
      lng: 139.6503,
      weather: "rainy",
      temperature: 78,
      moonPhase: "Full Moon",
    },
    sydney: {
      sunrise: "06:45 AM",
      sunset: "05:23 PM",
      dayLength: "10h 38m",
      lat: -33.8688,
      lng: 151.2093,
      weather: "clear",
      temperature: 68,
      moonPhase: "Waning Gibbous",
    },
    paris: {
      sunrise: "06:22 AM",
      sunset: "08:45 PM",
      dayLength: "14h 23m",
      lat: 48.8566,
      lng: 2.3522,
      weather: "cloudy",
      temperature: 70,
      moonPhase: "New Moon",
    },
  }

  const defaultData: SunData = {
    sunrise: "06:30 AM",
    sunset: "07:30 PM",
    dayLength: "13h 00m",
    lat: 0,
    lng: 0,
    weather: "clear",
    temperature: 70,
    moonPhase: "Waxing Crescent",
  }

  return locations[location.toLowerCase()] || defaultData
}

// Activity suggestions based on time of day
export const activities: ActivityCollection = {
  sunrise: [
    {
      icon: Coffee,
      name: "Morning coffee",
      description: "Start your day with a relaxing coffee",
      time: "30 min after sunrise",
    },
    {
      icon: Bike,
      name: "Morning jog",
      description: "Enjoy the fresh morning air",
      time: "1 hour after sunrise",
    },
    {
      icon: Camera,
      name: "Sunrise photography",
      description: "Capture the beautiful colors",
      time: "During sunrise",
    },
    {
      icon: Mountain,
      name: "Hiking",
      description: "Morning hike with the best views",
      time: "1-2 hours after sunrise",
    },
    {
      icon: BookOpen,
      name: "Morning reading",
      description: "Read with natural light",
      time: "2 hours after sunrise",
    },
  ],
  sunset: [
    {
      icon: Camera,
      name: "Sunset photography",
      description: "Capture the golden hour",
      time: "30 min before sunset",
    },
    {
      icon: Umbrella,
      name: "Beach walk",
      description: "Enjoy the cool evening breeze",
      time: "During sunset",
    },
    {
      icon: Moon,
      name: "Stargazing",
      description: "Wait for the stars to appear",
      time: "1 hour after sunset",
    },
    {
      icon: Utensils,
      name: "Dinner al fresco",
      description: "Dine with a sunset view",
      time: "During sunset",
    },
    {
      icon: Music,
      name: "Evening concert",
      description: "Enjoy music as day turns to night",
      time: "After sunset",
    },
  ],
}

