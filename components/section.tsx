import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

type SectionProps = {
  id: string
  index: string
  label: string
  title: string
  description?: string
  className?: string
  children: ReactNode
}

export function Section({ id, index, label, title, description, className, children }: SectionProps) {
  const titleId = `${id}-title`

  return (
    <section id={id} aria-labelledby={titleId} className={cn("scroll-mt-16 py-16 sm:py-24", className)}>
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-5 sm:px-8 lg:gap-16">
        <div className="reveal flex flex-col gap-5 border-t border-border pt-6 lg:flex-row lg:gap-16">
          <p className="eyebrow shrink-0 text-muted-foreground lg:w-44">
            <span className="text-primary">{index}</span>
            <span aria-hidden="true" className="px-2 text-muted-foreground/50">
              /
            </span>
            {label}
          </p>
          <div className="flex max-w-3xl flex-col gap-4">
            <h2
              id={titleId}
              className="font-display text-3xl font-semibold leading-[1.1] text-balance sm:text-4xl lg:text-[2.75rem]"
            >
              {title}
            </h2>
            {description ? (
              <p className="max-w-2xl leading-relaxed text-muted-foreground text-pretty sm:text-lg">{description}</p>
            ) : null}
          </div>
        </div>
        {children}
      </div>
    </section>
  )
}
