"use client"
import { MoonIcon, SunIcon } from "@phosphor-icons/react/dist/ssr"
import { cn } from "@/lib/utils"
import { motion } from "motion/react"

export type DayNightMode = "day" | "night"

type Props = {
  value: DayNightMode
  onChange: (next: DayNightMode) => void
}

export function DayNightSwitch({ value, onChange }: Props): React.ReactElement {

  const isDay = value == "day"

  return (
    <button
      type="button"
      role="switch"
      aria-checked={!isDay}
      aria-label={isDay ? "Switch to night mode" : "Switch to day mode"}
      className="group relative flex w-9 flex-col items-center gap-1.5 overflow-hidden rounded-full border border-overlay-cream/20 p-1.5 backdrop-blur-md transition-colors hover:border-overlay-cream/40 focus-visible:ring-overlay-cream/45 focus-visible:outline-none"
      onClick={() => onChange(isDay ? "night" : "day")}
    >
      <motion.span
        initial={false}
        animate={{ y: isDay ? 0 : 42 }}
        transition={{ type: "spring", stiffness: 500, damping: 35 }}
        className="absolute inset-x-1.5 top-1.5 h-9 rounded-full bg-overlay-cream"
      />

      <span
        className={cn(
          "relative z-10 flex h-9 items-center transition-colors duration-300",
          isDay
            ? "text-overlay-ink"
            : "text-overlay-cream/55 group-hover:text-overlay-cream/85"
        )}
      >
        <SunIcon size={17} weight={ 
            isDay ? "fill" : "regular"
        } />
      </span>

      <span
        className={cn(
          "relative z-10 flex h-9 items-center transition-colors duration-300",
          !isDay
            ? "text-overlay-ink"
            : "text-overlay-cream/55 group-hover:text-overlay-cream/85"
        )}
      >
        <MoonIcon size={17} weight={ 
            !isDay ? "fill" : "regular"
        } />
      </span>
    </button>
  )
}
