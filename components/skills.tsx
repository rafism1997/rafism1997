import { Badge } from "@/components/ui/badge"
import { Code2 } from "lucide-react"

const skillCategories = [
  {
    category: "Languages & Frameworks",
    skills: ["Python", "C++", "PyTorch", "TensorFlow", "OpenCV"],
  },
  {
    category: "Cloud & DevOps",
    skills: ["Azure", "AWS", "Docker", "Kubernetes", "CI/CD"],
  },
  {
    category: "ML & AI",
    skills: ["MLOps", "Azure AI Services", "MLflow", "TensorRT", "Computer Vision"],
  },
  {
    category: "Tools & Platforms",
    skills: ["Git/GitHub", "Azure MLOps", "ROS", "NVIDIA Edge AI"],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-4 text-center">
            <Badge variant="outline" className="border-primary/50 text-primary">
              <Code2 className="w-3 h-3 mr-2" />
              Skills
            </Badge>
            <h2 className="text-4xl font-bold tracking-tight">Technical Expertise</h2>
            <p className="text-muted-foreground text-lg">{"Comprehensive tech stack for enterprise AI solutions"}</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="group relative p-6 rounded-xl border border-primary/20 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm hover:border-primary/60 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 overflow-hidden"
              >
                {/* Animated gradient background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full opacity-50 group-hover:opacity-100 transition-opacity" />

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    <h3 className="text-lg font-semibold text-foreground">{category.category}</h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30 hover:from-primary/30 hover:to-secondary/30 hover:scale-105 hover:shadow-md hover:shadow-primary/20 transition-all duration-200 text-foreground font-medium"
                        style={{
                          animationDelay: `${skillIndex * 50}ms`,
                        }}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
