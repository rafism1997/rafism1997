import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, FileText, Trophy } from "lucide-react"

export function Achievements() {
  return (
    <section id="achievements" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-4">
            <Badge variant="outline" className="border-primary/50 text-primary">
              <Award className="w-3 h-3 mr-2" />
              Achievements
            </Badge>
            <h2 className="text-4xl font-bold tracking-tight">Patents & Awards</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
                  <FileText className="w-6 h-6 text-background" />
                </div>
                <CardTitle className="text-xl">US Design Patent</CardTitle>
                <CardDescription>Patent Number: US D1,004,400 S</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  {"Live hinge formed from a rigid material by selective material removal"}
                </p>
                <Badge variant="secondary" className="mt-2">
                  Issued: November 14, 2023
                </Badge>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-secondary to-accent flex items-center justify-center mb-4">
                  <FileText className="w-6 h-6 text-background" />
                </div>
                <CardTitle className="text-xl">Indian Patent</CardTitle>
                <CardDescription>Patent Number: 354819-001</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  {"Balance between rigidity and flexibility using selective material retention"}
                </p>
                <Badge variant="secondary" className="mt-2">
                  Issued: February 1, 2022
                </Badge>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all md:col-span-2">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent to-primary flex items-center justify-center mb-4">
                  <Trophy className="w-6 h-6 text-background" />
                </div>
                <CardTitle className="text-xl">Top Performer</CardTitle>
                <CardDescription>Aspiring Leaders Program</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {"Recognized as a top performer in UST Global's worldwide Aspiring Leaders Program"}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
