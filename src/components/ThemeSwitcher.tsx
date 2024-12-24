// components/ThemeSwitcher.tsx
"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { MoonIcon } from "./switch/MoonIcon";
import { SunIcon } from "./switch/SunIcon";
import { Switch } from "@nextui-org/react";

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
    <div>
      <Switch
        checked={isDarkMode}
        onChange={handleThemeChange}
        size="lg"
        color="success"
        aria-label="Toggle dark mode"
        startContent={<SunIcon className="text-yellow-500" />}
        endContent={<MoonIcon className="text-blue-500" />}
      />
    </div>
  );
}