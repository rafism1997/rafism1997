import { Section } from "@/components/section"
import { about } from "@/lib/site-data"

const pad = (value: number) => String(value).padStart(2, "0")

export function Profile() {
  const [lead, ...rest] = about.paragraphs

  return (
    <Section id="profile" index="01" label="Profile" title="From research prototype to production system.">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-16">
        <div className="reveal flex flex-col gap-6">
          <p className="text-xl leading-relaxed text-pretty sm:text-2xl sm:leading-relaxed">{lead}</p>
          {rest.map((paragraph) => (
            <p key={paragraph} className="leading-relaxed text-muted-foreground text-pretty">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="reveal flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <h3 className="eyebrow text-muted-foreground">Domains</h3>
            <ul className="grid grid-cols-2 gap-px border border-border bg-border">
              {about.domains.map((domain, index) => (
                <li key={domain} className="flex flex-col gap-2 bg-background p-4">
                  <span aria-hidden="true" className="font-mono text-xs text-primary">
                    {pad(index + 1)}
                  </span>
                  <span className="font-medium">{domain}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="eyebrow text-muted-foreground">MLOps platforms</h3>
            <dl className="flex flex-col border-t border-border">
              {about.platforms.map((platform) => (
                <div
                  key={platform.name}
                  className="grid grid-cols-[6.5rem_minmax(0,1fr)] gap-4 border-b border-border py-3"
                >
                  <dt className="font-medium">{platform.name}</dt>
                  <dd className="text-sm leading-relaxed text-muted-foreground">{platform.services.join(" · ")}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      <div className="reveal flex flex-col gap-4">
        <h3 className="eyebrow text-muted-foreground">ML lifecycle coverage, end to end</h3>
        <ol className="grid border border-border sm:grid-cols-5">
          {about.lifecycle.map((stage, index) => (
            <li
              key={stage}
              className="flex items-center gap-4 border-b border-border p-4 last:border-b-0 sm:flex-col sm:items-start sm:gap-6 sm:border-b-0 sm:border-r sm:last:border-r-0"
            >
              <span aria-hidden="true" className="font-mono text-xs text-primary">
                {pad(index + 1)}
              </span>
              <span className="text-sm font-medium leading-snug">{stage}</span>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  )
}
