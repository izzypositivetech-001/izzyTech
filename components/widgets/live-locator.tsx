import { GeoLocation } from "@/lib/location"
import { weather } from "@/lib/weather"
import { CloudFogIcon, CloudIcon, CloudLightningIcon, CloudRainIcon, CloudSnowIcon, CloudSunIcon, SunIcon } from "@phosphor-icons/react/dist/ssr"
import { useEffect, useState } from "react"

type Props = {
  location: GeoLocation
  weather: weather | null
}

const TEMP_UNIT: "celsius" | "fahrenheit" = "fahrenheit"
const TEMP_SYMBOL = TEMP_UNIT === "fahrenheit" ? "°F" : "°C"

type IconComponent = React.ComponentType<{
  size?: number
  weight?: "thin" | "light" | "regular" | "bold" | "fill" | "duotone"
  className?: string
}>

function weatherFor(code: number): { Icon: IconComponent; label: string } {
  if (code === 0) return { Icon: SunIcon, label: "Clear" }
  if (code <= 2) return { Icon: CloudSunIcon, label: "Partly cloudy"}
  if (code === 3) return { Icon: CloudIcon, label: "Overcast"}
  if (code <= 48) return { Icon: CloudFogIcon, label: "Fog"}
  if (code <= 57) return { Icon: CloudRainIcon, label: "Drizzle"}
  if (code <= 67) return { Icon: CloudRainIcon, label: "Rain"}
  if (code <= 77) return { Icon: CloudSnowIcon, label: "Snow"}
  if (code <= 82) return { Icon: CloudRainIcon, label: "Showers"}
  if (code <= 99) return { Icon: CloudLightningIcon, label: "Thunderstorm"}
  return { Icon: CloudIcon, label: "Cloudy"}
}

export function LiveLocator({ location, weather }: Props): React.ReactElement {
  const [now, setNow] = useState<Date | null>(null)

  useEffect(() => {
    setNow(new Date())

    const id = setInterval(() => setNow(new Date()), 30_000)
    return () => clearInterval(id)
  }, [])

  const timeStr = now
    ? new Intl.DateTimeFormat("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      }).format(now)
    : null

  const wx = weather ? weatherFor(weather.code) : null
  const WeatherIcon = wx?.Icon

  return (
    <div className="inline-flex items-center gap-2.5 font-mono text-[11px] tracking-[0.12em] text-overlay-cream/65">
      <span className="uppercase">
        {location.city}, {location.region}
      </span>

      {timeStr && (
        <>
          <span className="text-overlay-cream/25">&middot;</span>
          <span className="">{timeStr}</span>
        </>
      )}

      {weather && wx && WeatherIcon && (
        <>
          <span className="text-overlay-cream/25">&middot;</span>
          <span className="inline-flex items-center gap-1.5">
            <WeatherIcon
              size={13}
              weight="regular"
              className="text-overlay-cream/85"
            />
            <span className="tracking-[0.04em] normal-case tabular-nums">
              {Math.round(weather.temperature)}
              {TEMP_SYMBOL}
            </span>
          </span>
        </>
      )}
    </div>
  )
}
