"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { MapPin, Check, Search, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { availableCities } from "@/data/sun-data"

interface LocationSearchProps {
  location: string
  setLocation: (location: string) => void
  onSearch: () => void
}

export function LocationSearch({ location, setLocation, onSearch }: LocationSearchProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isFocused, setIsFocused] = useState(false)
  const [filteredCities, setFilteredCities] = useState<string[]>([])
  const inputRef = useRef<HTMLInputElement>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Filter cities whenever location changes
  useEffect(() => {
    if (location) {
      const filtered = availableCities.filter((city) => city.toLowerCase().includes(location.toLowerCase()))
      setFilteredCities(filtered)
    } else {
      setFilteredCities(availableCities)
    }
  }, [location])

  // Handle clicks outside the dropdown to close it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        setIsFocused(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  // Helper function to blur focus and reset state
  const resetInputAndBlurFocus = () => {
    setLocation("")
    setIsFocused(false)
    if (inputRef.current) {
      inputRef.current.blur()
    }
    // Move focus to body
    document.body.focus()
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      onSearch()
      resetInputAndBlurFocus()
    } else if (e.key === "Escape") {
      setIsFocused(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(e.target.value)
  }

  const handleSelectCity = (city: string) => {
    setLocation(city)
    // Keep the dropdown open and focus on the input
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }

  const handleClearInput = () => {
    setLocation("")
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }

  const handleSearch = () => {
    onSearch()
    resetInputAndBlurFocus()
  }

  return (
    <div className="mb-6">
      <label htmlFor="location-input" className="block text-sm font-medium text-slate-700 mb-2">
        Set Location
      </label>
      <div className="flex gap-2">
        <div className="relative flex-1">
          <div
            className={cn("relative flex-1 group", isHovered && "cursor-pointer")}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <Search
              className={cn(
                "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 z-10 transition-colors duration-200",
                isHovered && "text-slate-600",
              )}
            />
            <Input
              id="location-input"
              ref={inputRef}
              placeholder="Search for a city..."
              value={location}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              onFocus={() => setIsFocused(true)}
              autoComplete="off"
              autoCapitalize="off"
              spellCheck="false"
              className={cn(
                "pl-9 pr-9 transition-all duration-200 w-full",
                isHovered && "border-slate-400 bg-slate-50 shadow-sm",
                isFocused && "border-primary ring-1 ring-primary/20",
              )}
            />
            {location && (
              <button
                type="button"
                onClick={handleClearInput}
                className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 hover:text-slate-600 z-10 transition-colors duration-200"
                aria-label="Clear input"
              >
                <X className="h-4 w-4" />
              </button>
            )}

            {/* Custom dropdown */}
            {isFocused && filteredCities.length > 0 && (
              <div
                ref={dropdownRef}
                className="absolute z-50 w-full mt-1 bg-white rounded-md shadow-lg border border-slate-200 max-h-60 overflow-auto"
              >
                <div className="py-1 text-sm">
                  <div className="px-2 py-1.5 text-xs font-medium text-slate-500">Suggested Cities</div>
                  {filteredCities.map((city) => (
                    <div
                      key={city}
                      className={cn(
                        "flex items-center px-2 py-1.5 cursor-pointer hover:bg-slate-100",
                        location === city && "bg-slate-50",
                      )}
                      onClick={() => handleSelectCity(city)}
                    >
                      <MapPin className="mr-2 h-4 w-4 text-slate-500" />
                      <span>{city}</span>
                      {location === city && <Check className="ml-auto h-4 w-4 text-primary" />}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
        <Button
          onClick={handleSearch}
          aria-label="Set Location"
          className="transition-all duration-200 hover:shadow-md"
        >
          <Search className="h-4 w-4" />
          <span className="hidden sm:inline-block sm:ml-2">Set Location</span>
        </Button>
      </div>
      <p className="text-xs text-slate-500 mt-1">Try: New York, London, Tokyo, Sydney, Paris</p>
    </div>
  )
}

