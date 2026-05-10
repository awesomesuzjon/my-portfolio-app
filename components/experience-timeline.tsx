"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp, MapPin, Calendar, TrendingUp, Users, Code, Award } from "lucide-react"

interface Experience {
  id: string
  company: string
  position: string
  location: string
  startDate: string
  endDate: string
  logo: string
  description: string
  achievements: string[]
  technologies: string[]
  metrics: {
    icon: React.ReactNode
    label: string
    value: string
  }[]
  current?: boolean
}

const experiences: Experience[] = [
  {
    id: "1",
    company: "DigiPearl.io",
    position: "Frontend Engineer",
    location: "NSW, Australia",
    startDate: "Nov 2025",
    endDate: "Jan 2026",
    logo: "/digipearl.png",
    description:
        "Worked as a Frontend Engineer developing CRM and business web applications while supporting internal IT operations.",
    achievements: [
      "Developed responsive CRM and business web applications using React.js, Next.js, TypeScript, and Tailwind CSS",
      "Built reusable frontend components improving scalability and development efficiency",
      "Optimized UI rendering performance for better responsiveness",
      "Integrated frontend applications with backend services using Node.js and Express.js",
      "Supported internal IT operations using Microsoft Intune, PDQ Deploy, and Active Directory",
    ],
    technologies: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "Microsoft Intune",
      "Active Directory",
      "PDQ Deploy"
    ],
    metrics: [
      { icon: <Code className="h-4 w-4" />, label: "Role", value: "Frontend Engineer" },
      { icon: <TrendingUp className="h-4 w-4" />, label: "Focus", value: "Web Applications" },
      { icon: <Users className="h-4 w-4" />, label: "Location", value: "Australia" },
    ],
  },

  {
    id: "2",
    company: "Hamro Patro Pvt. Ltd.",
    position: "Software Engineer (Frontend Developer)",
    location: "Kathmandu, Nepal",
    startDate: "Feb 2023",
    endDate: "Mar 2024",
    logo: "/hamropatro_logo.jpeg",
    description:
        "Mid-level frontend engineer contributing to large-scale fintech and remittance platforms serving over 1M+ active users.",
    achievements: [
      "Built frontend interfaces and platform features for remittance systems supporting 1M+ users",
      "Improved frontend load performance and optimized application responsiveness",
      "Developed REST APIs and gRPC services for scalable system communication",
      "Created reusable internal npm packages to improve development workflows",
      "Worked on transaction workflows, dashboards, and financial user interfaces",
      "Collaborated with cross-functional teams to deliver scalable fintech solutions",
      "Developed E-Cards MVP using SvelteKit and Tailwind CSS",
    ],
    technologies: [
      "React.js",
      "SvelteKit",
      "JavaScript",
      "TypeScript",
      "REST APIs",
      "gRPC",
      "Node.js",
      "Tailwind CSS",
      "FinTech Systems",
      "NPM Packages"
    ],
    metrics: [
      { icon: <Users className="h-4 w-4" />, label: "User Base", value: "1M+" },
      { icon: <TrendingUp className="h-4 w-4" />, label: "Level", value: "Mid-Level Engineer" },
      { icon: <Code className="h-4 w-4" />, label: "Focus", value: "Frontend FinTech" },
    ],
  },

  {
    id: "3",
    company: "Hamro Patro Pvt. Ltd.",
    position: "Associate Software Engineer (Frontend)",
    location: "Kathmandu, Nepal",
    startDate: "Feb 2022",
    endDate: "Jan 2023",
    logo: "/hamropatro_logo.jpeg",
    description:
        "Started as an Associate Software Engineer focusing on frontend development for fintech platforms and internal web applications.",
    achievements: [
      "Developed reusable UI components using modern JavaScript frameworks",
      "Contributed to remittance platform frontend modules and dashboards",
      "Worked closely with senior engineers to implement scalable frontend architecture",
      "Improved UI consistency and component reusability across projects",
      "Participated in agile development workflows and production deployments",
    ],
    technologies: [
      "React.js",
      "JavaScript",
      "HTML",
      "CSS",
      "REST APIs",
      "Git",
      "Frontend Architecture"
    ],
    metrics: [
      { icon: <Award className="h-4 w-4" />, label: "Career Start", value: "Associate Level" },
      { icon: <TrendingUp className="h-4 w-4" />, label: "Promotion", value: "Advanced" },
      { icon: <Code className="h-4 w-4" />, label: "Focus", value: "Frontend Development" },
    ],
  },
];

export function ExperienceTimeline() {
  const [expandedExperience, setExpandedExperience] = useState<string | null>(null)

  const toggleExpanded = (id: string) => {
    setExpandedExperience(expandedExperience === id ? null : id)
  }

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">Work Experience</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A journey through my professional career, highlighting key achievements and the impact I've made at each
            organization.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border" />

          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <div key={experience.id} className="relative">
                {/* Timeline Dot */}
                <div
                  className={`absolute left-6 w-4 h-4 rounded-full border-4 ${
                    experience.current
                      ? "bg-accent border-accent shadow-lg shadow-accent/50"
                      : "bg-background border-muted-foreground"
                  } z-10`}
                />

                <div className="ml-16">
                  <Card
                    className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                      expandedExperience === experience.id ? "ring-2 ring-accent/20 shadow-lg" : ""
                    } ${experience.current ? "bg-accent/5 border-accent/20" : ""}`}
                    onClick={() => toggleExpanded(experience.id)}
                  >
                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center overflow-hidden">
                            <img
                              src={experience.logo || "/placeholder.svg?height=48&width=48"}
                              alt={`${experience.company} logo`}
                              className="w-8 h-8 object-contain"
                            />
                          </div>
                          <div>
                            <CardTitle className="text-xl font-bold text-foreground flex items-center gap-2">
                              {experience.position}
                              {experience.current && (
                                <Badge className="bg-accent text-accent-foreground text-xs">Current</Badge>
                              )}
                            </CardTitle>
                            <CardDescription className="text-lg font-medium text-accent">
                              {experience.company}
                            </CardDescription>
                            <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                              <div className="flex items-center gap-1">
                                <Calendar className="h-4 w-4" />
                                <span>
                                  {experience.startDate} - {experience.endDate}
                                </span>
                              </div>
                              <div className="flex items-center gap-1">
                                <MapPin className="h-4 w-4" />
                                <span>{experience.location}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm" className="text-muted-foreground">
                          {expandedExperience === experience.id ? (
                            <ChevronUp className="h-4 w-4" />
                          ) : (
                            <ChevronDown className="h-4 w-4" />
                          )}
                        </Button>
                      </div>
                    </CardHeader>

                    <CardContent className="pt-0">
                      <p className="text-muted-foreground mb-4 leading-relaxed">{experience.description}</p>

                      {/* Key Metrics */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                        {experience.metrics.map((metric, metricIndex) => (
                          <div
                            key={metricIndex}
                            className="flex items-center gap-2 p-3 rounded-lg bg-muted/50 border border-border/50"
                          >
                            <div className="text-accent">{metric.icon}</div>
                            <div>
                              <div className="font-semibold text-foreground">{metric.value}</div>
                              <div className="text-xs text-muted-foreground">{metric.label}</div>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Expanded Content */}
                      {expandedExperience === experience.id && (
                        <div className="mt-6 space-y-6 animate-in slide-in-from-top-2 duration-300">
                          <div>
                            <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                              <Award className="h-4 w-4 text-accent" />
                              Key Achievements
                            </h4>
                            <ul className="space-y-2">
                              {experience.achievements.map((achievement, achievementIndex) => (
                                <li key={achievementIndex} className="flex items-start gap-2 text-muted-foreground">
                                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                                  <span className="leading-relaxed">{achievement}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                              <Code className="h-4 w-4 text-accent" />
                              Technologies Used
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {experience.technologies.map((tech) => (
                                <Badge
                                  key={tech}
                                  variant="secondary"
                                  className="text-xs px-2 py-1 bg-muted text-muted-foreground"
                                >
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="bg-gradient-to-r from-accent/10 to-secondary/10 border-accent/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">Ready to Work Together?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                I'm always interested in new opportunities and exciting projects. Let's discuss how I can contribute to
                your team's success.
              </p>
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-accent-foreground"
                onClick={() => {
                  const contactSection = document.getElementById("contact")
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: "smooth" })
                  }
                }}
              >
                Get In Touch
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
