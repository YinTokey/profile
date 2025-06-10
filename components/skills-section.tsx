"use client"

import { skillCategories } from "@/lib/data"

export function SkillsSection() {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Skills & Technologies</h2>
          <p className="text-lg text-muted-foreground">My technical expertise across different domains</p>
        </div>

        <div className="space-y-12">
          {skillCategories.map((category) => (
            <div key={category.name} className="space-y-6">
              <h3 className="text-xl font-semibold text-center">{category.name}</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="px-4 py-2 bg-background text-foreground rounded-full text-sm font-medium border hover:shadow-sm transition-all duration-200 hover:scale-105"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
