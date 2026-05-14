import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Mail, Sparkles } from "lucide-react"
import { HolographicAvatar } from "./holographic-avatar"

export function Hero() {
  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      {/* Gradient Orbs */}
      <div className="absolute top-20 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">
          {/* Holographic Avatar */}
          <div className="order-1 lg:order-2">
            <HolographicAvatar />
          </div>

          {/* Content */}
          <div className="max-w-2xl text-center lg:text-left space-y-8 order-2 lg:order-1">
            <Badge className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
              <Sparkles className="w-3 h-3 mr-2" />
              Open to Work • AI Solutions Architect
            </Badge>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-balance">
              Driving Innovation in{" "}
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Vision AI
              </span>{" "}
              &{" "}
              <span className="bg-gradient-to-r from-secondary via-accent to-primary bg-clip-text text-transparent">
                Automation
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto text-balance leading-relaxed">
              Vision AI Solutions Architect and Product Manager at UST | Building production-grade AI systems for enterprise and advancing
              cloud/edge deployments
            </p>

            <div className="flex items-center justify-center gap-2 flex-wrap">
              <Badge variant="secondary" className="bg-primary/5 border-primary/20 text-primary">
                Pharma Industry
              </Badge>
              <Badge variant="secondary" className="bg-accent/5 border-accent/20 text-accent">
                Retail Industry
              </Badge>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" asChild className="group">
                <a href="#contact">
                  <Mail className="w-4 h-4 mr-2" />
                  {"Let's Connect"}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#experience">View Experience</a>
              </Button>
            </div>

            <div className="pt-8 grid grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="space-y-1">
                <div className="text-3xl font-bold text-primary">5+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl font-bold text-accent">2</div>
                <div className="text-sm text-muted-foreground">Patents Granted</div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl font-bold text-primary">10+</div>
                <div className="text-sm text-muted-foreground">Major Projects</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
