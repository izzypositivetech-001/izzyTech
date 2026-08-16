import { NAV_LINKS } from "@/lib/content"
import Link from "next/link"

export function SiteHeader(): React.ReactElement {
  return (
    <header className="fixed inset-x-0 top-0 z-50 transition-colors duration-300">
      <div className="mx-auto flex h-16 w-full max-w-[1480px] items-center justify-between px-6 sm:h-20 sm:px-14 lg:px-14">
        <Link
          href={"/"}
          className="group inline-flex items-center gap-1.5 text-base font-medium tracking-[-0.01em] text-overlay-cream"
        >
          <span>IzzyTech</span>
          <span className="size-1.5 rounded-full bg-primary"></span>
        </Link>

        <nav className="flex items-center gap-8 text-[13px] text-overlay-cream/95">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative transition-colors after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full 
              after:origin-left after:scale-x-0 after:bg-current hover:after:scale-x-100  after:transition-transform
               after:duration-300"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="fix object-center gap-3">
            <Link href="/#contact" className="h-9 items-center gap-2 rounded-full border px-4 text-[13px]
             transition-colors md:inline-flex border-overlay-cream/55 bg-overlay-ink/55 text-overlay-cream backdrop-blur-[6px]
             hover:bg-overlay-ink/70">
                <span className="size-1.5 rounded-full bg-success"/>
                <span>Let's Talk</span>
            </Link>
        </div>
      </div>
    </header>
  )
}
