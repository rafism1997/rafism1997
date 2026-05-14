import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap } from "lucide-react"

const education = [
  {
    degree: "BTech in Electrical and Electronics Engineering",
    institution: "Government Engineering College Barton Hill",
    period: "2016 – 2020",
    gpa: "8.0/10",
  },
  {
    degree: "Higher Secondary School",
    institution: "Sarvodaya Central Vidyalaya",
    period: "2013 – 2015",
    gpa: "8.8/10",
  },
]

export function Education() {
  return (
    <section id="education" className="py-24 relative bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-4">
            <Badge variant="outline" className="border-primary/50 text-primary">
              <GraduationCap className="w-3 h-3 mr-2" />
              Education
            </Badge>
            <h2 className="text-4xl font-bold tracking-tight">Academic Background</h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <Card key={index} className="border-border/50 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-lg">{edu.degree}</CardTitle>
                  <CardDescription className="text-sm">{edu.institution}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">{edu.period}</span>
                    <Badge variant="secondary">GPA: {edu.gpa}</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
