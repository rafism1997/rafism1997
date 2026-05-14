import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Calendar } from "lucide-react"

const experiences = [
  {
    title: "Vision AI Solutions Architect and Product Manager",
    company: "UST",
    location: "Alpharetta, GA",
    period: "Feb 2024 – Present",
    highlights: [
      "Leading Vision AI Product Solutions for enterprise clients across Pharma, Retail, and Manufacturing",
      "Architected on-prem AI deployment pipelines with Azure MLOps and AWS frameworks",
      "Interfaced ML models with NVIDIA/TensorRT edge devices",
      "Achieved 97%+ model accuracy using reinforcement learning",
    ],
    tags: ["Vision AI", "MLOps", "Azure", "TensorRT"],
  },
  {
    title: "Software Developer III",
    company: "UST",
    location: "Alpharetta, GA",
    period: "Oct 2023 – Feb 2024",
    highlights: [
      "Designed and ran MLOps pipelines for computer vision models using Azure",
      "Monitored and tuned deployed models, improving inference time",
      "Automated rollout for heterogeneous edge environments",
    ],
    tags: ["MLOps", "Computer Vision", "Azure", "CI/CD"],
  },
  {
    title: "Software Developer II",
    company: "UST",
    location: "Trivandrum, India",
    period: "Jan 2021 – Oct 2023",
    highlights: [
      "Developed AMRs for warehouse management in ROS (RTAB-Map, RRT)",
      "Deployed AWS RoboMaker/Azure IoT Hub for fleet management",
      "Enhanced vision AI on edge for object detection and tracking",
    ],
    tags: ["ROS", "Robotics", "AWS", "IoT"],
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-4">
            <Badge variant="outline" className="border-primary/50 text-primary">
              <Briefcase className="w-3 h-3 mr-2" />
              Experience
            </Badge>
            <h2 className="text-4xl font-bold tracking-tight">Work Experience</h2>
            <p className="text-muted-foreground text-lg">{"5+ years driving AI innovation from edge to cloud"}</p>
          </div>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all"
              >
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                    <div className="space-y-1">
                      <CardTitle className="text-xl">{exp.title}</CardTitle>
                      <CardDescription className="text-base">
                        {exp.company} • {exp.location}
                      </CardDescription>
                    </div>
                    <Badge variant="secondary" className="w-fit">
                      <Calendar className="w-3 h-3 mr-1" />
                      {exp.period}
                    </Badge>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {exp.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1">▸</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
