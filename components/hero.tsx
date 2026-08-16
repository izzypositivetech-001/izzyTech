"use client"

import Image from "next/image"
import { Button } from "./ui/button"
import Link from "next/link"
import { ArrowUpRightIcon } from "@phosphor-icons/react/ssr"
import { useRef, useState } from "react"
import { cn } from "@/lib/utils"
const MEDIA = {
  day: {
    poster: "/assets/hero-day-poster.webp",
    video: "/assets/hero-background-video.mp4",
  },
  night: {
    poster: "/assets/hero-night-poster.webp",
    video: "/assets/hero-night-video.mp4",
  },
}

export default function Hero(): React.ReactElement {
  const [videoReady, setVideoReady] = useState(false)
  const videoRef = useRef(null)

  const { poster: posterSrc, video: videoSrc } = MEDIA["day"]

  return (
    <section className="relative isolate h-svh w-full overflow-hidden bg-overlay-ink text-overlay-cream">
      {/* {Background image and video} */}

      <div className="absolute inset-0 -z-20">
        <video
          src={videoSrc}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={posterSrc}
          className="h-full w-full object-cover sm:object-center"
          onCanPlay={() => setVideoReady(true)}
        />

        <Image
          src={posterSrc}
          alt="izzytech"
          fill
          priority
          sizes="100vw"
          className={cn(
            "object-cover transition-opacity duration-[900ms] ease-out",
            videoReady ? "opacity-0" : "opacity-100"
          )}
        />
      </div>

      {/* {overlay} */}

      <div className="absolute inset-0 -z-10 bg-[linear-gradient(108deg,rgba(15,15,12,0.78)_0%,rgba(15,15,12,0.58)_22%,rgba(15,15,12,0.32)_46%,rgba(15,15,12,0.32)_68%,rgba(15,15,12,0.32)_84%)]" />



      <div className="absolute inset-x-0 top-0 h-32 -z-10 bg-[linear-gradient(to_bottom,rgba(15,15,12,0.55)_0%,rgba(15,15,12,0.18)_55%,rgba(15,15,12,0)_100%)]" />
      {/*  */}
      {/* {Foreground content} */}

      <div className="relative z-10 flex h-full flex-col">
        <div className="h-16 shrink-0 sm:h-20" />
        <div className="flex flex-1 items-center">
          <div className="mx-auto w-full max-w-[1480px] px-6 sm:px-14 lg:px-14">
            <div className="max-w-[640px]">
              <p className="caption-uppercase text-overlay-cream/70">
                Full Stack AI Engineer
              </p>

              <h1 className="mt-5 text-[clamp(2.25rem,4.8vw,4.25rem)] leading-[1.40] tracking-[-0.03em]">
                Modern software <br />
                built to think, <br />
                shipped end‑to‑end.
              </h1>

              <p className="mt-5 max-w-[560px] text-base leading-[1.6] text-overlay-cream/80">
                I'm IzzyTech, a full-stack engineer designing and shipping
                AI-native products from the inference layer to the last
                interaction.
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-3">
                <Button
                  asChild
                  className="h-11 rounded-md px-5 text-sm font-medium hover:bg-primary-active focus-visible:ring-primary/40"
                >
                  <Link href="#work">
                    View Selected Work{" "}
                    <ArrowUpRightIcon size={16} weight="bold" />
                  </Link>
                </Button>

                <Button
                  asChild
                  variant={"ghost"}
                  className="h-11 rounded-md border border-overlay-cream/25 bg-overlay-cream/[0.06] px-5 text-sm font-medium backdrop-blur-[2px] hover:bg-overlay-cream/15 hover:text-overlay-cream"
                >
                  <Link href="#contact">Get In Touch </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
