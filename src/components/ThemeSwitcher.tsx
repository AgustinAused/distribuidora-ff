
// components/ThemeSwitcher.tsx
"use client";

import {useTheme} from "next-themes";
import { useEffect, useState } from "react";
import { MoonIcon } from "./switch/MoonIcon";
import { SunIcon } from "./switch/SunIcon";
import { Switch } from "@nextui-org/react";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleThemeChange = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  if(!mounted) return null

  return (
    <div>
      <Switch
      defaultChecked
      onChange={handleThemeChange}
      size="lg"
      color="success"
      startContent={<SunIcon />}
      endContent={<MoonIcon />}
      />
    </div>
  )
};