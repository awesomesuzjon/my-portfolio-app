"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Download, ArrowDown, Github, Linkedin, Mail } from "lucide-react"

export function HeroSection() {
  const [currentRole, setCurrentRole] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isTyping, setIsTyping] = useState(true)

  const roles = ["Front-End Developer", "Software Engineer", "Javascript Developer", "React Developer"]

  useEffect(() => {
    const currentRoleText = roles[currentRole]
    let currentIndex = 0

    const typeInterval = setInterval(() => {
      if (currentIndex <= currentRoleText.length) {
        setDisplayText(currentRoleText.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(typeInterval)
        setIsTyping(false)

        setTimeout(() => {
          setIsTyping(true)
          setCurrentRole((prev) => (prev + 1) % roles.length)
        }, 2000)
      }
    }, 100)

    return () => clearInterval(typeInterval)
  }, [currentRole])

  const scrollToProjects = () => {
    const element = document.getElementById("projects")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/20 to-accent/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.1),transparent_50%)]" />
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          <Avatar className="w-32 h-32 mx-auto mb-8 ring-4 ring-accent/20 ring-offset-4 ring-offset-background animate-glow">
            <AvatarImage src="/avatar.png" alt="Sujan Profile" />
            <AvatarFallback className="text-2xl font-bold bg-accent text-accent-foreground">SB</AvatarFallback>
          </Avatar>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6">
            <span className="block">Sujan Bohara</span>
          </h1>

          <div className="h-16 mb-8">
            <p className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground">
              <span className="inline-block min-w-0">
                {displayText}
                <span className={`inline-block w-0.5 h-6 bg-accent ml-1 ${isTyping ? "animate-pulse" : ""}`} />
              </span>
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <Badge
              variant="secondary"
              className="text-sm px-3 py-1 hover:bg-accent hover:text-accent-foreground transition-colors cursor-default"
            >
              JavaScript
            </Badge>
            <Badge
              variant="secondary"
              className="text-sm px-3 py-1 hover:bg-accent hover:text-accent-foreground transition-colors cursor-default"
            >
              Next.js
            </Badge>
            <Badge
              variant="secondary"
              className="text-sm px-3 py-1 hover:bg-accent hover:text-accent-foreground transition-colors cursor-default"
            >
              React.js
            </Badge>
            <Badge
              variant="secondary"
              className="text-sm px-3 py-1 hover:bg-accent hover:text-accent-foreground transition-colors cursor-default"
            >
              Node.js
            </Badge>
            <Badge
              variant="secondary"
              className="text-sm px-3 py-1 hover:bg-accent hover:text-accent-foreground transition-colors cursor-default"
            >
              AWS
            </Badge>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              onClick={scrollToProjects}
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 text-lg hover:scale-105 transition-transform"
            >
              View Projects
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-3 text-lg border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent hover:scale-105 transition-transform"
              asChild
            >
              <a href="/resume.pdf" download="Yougal_Bimali_Resume.pdf">
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </a>
            </Button>
          </div>

          <div className="flex justify-center space-x-6">
            <Button
              variant="ghost"
              size="icon"
              className="text-muted-foreground hover:text-accent hover:scale-110 transition-all"
              asChild
            >
              <a href="https://github.com/awesomesuzjon" target="_blank" rel="noopener noreferrer">
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub Profile</span>
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-muted-foreground hover:text-accent hover:scale-110 transition-all"
              asChild
            >
              <a href="https://www.linkedin.com/in/sujan-bohara-3439571a0/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn Profile</span>
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-muted-foreground hover:text-accent hover:scale-110 transition-all"
              asChild
            >
              <a href="mailto:bohorasujan39@gmail.com">
                <Mail className="h-6 w-6" />
                <span className="sr-only">Email Contact</span>
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce no-print">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
        <span className="sr-only">Scroll down to view content</span>
      </div>
    </section>
  )
}
