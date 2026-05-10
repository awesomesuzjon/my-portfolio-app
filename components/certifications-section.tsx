"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Award, Calendar } from "lucide-react"

interface Certification {
  id: string
  title: string
  issuer: string
  date: string
  credentialUrl: string
  description: string
  skills: string[]
}

const certifications: Certification[] = [
  {
    id: "1",
    title: "AWS Certified DevOps Engineer Professional",
    issuer: "Udemy",
    date: "2024",
    credentialUrl: "https://udemy.com/certificate/UC-7fc1d4a4-99fc-4e19-9ed6-39310776b113",
    description: "Professional certification covering advanced AWS DevOps practices, CI/CD pipelines, monitoring, and infrastructure automation.",
    skills: ["AWS", "DevOps", "CI/CD", "Infrastructure as Code", "Monitoring", "Automation"]
  }
]

export function CertificationsSection() {
  return (
    <section id="certifications" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">Certifications</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional certifications that validate my expertise and commitment to continuous learning in cloud technologies and DevOps practices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert) => (
            <Card
              key={cert.id}
              className="group cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-card/50 backdrop-blur-sm border-accent/20"
            >
              <CardHeader>
                <div className="flex items-center gap-2 mb-3">
                  <Award className="h-6 w-6 text-accent" />
                  <Badge className="bg-accent/20 text-accent border-accent/30">
                    {cert.issuer}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                  {cert.title}
                </CardTitle>
                <CardDescription className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  {cert.date}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {cert.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="text-xs px-2 py-1 bg-muted text-muted-foreground"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  className="w-full hover:bg-accent hover:text-accent-foreground transition-colors bg-transparent"
                  asChild
                >
                  <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Certificate
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Achievement Summary */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-accent/10 to-secondary/10 border-accent/20 inline-block">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <Award className="h-8 w-8 text-accent" />
                <div className="text-left">
                  <h3 className="text-lg font-semibold text-foreground">Continuous Learning</h3>
                  <p className="text-muted-foreground">
                    Committed to staying current with industry best practices and emerging technologies
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}