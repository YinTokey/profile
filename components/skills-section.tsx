"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronDown, ChevronRight } from "lucide-react"
import { skillCategories } from "@/lib/data"

export function SkillsSection() {
  const [expandedCategories, setExpandedCategories] = useState<string[]>(["Frontend"])

  const toggleCategory = (category: string) => {
    setExpandedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category],
    )
  }

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Skills & Technologies</h2>
          <p className="text-lg text-muted-foreground">My technical expertise across different domains</p>
        </div>

        <div className="space-y-4">
          {skillCategories.map((category) => {
            const isExpanded = expandedCategories.includes(category.name)

            return (
              <Card key={category.name} className="overflow-hidden">
                <CardHeader
                  className="cursor-pointer hover:bg-muted/50 transition-colors"
                  onClick={() => toggleCategory(category.name)}
                >
                  <CardTitle className="flex items-center justify-between">
                    <span>{category.name}</span>
                    {isExpanded ? <ChevronDown className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
                  </CardTitle>
                </CardHeader>

                {isExpanded && (
                  <CardContent className="pt-0">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                      {category.skills.map((skill) => (
                        <div
                          key={skill.name}
                          className="flex flex-col items-center p-4 bg-background rounded-lg hover:shadow-sm transition-shadow"
                        >
                          <div className="w-12 h-12 mb-2 flex items-center justify-center">
                            <img
                              src={skill.icon || "/placeholder.svg"}
                              alt={skill.name}
                              className="w-8 h-8 object-contain"
                            />
                          </div>
                          <span className="text-sm font-medium text-center">{skill.name}</span>
                          <div className="w-full bg-muted rounded-full h-2 mt-2">
                            <div
                              className="bg-primary h-2 rounded-full transition-all duration-300"
                              style={{ width: `${skill.level}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                )}
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
