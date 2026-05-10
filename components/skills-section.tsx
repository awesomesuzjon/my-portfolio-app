"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Code2, Database, Globe, Smartphone, Cloud, Wrench, Zap, Layers, Users, MessageCircle, Handshake, Eye, Cpu, User } from "lucide-react"

interface Skill {
  name: string
  level: number
  category: string
  icon: React.ReactNode
  color: string
  proficiency: string
}

const skills: Skill[] = [
  {
    name: "Javascript",
    level: 90,
    category: "Frontend",
    icon: <Code2 className="h-5 w-5" />,
    color: "hsl(var(--chart-1))",
    proficiency: "Expert",
  },
  {
    name: "Typescript",
    level: 88,
    category: "Frontend",
    icon: <Database className="h-5 w-5" />,
    color: "hsl(var(--chart-2))",
    proficiency: "Advanced",
  },
  {
    name: "ReactJS",
    level: 90,
    category: "Frontend",
    icon: <Globe className="h-5 w-5" />,
    color: "hsl(var(--chart-2))",
    proficiency: "Expert",
  },
  {
    name: "NextJS",
    level: 90,
    category: "Frontend",
    icon: <Globe className="h-5 w-5" />,
    color: "hsl(var(--chart-2))",
    proficiency: "Expert",
  },
  {
    name: "Node.js",
    level: 88,
    category: "Backend",
    icon: <Database className="h-5 w-5" />,
    color: "hsl(var(--chart-4))",
    proficiency: "Advanced",
  },
  {
    name: "PostgreSQL",
    level: 87,
    category: "Backend",
    icon: <Database className="h-5 w-5" />,
    color: "hsl(var(--chart-1))",
    proficiency: "Advanced",
  },
  {
    name: "Docker",
    level: 75,
    category: "DevOps",
    icon: <Wrench className="h-5 w-5" />,
    color: "hsl(var(--chart-3))",
    proficiency: "Intermediate",
  },
  {
    name: "MongoDB",
    level: 82,
    category: "Backend",
    icon: <Database className="h-5 w-5" />,
    color: "hsl(var(--chart-4))",
    proficiency: "Advanced",
  },
  {
    name: "Tailwind CSS",
    level: 90,
    category: "Frontend",
    icon: <Smartphone className="h-5 w-5" />,
    color: "hsl(var(--chart-5))",
    proficiency: "Expert",
  },
  {
    name: "AWS",
    level: 70,
    category: "Cloud",
    icon: <Cloud className="h-5 w-5" />,
    color: "hsl(var(--chart-1))",
    proficiency: "Intermediate",
  },
  {
    name: "CI/CD Pipeline",
    level: 82,
    category: "DevOps",
    icon: <Zap className="h-5 w-5" />,
    color: "hsl(var(--chart-4))",
    proficiency: "Advanced",
  },
  {
    name: "Linux",
    level: 85,
    category: "DevOps",
    icon: <Wrench className="h-5 w-5" />,
    color: "hsl(var(--chart-5))",
    proficiency: "Advanced",
  },
  {
    name: "Bash Scripting",
    level: 80,
    category: "DevOps",
    icon: <Code2 className="h-5 w-5" />,
    color: "hsl(var(--chart-3))",
    proficiency: "Advanced",
  },
  {
    name: "Communication",
    level: 90,
    category: "Soft Skills",
    icon: <MessageCircle className="h-5 w-5" />,
    color: "hsl(var(--chart-1))",
    proficiency: "Expert",
  },
  {
    name: "Teamwork",
    level: 92,
    category: "Soft Skills",
    icon: <Handshake className="h-5 w-5" />,
    color: "hsl(var(--chart-2))",
    proficiency: "Expert",
  },
  {
    name: "Quick Learner",
    level: 93,
    category: "Soft Skills",
    icon: <Zap className="h-5 w-5" />,
    color: "hsl(var(--chart-3))",
    proficiency: "Expert",
  },
  {
    name: "Leadership",
    level: 85,
    category: "Soft Skills",
    icon: <Users className="h-5 w-5" />,
    color: "hsl(var(--chart-4))",
    proficiency: "Advanced",
  },
]

const categories = ["All", "Frontend", "Backend", "Cloud", "DevOps", "Soft Skills"]

export function SkillsSection() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  const filteredSkills =
    selectedCategory === "All" ? skills : skills.filter((skill) => skill.category === selectedCategory)

  const CircularProgress = ({ skill }: { skill: Skill }) => {
    const radius = 45
    const circumference = 2 * Math.PI * radius
    const strokeDasharray = circumference
    const strokeDashoffset = circumference - (skill.level / 100) * circumference

    return (
      <div className="relative w-32 h-32 flex items-center justify-center">
        <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r={radius}
            stroke="hsl(var(--muted))"
            strokeWidth="8"
            fill="transparent"
            className="opacity-20"
          />
          <circle
            cx="50"
            cy="50"
            r={radius}
            stroke={skill.color}
            strokeWidth="8"
            fill="transparent"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="transition-all duration-1000 ease-out"
            style={{
              animation: hoveredSkill === skill.name ? "none" : "drawCircle 2s ease-out forwards",
            }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="text-accent mb-2 scale-125">{skill.icon}</div>
          <div className="text-sm font-semibold text-muted-foreground text-center px-2">{skill.proficiency}</div>
        </div>
      </div>
    )
  }

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">Skills & Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and expertise across different technologies and domains.
          </p>
        </div>

        {/* Skill Categories Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className={`transition-all duration-200 ${
                selectedCategory === category
                  ? "bg-accent text-accent-foreground"
                  : "hover:bg-accent/10 hover:text-accent"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Technical Expertise</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
            {filteredSkills.map((skill) => (
              <Card
                key={skill.name}
                className="group cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-card/50 backdrop-blur-sm"
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <CircularProgress skill={skill} />
                  <h4 className="font-semibold text-foreground mt-4 mb-2 group-hover:text-accent transition-colors">
                    {skill.name}
                  </h4>
                  <Badge variant="secondary" className="text-xs px-2 py-1 bg-muted/50 text-muted-foreground">
                    {skill.category}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Skills Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20">
            <CardContent className="p-6 text-center">
              <Zap className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">3+ Years</h3>
              <p className="text-muted-foreground">Professional Development Experience</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-chart-2/10 to-chart-2/5 border-chart-2/20">
            <CardContent className="p-6 text-center">
              <Code2 className="h-12 w-12 text-chart-2 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">10+ Technologies</h3>
              <p className="text-muted-foreground">Mastered Across Full Stack</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-chart-3/10 to-chart-3/5 border-chart-3/20">
            <CardContent className="p-6 text-center">
              <Layers className="h-12 w-12 text-chart-3 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">15+ Projects</h3>
              <p className="text-muted-foreground">Successfully Delivered</p>
            </CardContent>
          </Card>
        </div>
      </div>

      <style jsx>{`
        @keyframes drawCircle {
          from {
            stroke-dashoffset: ${2 * Math.PI * 45};
          }
          to {
            stroke-dashoffset: var(--final-offset);
          }
        }
      `}</style>
    </section>
  )
}
