// Helper functions for time calculations

/**
 * Calculates the day progress percentage based on current time
 * @returns number between 0-100 representing day progress
 */
export function calculateDayProgress(): number {
  const now = new Date()
  const hour = now.getHours()
  const minute = now.getMinutes()
  const totalMinutes = hour * 60 + minute
  return Math.floor((totalMinutes / (24 * 60)) * 100)
}

/**
 * Determines if it's currently day or night (simplified)
 * @returns "day" or "night"
 */
export function getCurrentTimeOfDay(): "day" | "night" {
  const hour = new Date().getHours()
  return hour >= 6 && hour < 18 ? "day" : "night"
}

/**
 * Calculates the first light time (simplified)
 * @param sunriseTime - The sunrise time string (e.g., "06:30 AM")
 * @returns The first light time string
 */
export function calculateFirstLight(sunriseTime: string): string {
  return sunriseTime.replace("AM", "AM").replace(/(\d+):(\d+)/, (_, h, m) => `${Number.parseInt(h) - 1}:${m}`)
}

/**
 * Calculates the last light time (simplified)
 * @param sunsetTime - The sunset time string (e.g., "07:30 PM")
 * @returns The last light time string
 */
export function calculateLastLight(sunsetTime: string): string {
  return sunsetTime.replace("PM", "PM").replace(/(\d+):(\d+)/, (_, h, m) => `${Number.parseInt(h) + 1}:${m}`)
}

