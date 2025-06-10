import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import { MapPin } from "lucide-react"
import { education } from "@/lib/data"

export function EducationSection() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 id="education-heading" className="text-3xl font-bold mb-4">Education</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {education.map((edu, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden">
                    <Image
                      src={`/images/sections/education/${edu.institution.toLowerCase().includes('carleton') ? 'carleton' : 'fafu'}.${edu.institution.toLowerCase().includes('carleton') ? 'jpeg' : 'png'}`}
                      alt={`${edu.institution} logo`}
                      width={48}
                      height={48}
                      className="object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-lg">{edu.degree}</CardTitle>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                      <p className="text-primary font-medium">{edu.institution}</p>
                      <div className="flex items-center gap-1 text-muted-foreground text-sm mt-1 sm:mt-0">
                        <MapPin className="h-3 w-3" />
                        <span>{edu.location}</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">{edu.period}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                {/* Removed the redundant location display since it's now in the header */}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
