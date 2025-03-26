"use client"

import { Toaster as SonnerToaster } from "sonner"

export function SonnerProvider() {
  return (
    <SonnerToaster
      position="bottom-left"
      toastOptions={{
        duration: 3000,
        className: "sonner-toast",
      }}
    />
  )
}

