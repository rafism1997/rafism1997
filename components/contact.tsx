import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin, Linkedin, Globe } from "lucide-react"

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "+1-(949)-750-5403",
    href: "tel:+19497505403",
  },
  {
    icon: Mail,
    label: "Email",
    value: "rafism1997@gmail.com",
    href: "mailto:rafism1997@gmail.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Mission Viejo, CA 92691",
    href: null,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Connect on LinkedIn",
    href: "https://www.linkedin.com/in/s-m-rafi-911442130/",
  },
]

const languages = ["English", "Malayalam", "Hindi"]

export function Contact() {
  return (
    <section id="contact" className="py-24 relative bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-4 text-center">
            <Badge variant="outline" className="border-primary/50 text-primary">
              <Mail className="w-3 h-3 mr-2" />
              Contact
            </Badge>
            <h2 className="text-4xl font-bold tracking-tight">{"Let's Connect"}</h2>
            <p className="text-muted-foreground text-lg">{"Open to exciting opportunities in AI and ML engineering"}</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon
              return (
                <Card key={index} className="border-border/50 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6">
                    {info.href ? (
                      <a
                        href={info.href}
                        target={info.href.startsWith("http") ? "_blank" : undefined}
                        rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="flex items-start gap-4 group"
                      >
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                          <Icon className="w-5 h-5 text-background" />
                        </div>
                        <div className="flex-1">
                          <div className="text-sm text-muted-foreground">{info.label}</div>
                          <div className="font-medium text-foreground group-hover:text-primary transition-colors">
                            {info.value}
                          </div>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                          <Icon className="w-5 h-5 text-background" />
                        </div>
                        <div className="flex-1">
                          <div className="text-sm text-muted-foreground">{info.label}</div>
                          <div className="font-medium text-foreground">{info.value}</div>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent to-primary flex items-center justify-center flex-shrink-0">
                  <Globe className="w-5 h-5 text-background" />
                </div>
                <div className="flex-1">
                  <div className="text-sm text-muted-foreground mb-3">Languages</div>
                  <div className="flex flex-wrap gap-2">
                    {languages.map((language) => (
                      <Badge key={language} variant="secondary">
                        {language}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center">
            <Button size="lg" asChild className="group">
              <a href="mailto:rafism1997@gmail.com">
                <Mail className="w-4 h-4 mr-2" />
                Send Email
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
