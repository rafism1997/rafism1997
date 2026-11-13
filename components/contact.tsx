import { ArrowUpRight, Github, Languages, Linkedin, Mail, MapPin, Phone, type LucideIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Section } from "@/components/section"
import { profile } from "@/lib/site-data"
import { cn } from "@/lib/utils"

type Channel = {
  icon: LucideIcon
  label: string
  value: string
  href?: string
  external?: boolean
}

const channels: Channel[] = [
  { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: "Phone", value: profile.phone.label, href: profile.phone.href },
  { icon: Linkedin, label: "LinkedIn", value: profile.linkedin.label, href: profile.linkedin.href, external: true },
  { icon: Github, label: "GitHub", value: profile.github.label, href: profile.github.href, external: true },
  { icon: MapPin, label: "Location", value: profile.location },
  { icon: Languages, label: "Languages", value: profile.languages.join(" · ") },
]

const rowClass = "grid grid-cols-[1.25rem_minmax(0,1fr)_1rem] items-center gap-4 py-4"

function ChannelText({ label, value }: Pick<Channel, "label" | "value">) {
  return (
    <span className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-6">
      <span className="eyebrow shrink-0 text-muted-foreground sm:w-24">{label}</span>
      <span className="font-medium wrap-anywhere">{value}</span>
    </span>
  )
}

export function Contact() {
  return (
    <Section
      id="contact"
      index="06"
      label="Contact"
      title="Let's build the next system."
      description="Open to opportunities in AI and ML engineering. Email and LinkedIn are the fastest ways to reach me."
    >
      <div className="grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
        <div className="reveal flex flex-col items-start gap-7">
          <p className="text-xl leading-relaxed text-pretty">
            Have an agentic workflow, a RAG platform or a vision system that needs to reach production? I would like to
            hear about it.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg">
              <a href={`mailto:${profile.email}`}>
                <Mail aria-hidden="true" />
                Send an email
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href={profile.linkedin.href} target="_blank" rel="noopener noreferrer">
                <Linkedin aria-hidden="true" />
                Connect on LinkedIn
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            </Button>
          </div>
        </div>

        <ul className="reveal flex flex-col border-t border-border">
          {channels.map((channel) => {
            const Icon = channel.icon
            return (
              <li key={channel.label} className="border-b border-border">
                {channel.href ? (
                  <a
                    href={channel.href}
                    target={channel.external ? "_blank" : undefined}
                    rel={channel.external ? "noopener noreferrer" : undefined}
                    className={cn(rowClass, "group transition-colors hover:text-primary")}
                  >
                    <Icon
                      aria-hidden="true"
                      className="size-4 text-muted-foreground transition-colors group-hover:text-primary"
                    />
                    <ChannelText label={channel.label} value={channel.value} />
                    <ArrowUpRight
                      aria-hidden="true"
                      className="size-4 text-muted-foreground transition-[color,transform] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
                    />
                    {channel.external ? <span className="sr-only">(opens in a new tab)</span> : null}
                  </a>
                ) : (
                  <div className={rowClass}>
                    <Icon aria-hidden="true" className="size-4 text-muted-foreground" />
                    <ChannelText label={channel.label} value={channel.value} />
                  </div>
                )}
              </li>
            )
          })}
        </ul>
      </div>
    </Section>
  )
}
