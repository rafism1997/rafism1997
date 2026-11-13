import { ArrowUp } from "lucide-react"
import { profile } from "@/lib/site-data"

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 font-mono text-xs uppercase tracking-[0.1em] text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>{`© ${new Date().getFullYear()} ${profile.name}`}</p>
        <p>Built with Next.js, deployed on Vercel</p>
        <a href="#top" className="flex items-center gap-2 transition-colors hover:text-primary">
          Back to top
          <ArrowUp aria-hidden="true" className="size-3.5" />
        </a>
      </div>
    </footer>
  )
}
