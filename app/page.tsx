import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Experience } from "@/components/experience"
import { Projects } from "@/components/projects"
import { Skills } from "@/components/skills"
import { Education } from "@/components/education"
import { Achievements } from "@/components/achievements"
import { Contact } from "@/components/contact"
import { IntroAnimation } from "@/components/intro-animation"

export default function Home() {
  return (
    <div className="min-h-screen">
      <IntroAnimation />
      <Header />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Achievements />
        <Contact />
      </main>
      <footer className="border-t border-border/50 py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Rafi Shaik Mohammed. All rights reserved.
          </p>
          <p className="text-muted-foreground text-xs mt-2">Built with Next.js and deployed on Vercel</p>
        </div>
      </footer>
    </div>
  )
}
