import { Contact } from "@/components/contact"
import { Credentials } from "@/components/credentials"
import { Experience } from "@/components/experience"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Profile } from "@/components/profile"
import { Stack } from "@/components/stack"
import { Systems } from "@/components/systems"

export default function Home() {
  return (
    <div className="min-h-screen">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-primary focus:px-4 focus:py-2 focus:font-mono focus:text-sm focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Profile />
        <Systems />
        <Experience />
        <Stack />
        <Credentials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
