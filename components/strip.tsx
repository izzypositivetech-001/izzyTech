"use client"
import { PRACTICE_AREAS } from "@/lib/content"
import { RevealGroup, Reveal } from "./reveal"


export function Strip(): React.ReactElement {
  return (
    <section className="border-y border-hairline py-9">
      <div className="mx-auto w-full max-w-[1240px] px-6 sm:px-10">
        <RevealGroup
          as="ul"
          className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5 lg:gap-0"
        >
          {PRACTICE_AREAS.map((item, index) => (
            <Reveal
              as="li"
              key={index}
              className="flex flex-col gap-1.5 px-0 lg:px-5 lg:[&:not(:first-child)]:border-l lg:[&:not(:first-child)]:border-hairline"
            >
              <span className="eyebrow text-muted-ink uppercase">{item.k}</span>
              <span className="text-sm font-medium tracking-[-0.01em] text-ink">
                {item.v}
              </span>
            </Reveal>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}
