"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ThemeSwitch() {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <button
      onClick={toggleTheme}
      className="relative inline-flex h-[30px] w-[60px] shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-slate-200 px-0 py-0 transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 dark:bg-slate-800"
      aria-label="Toggle theme"
    >
      <span className="sr-only">Toggle theme</span>
      <div className="flex h-full w-full items-center justify-between px-[4px]">
        <Sun className="h-[18px] w-[18px] text-yellow-500" />
        <Moon className="h-[18px] w-[18px] text-slate-400" />
      </div>
      <span
        className="pointer-events-none absolute left-[2px] top-[2px] flex h-[22px] w-[22px] translate-x-0 transform items-center justify-center rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out dark:translate-x-[32px]"
      />
    </button>
  )
}