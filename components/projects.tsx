import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Lightbulb, Target, Zap } from "lucide-react"

const projects = [
  {
    title: "Vision AI Product Development",
    description: "Modular pipeline for training, evaluation, and deployment of YOLOv8/TF/PyTorch models",
    highlights: [
      "CI/CD automation with model registry and A/B rollout",
      "ONNX/TensorRT optimization for edge inference",
      "Real-time dashboards with 97%+ detection accuracy",
    ],
    icon: Target,
    gradient: "from-primary to-secondary",
  },
  {
    title: "POS Device Troubleshooting",
    description: "Vision AI tool for improving POS operator resolution time in live support",
    highlights: [
      "Computer vision-based diagnostics",
      "Real-time issue detection and guidance",
      "Reduced average resolution time significantly",
    ],
    icon: Zap,
    gradient: "from-secondary to-accent",
  },
  {
    title: "Conversational Metahuman",
    description: "NLP-based photorealistic metahuman with GPT-3 integration",
    highlights: [
      "Built with Unreal Engine and OpenAI GPT-3",
      "Interactive enterprise support and training",
      "Natural language understanding and responses",
    ],
    icon: Lightbulb,
    gradient: "from-accent to-primary",
  },
  {
    title: "Tea Leaf Disease Detection",
    description: "Multi-class YOLOv9 model for agricultural disease classification",
    highlights: [
      "95% precision, 96% recall, 95.5% F1-score, 94.8% mAP@0.5",
      "Real-time disease detection and classification",
      "Deployed for agricultural monitoring",
    ],
    icon: Target,
    gradient: "from-primary to-accent",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-24 relative bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="space-y-4 text-center">
            <Badge variant="outline" className="border-primary/50 text-primary">
              <Lightbulb className="w-3 h-3 mr-2" />
              Projects
            </Badge>
            <h2 className="text-4xl font-bold tracking-tight">Featured Projects</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {"Production-grade AI systems deployed across enterprise environments"}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => {
              const Icon = project.icon
              return (
                <Card
                  key={index}
                  className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all group"
                >
                  <CardHeader>
                    <div
                      className={`w-12 h-12 rounded-lg bg-gradient-to-br ${project.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                    >
                      <Icon className="w-6 h-6 text-background" />
                    </div>
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <CardDescription className="text-base">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {project.highlights.map((highlight, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-primary mt-1">▸</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
