"use client"

import { useRef } from "react"
import * as Tabs from "@radix-ui/react-tabs"
import { experience } from "@/lib/site-data"

export function ExperienceConsole() {
  const rootRef = useRef<HTMLDivElement>(null)

  // Roles differ a lot in length, so switching while deep in one panel returns to the top of the console.
  const keepConsoleInView = () => {
    const root = rootRef.current
    if (root && root.getBoundingClientRect().top < 0) {
      root.scrollIntoView({ block: "start" })
    }
  }

  return (
    <Tabs.Root
      ref={rootRef}
      defaultValue={experience[0].id}
      orientation="vertical"
      onValueChange={keepConsoleInView}
      className="grid scroll-mt-20 border border-border lg:grid-cols-[19rem_minmax(0,1fr)]"
    >
      <div className="border-b border-border lg:border-b-0 lg:border-r">
        <Tabs.List aria-label="Roles at UST" className="flex flex-col lg:sticky lg:top-16">
          {experience.map((role) => (
            <Tabs.Trigger
              key={role.id}
              value={role.id}
              className="group relative flex flex-col items-start gap-1.5 border-b border-border px-5 py-5 text-left transition-colors last:border-b-0 hover:bg-card focus-visible:-outline-offset-2 data-[state=active]:bg-card lg:last:border-b"
            >
              <span
                aria-hidden="true"
                className="absolute inset-y-0 left-0 w-0.5 bg-primary opacity-0 transition-opacity group-data-[state=active]:opacity-100"
              />
              <span className="eyebrow text-muted-foreground transition-colors group-data-[state=active]:text-primary">
                {role.period}
              </span>
              <span className="font-medium leading-snug">{role.title}</span>
              <span className="text-sm text-muted-foreground">
                {role.company}, {role.location}
              </span>
            </Tabs.Trigger>
          ))}
        </Tabs.List>
      </div>

      {experience.map((role) => (
        <Tabs.Content
          key={role.id}
          value={role.id}
          forceMount
          className="flex flex-col gap-8 p-6 focus-visible:-outline-offset-2 data-[state=inactive]:hidden sm:p-8 lg:col-start-2 lg:p-10"
        >
          <div className="flex flex-col gap-3">
            <p className="eyebrow text-muted-foreground">
              {role.company}
              <span aria-hidden="true" className="px-2 text-muted-foreground/50">
                /
              </span>
              {role.location}
              <span aria-hidden="true" className="px-2 text-muted-foreground/50">
                /
              </span>
              {role.period}
            </p>
            <h3 className="font-display text-2xl font-semibold leading-tight text-balance sm:text-3xl">{role.title}</h3>
            <p className="max-w-2xl leading-relaxed text-muted-foreground text-pretty">{role.summary}</p>
          </div>

          {role.groups.map((group) => (
            <div key={group.title} className="flex flex-col gap-4 border-t border-border pt-6">
              <h4 className="eyebrow flex items-center justify-between gap-4 text-primary">
                {group.title}
                <span aria-hidden="true" className="text-muted-foreground">
                  {String(group.points.length).padStart(2, "0")}
                </span>
              </h4>
              <ul className="flex flex-col gap-3.5">
                {group.points.map((point) => (
                  <li key={point} className="grid grid-cols-[0.875rem_minmax(0,1fr)] gap-3">
                    <span aria-hidden="true" className="mt-[0.7em] h-px w-full bg-primary/70" />
                    <span className="text-[0.9375rem] leading-relaxed text-foreground/85 text-pretty">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </Tabs.Content>
      ))}
    </Tabs.Root>
  )
}
