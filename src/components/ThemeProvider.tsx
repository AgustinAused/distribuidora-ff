"use client"

import * as React from "react"
import { ThemeProvider } from "next-themes"

import { ReactNode } from "react";

const Providers = ({ children }: { children: ReactNode }) => {
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted){
    return <> {children}</>
  }

  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
    )
  }

export default Providers;