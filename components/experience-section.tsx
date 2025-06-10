import { Card, CardContent } from "@/components/ui/card"
import { workExperience } from "@/lib/data"
import Image from "next/image"

export function ExperienceSection() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 id="experience-heading" className="text-3xl font-bold mb-4">Work Experience</h2>
          <p className="text-lg text-muted-foreground">My professional journey and key achievements</p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border"></div>

          <div className="space-y-8">
            {workExperience.map((job, index) => (
              <div key={index} className="relative flex items-start gap-6">
                {/* Timeline dot and company logo */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-16 h-16 bg-background border-4 border-primary rounded-full flex items-center justify-center">
                    <Image
                      src={job.companyLogo || "/placeholder.svg"}
                      alt={`${job.company} logo`}
                      width={32}
                      height={32}
                      quality={90}
                      className="w-8 h-8 object-contain"
                    />
                  </div>
                </div>

                {/* Content */}
                <Card className="flex-1">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-xl font-semibold">{job.position}</h3>
                      <span className="text-sm text-muted-foreground">{job.period}</span>
                    </div>
                    <p className="text-primary font-medium mb-4">{job.company}</p>
                    
                    {/* Render description as markdown-style list */}
                    <div className="mb-6">
                      <ul className="space-y-3">
                        {job.description.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <p className="text-foreground/90 leading-relaxed">{item}</p>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {job.technologies.map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
