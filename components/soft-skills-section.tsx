"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, User, MessageCircle, Handshake, Eye, Zap, Cpu } from "lucide-react"

interface SoftSkill {
  name: string
  icon: React.ReactNode
  description: string
}

interface SkillCategory {
  title: string
  icon: React.ReactNode
  color: string
  skills: SoftSkill[]
}

const softSkillCategories: SkillCategory[] = [
  {
    title: "Team Skills",
    icon: <Users className="h-6 w-6" />,
    color: "from-blue-500/10 to-blue-500/5 border-blue-500/20",
    skills: [
      {
        name: "Mentorship",
        icon: <User className="h-5 w-5" />,
        description: "Guiding and supporting junior developers in their growth journey"
      },
      {
        name: "Leadership",
        icon: <Users className="h-5 w-5" />,
        description: "Leading development teams and driving project success"
      },
      {
        name: "Communication",
        icon: <MessageCircle className="h-5 w-5" />,
        description: "Clear and effective communication across all stakeholders"
      },
      {
        name: "Teamwork",
        icon: <Handshake className="h-5 w-5" />,
        description: "Collaborative approach to achieving shared goals"
      }
    ]
  },
  {
    title: "Personal Attributes",
    icon: <User className="h-6 w-6" />,
    color: "from-accent/10 to-accent/5 border-accent/20",
    skills: [
      {
        name: "Curious",
        icon: <Eye className="h-5 w-5" />,
        description: "Always eager to explore new technologies and solutions"
      },
      {
        name: "Quick Learner",
        icon: <Zap className="h-5 w-5" />,
        description: "Rapidly adapting to new frameworks and methodologies"
      },
      {
        name: "Technophile",
        icon: <Cpu className="h-5 w-5" />,
        description: "Passionate about emerging technologies and innovation"
      }
    ]
  }
]

export function SoftSkillsSection() {
  return (
    <section id="soft-skills" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">Soft Skills</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Beyond technical expertise, these interpersonal and personal skills drive collaboration, innovation, and continuous growth in every project.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {softSkillCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className={`bg-gradient-to-br ${category.color}`}>
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground flex items-center gap-3">
                  <div className="text-accent">{category.icon}</div>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="group p-4 rounded-lg bg-background/50 backdrop-blur-sm hover:bg-background/70 transition-all duration-300 hover:scale-105"
                  >
                    <div className="flex items-start gap-3">
                      <div className="text-accent mt-1 group-hover:scale-110 transition-transform">
                        {skill.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground mb-1 group-hover:text-accent transition-colors">
                          {skill.name}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {skill.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Summary Section */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-muted/50 to-muted/30 border-muted-foreground/20 inline-block">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold text-foreground mb-4">Well-Rounded Professional</h3>
              <p className="text-muted-foreground max-w-2xl">
                Combining strong technical skills with excellent soft skills to deliver exceptional results 
                and foster positive team dynamics in every project.
              </p>
              <div className="flex justify-center gap-2 mt-4">
                <Badge variant="secondary" className="bg-accent/20 text-accent border-accent/30">
                  Team Player
                </Badge>
                <Badge variant="secondary" className="bg-accent/20 text-accent border-accent/30">
                  Continuous Learner
                </Badge>
                <Badge variant="secondary" className="bg-accent/20 text-accent border-accent/30">
                  Tech Enthusiast
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}