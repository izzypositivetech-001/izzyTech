import Image from "next/image"
import { Button } from "./ui/button"
import Link from "next/link"
import { ArrowUpRightIcon } from "@phosphor-icons/react/ssr"
const MEDIA = {
  day: {
    poster: "/assets/hero-day-poster.webp",
    video: "/assets/hero-day-video.mp4",
  },
  night: {
    poster: "/assets/hero-night-poster.webp",
    video: "/assets/hero-night-video.mp4",
  },
}

export default function Hero(): React.ReactElement {
  const { poster: posterSrc } = MEDIA["day"]

  return (
    <section className="relative h-svh w-full overflow-hidden">
      {/* {Background image and video} */}

      <div className="absolute inset-0 -z-20">
        <Image
          src={posterSrc}
          alt="izzytech"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* {overlay} */}<div className="absolute inset-0 -z-10 bg-[linear-gradient(108deg,rgba(15,15,12,0.78)_0%, rgba(15,15,12,0.78)_25%, rgba(15,15,12,0.78)_46%, rgba(15,15,12,0.78)_68%, rgba(15,15,12,0.78)_84%] "/>


      {/*  */}
      {/* {Foreground content} */}

      <div className="relative z-10 flex h-full flex-col">
        <div className="h-16 shrink-0 sm:h-20">
          <div className="flex flex-1 items-center">
            <div className="max-auto w-full max-w-[1480px] px-6 sm:px-14 lg:px-14">
              <div className="max-w-[640px]">
                <p className="caption-uppercase text-overlay-cream/70">
                  Full Stack AI Engineer
                </p>

                <h1>
                  Modern software <br />
                  built to think, <br />
                  shipped end‑to‑end.
                </h1>

                <p>
                  I'm IzzyTech, a full-stack engineer designing and shipping
                  AI-native products from the inference layer to the last
                  interaction.
                </p>

                <div>
                  <Button asChild>
                    <Link href="#work">
                      View Selected Work{" "}
                      <ArrowUpRightIcon size={16} weight="bold" />
                    </Link>
                  </Button>

                  <Button asChild>
                    <Link href="#contact">Get In Touch </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
