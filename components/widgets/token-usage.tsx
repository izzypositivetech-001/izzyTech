"use client"
import {
  ArrowUpRightIcon,
  GaugeIcon,
  XIcon,
} from "@phosphor-icons/react/dist/ssr"
import { TOKEN_USAGE } from "@/lib/content"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { useState } from "react"

function formatTokens(n: number): string {
  if (n >= 1000000) return `${(n / 1000000).toFixed(1)}M`
  if (n >= 1000) return `${(n / 1000).toFixed(1)}K`
  return `${n}`
}

const TOTAL_TOKENS = TOKEN_USAGE.reduce((acc, row) => acc + row.tokens, 0)

const OPACITY_VALUES = [1, 0.72, 0.5, 0.34, 0.24]

const ROWS = TOKEN_USAGE.toSorted((a, b) => b.tokens - a.tokens).map(
  (row, index) => ({
    ...row,
    share: row.tokens / TOTAL_TOKENS,
    opacity: OPACITY_VALUES[index],
  })
)

export function TokenUsage(): React.ReactElement {

    const [collapsed, setCollapsed] = useState(true);

    if(collapsed) {
        return (
             <button className="caption-uppercase inline-flex min-w-0 items-center gap-2 rounded-full
              text-overlay-cream/80 transition-colors hover:text-overlay-cream
               focus-visible:ring-2 bg-overlay-ink/55 border border-overlay-cream/15 px-3.5 py-2 text-overlay-cream/85
               shadow-sm backdrop-blur-[10px]"
               
               onClick={() => setCollapsed(false)}
               >
          <GaugeIcon
            size={14}
            weight="regular"
            className="shrink-0 text-overlay-cream/60"
          />

          <span className="truncate">Token Usage</span>

          <p className="text-[10px] font-mono tracking-[-0.04em] text-overlay-cream/55">
            {formatTokens(TOTAL_TOKENS)}
          </p>
        </button>
        )
    }
  return (
    <aside className="w-[280px] overflow-hidden rounded-xl border border-overlay-cream/15 bg-overlay-ink/55 p-5 text-overlay-cream shadow-sm backdrop-blur-[10px]">
      <div className="flex min-w-0 items-center justify-between gap-3 whitespace-nowrap">
        <button className="caption-uppercase inline-flex min-w-0 items-center gap-2 rounded-full text-overlay-cream/80 
        transition-colors hover:text-overlay-cream focus-visible:ring-2"
          onClick={() => setCollapsed(true)}
        >
          <GaugeIcon
            size={14}
            weight="regular"
            className="shrink-0 text-overlay-cream/60"
          />

          <span className="truncate">Token Usage</span>

          <span className="text-overlay-cream-70">&middot; 28 days</span>
        </button>

        <button className="inline-flex size-6 shrink-0 items-center justify-center rounded-full text-overlay-cream/55 
        hover:bg-overlay-cream/10 hover:text-overlay-cream"
          onClick={() => setCollapsed(true)}
        >
          <XIcon size={13} weight="bold" />
        </button>
      </div>

      <div className="mt-4 border-t border-overlay-cream/12 pt-4">
        <div className="flex items-baseline gap-2">
          <p className="text-[30px] leading-none tracking-[-0.025em]">
            {formatTokens(TOTAL_TOKENS)}
          </p>
        </div>
        <div className="mt-3 flex h-[6px] gap-[2px]">
          {ROWS.map((row) => (
            <div
              key={row.model}
              style={{
                width: `${row.share * 100}%`,
                opacity: row.opacity,
              }}
              className="h-full min-w-[3px] rounded-[1px] bg-overlay-cream"
            />
          ))}
        </div>
      </div>

      <ol className="mt-4 space-y-2.5">
        {ROWS.map((row, index) => (
          <li
            key={row.model}
            className="flex items-baseline justify-between gap-3 text-[13px]"
          >
            <div className="flex min-w-0 items-baseline gap-2">
              <span
                style={{
                  opacity: row.opacity,
                }}
                className="size-1.5 shrink-0 self-center rounded-full bg-overlay-cream"
              />

              <span
                className={cn(
                  "truncate",
                  index === 0 ? "text-overlay-cream" : "text-overlay-cream/85"
                )}
              >
                {row.model}
              </span>
              <span className="font-mono text-[10px] tracking-[0.04em] text-overlay-cream/40">
                {row.vendor}
              </span>
            </div>

            <div className="font-mono tabular-nums">
              <span
                className={cn(
                  "text-[12px]",
                  index === 0 ? "text-overlay-cream" : "text-overlay-cream/70"
                )}
              >
                {formatTokens(row.tokens)}
              </span>
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-4 flex items-center justify-between gap-3 border-t border-overlay-cream/12 pt-3">
        <p className="font-mono text-[11px] tracking-[0.04em] text-overlay-cream/55">
          updated 9h ago
        </p>

        <Link
          href="/"
          className="inline-flex items-center gap-1 text-[12px] text-overlay-cream/85"
        >
          See breakdown <ArrowUpRightIcon size={12} weight="bold" />
        </Link>
      </div>
    </aside>
  )
}
