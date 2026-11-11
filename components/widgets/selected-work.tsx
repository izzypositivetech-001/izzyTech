import { PROJECTS } from "@/lib/content";

function ProjectCard() {
    return <div>project card</div>
}

export function SelectedWork() {
  return (
    <section id="work" className="relative border-t border-hairline-soft">
      <div className="mx-auto w-full  max-w-[1240px] px-6 sm:px-10 pt-20 sm:pt-28">

        <div className="flex items-start justify-between gap-6">

        <div className="flex items-center gap-3">
          <span className="eyebrow text-muted-ink">01</span>
          <span className="eyebrow text-ink uppercase">Selected Work</span>
        </div>

        <span className="font-mono text-[11px] tracking-[0.1em] text-muted-ink uppercase">
          2024-2026
        </span>

        </div>

        <h2 className="mt-10 max-w-[20ch] text-[clamp(2rem,4.4vw,2.75rem)] tracking-[-0.025em]">
            A focused set of recent AI products and systems, each shipped to real users.
        </h2>
      </div>

      <div className="pt-12 pb-20 sm:pb-28">

        <div className="mx-auto w-full max-w-[1240px] px-6 sm:px-10">

            <div className="flex flex-col gap-8 lg:grid  lg:grid-col-12 lg:items-stretch lg:gap-8">
                <nav className="flex flex-col lg:col-span-3 lg:col-start-1 lg:row-start-1">
                    <ol className="flex snap-x snap-mandatory gap-2 overflow-x-auto pb-1 lg:snap-none lg:flex-col lg:gap-1 lg:overflow-visible lg:pb-0">
                        {
                            PROJECTS.map((projects, index) => {
                                return <li key={projects.title} className="snap-center">
                                    <button className="relative flex items-center gap-3 py-2 text-left whitespace-nowrap lg:w-full lg:whitespace-normal">
                                        <span className="grid shrink-0 place-items-center font-mono text-[11px tracking-[0.12em] text-muted-soft tabular-nums">{projects.index}</span>
                                        <span className="text-[14px] leading-snug transition-colors text-muted-ink">{projects.title}</span>
                                    </button>
                                </li>
                            })
                        }
                    </ol>
                </nav>

                {/* project card */}
                <div className="">
                    {
                        PROJECTS.map((projects, index) => (
                            <ProjectCard />
                            
                        )
                    }
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}
