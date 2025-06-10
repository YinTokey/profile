import { projectContent } from "@/lib/project-content"

interface ProjectContentProps {
  slug: string
}

export function ProjectContent({ slug }: ProjectContentProps) {
  const content = projectContent[slug]

  if (!content) {
    return <div>Project content not found.</div>
  }

  return (
    <div className="prose prose-lg max-w-none">
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  )
}
