// components/ThemeSwitcher.tsx
"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { MoonIcon } from "./switch/MoonIcon";
import { SunIcon } from "./switch/SunIcon";
import {Switch} from "@nextui-org/switch";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // Ensure the component is mounted before rendering to avoid hydration errors
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDarkMode = theme === "dark";

  const handleThemeChange = () => {
    setTheme(isDarkMode ? "light" : "dark");
  };

  return (
       <Switch
      defaultSelected
      color="success"
      onChange={handleThemeChange}
      endContent={<MoonIcon />}
      size="lg"
      startContent={<SunIcon />}
    >
    </Switch>
  );
}