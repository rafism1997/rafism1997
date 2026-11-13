import { Badge } from "@/components/ui/badge"
import { Section } from "@/components/section"
import { award, certifications, education, patents } from "@/lib/site-data"
import { cn } from "@/lib/utils"

export function Credentials() {
  return (
    <Section id="credentials" index="05" label="Credentials" title="Patents, recognition and training.">
      <div className="reveal grid gap-px border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
        {patents.map((patent) => (
          <article key={patent.number} className="flex flex-col gap-6 bg-background p-6 sm:p-8">
            <p className="eyebrow flex items-center justify-between gap-4">
              <span className="text-signal">Patent</span>
              <span className="text-muted-foreground">{patent.region}</span>
            </p>
            <div className="flex flex-col gap-3">
              <h3 className="font-display text-2xl font-semibold leading-tight">
                <span className="sr-only">{`${patent.kind}, number `}</span>
                {patent.number}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground text-pretty">{patent.title}</p>
            </div>
            <dl className="mt-auto flex flex-col border-t border-border font-mono text-xs">
              <div className="flex justify-between gap-4 border-b border-border py-2.5">
                <dt className="uppercase tracking-wider text-muted-foreground">Type</dt>
                <dd className="text-right">{patent.kind}</dd>
              </div>
              <div className="flex justify-between gap-4 border-b border-border py-2.5">
                <dt className="uppercase tracking-wider text-muted-foreground">Issued</dt>
                <dd className="text-right">{patent.issued}</dd>
              </div>
              {patent.term ? (
                <div className="flex justify-between gap-4 border-b border-border py-2.5">
                  <dt className="uppercase tracking-wider text-muted-foreground">Term</dt>
                  <dd className="text-right">{patent.term}</dd>
                </div>
              ) : null}
            </dl>
          </article>
        ))}

        <article className="flex flex-col gap-6 bg-background p-6 sm:p-8">
          <p className="eyebrow flex items-center justify-between gap-4">
            <span className="text-signal">Award</span>
            <span className="text-muted-foreground">UST</span>
          </p>
          <div className="flex flex-col gap-3">
            <h3 className="font-display text-2xl font-semibold leading-tight">{award.title}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">{award.program}</p>
          </div>
          <p className="mt-auto border-t border-border pt-4 text-sm leading-relaxed text-muted-foreground text-pretty">
            {award.description}
          </p>
        </article>

        <article className="flex flex-col gap-6 bg-background p-6 sm:p-8">
          <p className="eyebrow text-primary">Education</p>
          <ul className="flex flex-col gap-5">
            {education.map((item, index) => (
              <li key={item.degree} className={cn("flex flex-col gap-1.5", index > 0 && "border-t border-border pt-5")}>
                <h3 className={cn("font-medium leading-snug", index > 0 && "text-sm")}>{item.degree}</h3>
                <p className="text-sm text-muted-foreground">{item.school}</p>
                <p className="font-mono text-xs text-muted-foreground">{`${item.period} · ${item.score}`}</p>
              </li>
            ))}
          </ul>
        </article>

        <article className="flex flex-col gap-6 bg-background p-6 sm:p-8 md:col-span-2">
          <p className="eyebrow text-primary">Training and certifications</p>
          <ul className="flex flex-col border-t border-border">
            {certifications.map((certification) => (
              <li
                key={certification.name}
                className="flex flex-col items-start gap-2 border-b border-border py-3.5 sm:flex-row sm:items-center sm:justify-between sm:gap-6"
              >
                <div className="flex flex-col gap-1">
                  <h3 className="font-medium leading-snug">{certification.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {certification.note ? `${certification.issuer} · ${certification.note}` : certification.issuer}
                  </p>
                </div>
                {certification.inProgress ? (
                  <Badge
                    variant="outline"
                    className="border-signal/50 font-mono text-[11px] uppercase tracking-wider text-signal"
                  >
                    In progress
                  </Badge>
                ) : null}
              </li>
            ))}
          </ul>
        </article>
      </div>
    </Section>
  )
}
