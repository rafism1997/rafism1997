import { Section } from "@/components/section"
import { earlierBuilds, flagshipSystem, systems, type SystemReadout } from "@/lib/site-data"
import { cn } from "@/lib/utils"

function Tags({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-1.5">
      {items.map((item) => (
        <li key={item} className="border border-border px-2 py-1 font-mono text-xs leading-none text-muted-foreground">
          {item}
        </li>
      ))}
    </ul>
  )
}

function Readout({ rows }: { rows: SystemReadout[] }) {
  return (
    <dl className="flex flex-col border-t border-border">
      {rows.map((row) => (
        <div key={row.label} className="grid grid-cols-[5.75rem_minmax(0,1fr)] gap-4 border-b border-border py-2.5">
          <dt className="pt-0.5 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">{row.label}</dt>
          <dd className={cn("text-sm leading-snug text-pretty", row.highlight && "text-signal")}>{row.value}</dd>
        </div>
      ))}
    </dl>
  )
}

function Pipeline({ phases }: { phases: string[] }) {
  return (
    <div className="flex flex-col gap-4">
      <p className="eyebrow text-muted-foreground">Agents in every phase, a human gate after each</p>
      <div className="relative">
        <div aria-hidden="true" className="flow-line absolute inset-x-0 top-4 hidden h-px bg-border sm:block" />
        <ol className="relative grid gap-3 sm:grid-cols-5 sm:gap-4">
          {phases.map((phase, index) => (
            <li key={phase} className="flex items-center gap-3 sm:flex-col sm:items-start">
              <span
                aria-hidden="true"
                className="flex size-8 shrink-0 items-center justify-center border border-primary/60 bg-card font-mono text-xs text-primary"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="flex flex-col gap-0.5">
                <span className="text-sm font-medium leading-snug">{phase}</span>
                <span className="font-mono text-[11px] uppercase tracking-wider text-signal">Human gate</span>
              </span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}

export function Systems() {
  return (
    <Section
      id="systems"
      index="02"
      label="Systems"
      title="Systems I have designed and shipped."
      description="Six production systems across agentic AI, retrieval, vision, IoT and robotics, each with the numbers and controls that mattered."
    >
      <div className="grid gap-px border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
        <article className="flex flex-col bg-card md:col-span-2">
          <div className="reveal flex flex-1 flex-col gap-7 p-6 sm:p-8">
            <p className="eyebrow flex flex-wrap items-center justify-between gap-x-6 gap-y-2">
              <span className="text-primary">
                {flagshipSystem.id}
                <span className="text-signal">{" / Flagship"}</span>
              </span>
              <span className="text-muted-foreground">{flagshipSystem.tag}</span>
            </p>
            <div className="flex flex-col gap-4">
              <h3 className="font-display text-2xl font-semibold leading-tight text-balance sm:text-3xl">
                {flagshipSystem.title}
              </h3>
              <p className="max-w-2xl leading-relaxed text-muted-foreground text-pretty">{flagshipSystem.summary}</p>
            </div>
            <Pipeline phases={flagshipSystem.phases} />
            <Readout rows={flagshipSystem.readout} />
            <div className="mt-auto">
              <Tags items={flagshipSystem.stack} />
            </div>
          </div>
        </article>

        {systems.map((system) => (
          <article key={system.id} className="flex flex-col bg-background">
            <div className="reveal flex flex-1 flex-col gap-6 p-6 sm:p-8">
              <p className="eyebrow flex items-center justify-between gap-4">
                <span className="text-primary">{system.id}</span>
                <span className="text-right text-muted-foreground">{system.tag}</span>
              </p>
              <div className="flex flex-col gap-3">
                <h3 className="font-display text-xl font-semibold leading-snug text-balance">{system.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground text-pretty">{system.summary}</p>
              </div>
              <Readout rows={system.readout} />
              <div className="mt-auto">
                <Tags items={system.stack} />
              </div>
            </div>
          </article>
        ))}

        <div className="flex flex-col bg-background lg:col-span-2">
          <div className="reveal flex flex-1 flex-col gap-6 p-6 sm:p-8">
            <p className="eyebrow flex items-center justify-between gap-4">
              <span className="text-primary">Archive</span>
              <span className="text-muted-foreground">Earlier builds</span>
            </p>
            <ul className="flex flex-col border-t border-border">
              {earlierBuilds.map((build) => (
                <li
                  key={build.title}
                  className="grid gap-3 border-b border-border py-4 sm:grid-cols-[13rem_minmax(0,1fr)] sm:gap-6"
                >
                  <h3 className="font-medium leading-snug">{build.title}</h3>
                  <div className="flex flex-col gap-3">
                    <p className="text-sm leading-relaxed text-muted-foreground text-pretty">{build.summary}</p>
                    <Tags items={build.stack} />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  )
}
