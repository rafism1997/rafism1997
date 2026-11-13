import type { CSSProperties } from "react"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { metrics, profile } from "@/lib/site-data"

const stagger = (step: number) => ({ "--i": step }) as CSSProperties

const readout = [
  { label: "Role", value: `${profile.roles[0]}, ${profile.company}` },
  { label: "Base", value: profile.location },
  { label: "Focus", value: profile.focus.join(" · ") },
]

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="relative isolate overflow-hidden pt-28 lg:pt-36">
      <div aria-hidden="true" className="grid-backdrop absolute inset-0 -z-10" />
      <div
        aria-hidden="true"
        className="absolute -left-24 top-16 -z-10 size-[30rem] rounded-full bg-primary/10 blur-3xl"
      />

      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
        <div className="flex flex-col gap-7">
          <p className="rise eyebrow flex items-center gap-2.5 text-muted-foreground" style={stagger(0)}>
            <span aria-hidden="true" className="relative flex size-2">
              <span className="absolute inline-flex size-full rounded-full bg-signal opacity-70 motion-safe:animate-ping" />
              <span className="relative inline-flex size-2 rounded-full bg-signal" />
            </span>
            {profile.status}
          </p>

          <div className="flex flex-col gap-4">
            <p className="rise eyebrow text-primary" style={stagger(1)}>
              {profile.roles.join(" / ")}
            </p>
            <h1
              id="hero-title"
              className="rise font-display text-[length:clamp(2.4rem,12vw,3rem)] font-semibold leading-[0.98] sm:text-6xl lg:text-7xl"
              style={stagger(2)}
            >
              <span className="block">Rafi Shaik</span>
              <span className="block">Mohammed</span>
            </h1>
          </div>

          <p className="rise max-w-xl text-xl leading-snug text-balance sm:text-2xl sm:leading-snug" style={stagger(3)}>
            {profile.headline}
          </p>

          <p className="rise max-w-xl leading-relaxed text-muted-foreground text-pretty" style={stagger(4)}>
            {profile.intro}
          </p>

          <div className="rise flex flex-wrap items-center gap-3" style={stagger(5)}>
            <Button asChild size="lg">
              <a href="#contact">
                Start a conversation
                <ArrowRight aria-hidden="true" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="#systems">View systems</a>
            </Button>
          </div>
        </div>

        <figure className="rise hud-corners mx-auto w-full max-w-sm lg:order-first lg:max-w-none" style={stagger(2)}>
          <div className="relative aspect-[4/5] overflow-hidden bg-card">
            <Image
              src="/images/rafi-shaik-mohammed.webp"
              alt="Rafi Shaik Mohammed outdoors in a navy quarter-zip, glancing to the side with a slight smile"
              width={880}
              height={1100}
              preload
              sizes="(min-width: 1024px) 430px, (min-width: 640px) 384px, 92vw"
              className="size-full object-cover saturate-[0.9] contrast-[1.04]"
            />
            <div aria-hidden="true" className="scanline" />
            <div
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-background via-background/70 to-transparent"
            />
            <p
              aria-hidden="true"
              className="eyebrow absolute left-3 top-3 border border-border bg-background/70 px-2 py-1 backdrop-blur-sm"
            >
              Fig. 01
            </p>
            <figcaption className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
              <dl className="flex flex-col gap-1.5 font-mono text-xs">
                {readout.map((row) => (
                  <div key={row.label} className="grid grid-cols-[3.5rem_minmax(0,1fr)] gap-3">
                    <dt className="uppercase tracking-[0.16em] text-primary">{row.label}</dt>
                    <dd>{row.value}</dd>
                  </div>
                ))}
              </dl>
            </figcaption>
          </div>
        </figure>
      </div>

      <div className="mx-auto mt-16 max-w-6xl px-5 sm:px-8 lg:mt-24">
        <dl
          className="rise grid grid-cols-2 gap-px border-y border-border bg-border lg:grid-cols-4"
          style={stagger(6)}
        >
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="flex flex-col-reverse justify-end gap-3 bg-background px-4 py-6 sm:px-6 sm:py-8"
            >
              <dt className="text-sm leading-relaxed text-muted-foreground text-pretty">{metric.label}</dt>
              <dd className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                <span className="font-display text-3xl font-semibold sm:text-4xl">{metric.value}</span>
                <span className="font-mono text-xs uppercase tracking-[0.16em] text-primary">{metric.unit}</span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
