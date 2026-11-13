import { Section } from "@/components/section"
import { StackExplorer } from "@/components/stack-explorer"

export function Stack() {
  return (
    <Section
      id="stack"
      index="04"
      label="Stack"
      title="The full technical stack."
      description="Every language, platform and device I work with, grouped by category. Filter it to check for a specific technology."
    >
      <StackExplorer />
    </Section>
  )
}
