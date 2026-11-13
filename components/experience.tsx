import { ExperienceConsole } from "@/components/experience-console"
import { Section } from "@/components/section"

export function Experience() {
  return (
    <Section
      id="experience"
      index="03"
      label="Experience"
      title="From edge hardware to agentic AI, across three roles at UST."
      description="Select a role to read its full record, grouped by work stream."
    >
      <ExperienceConsole />
    </Section>
  )
}
