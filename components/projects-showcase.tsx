"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Filter } from "lucide-react"

interface Project {
  id: string
  title: string
  description: string
  image: string
  technologies: string[]
  category: string
  githubUrl: string
  liveUrl: string
  featured?: boolean
}
const projects: Project[] = [
  {
    id: "1",
    title: "Remit USA – High-Traffic Remittance Platform (Corporate)",
    description:
        "High-traffic remittance platform supporting over 1M+ users. Worked on frontend interfaces, transaction workflows, and reusable components while improving responsiveness and performance for financial transaction systems.",
    image: "/remittance-platform-dashboard.png",
    technologies: ["React.js", "Next.js", "JavaScript", "REST API", "FinTech", "Payment Integration"],
    category: "Web Apps",
    githubUrl: "#",
    liveUrl: "https://remit.hamropatro.com/usa",
    featured: true,
  },

  {
    id: "2",
    title: "Remit Australia – Remittance Platform (Corporate)",
    description:
        "Remittance platform designed for Australian users. Developed and maintained frontend modules, integrated APIs, and improved dashboard usability and overall user experience.",
    image: "/remittance-app.png",
    technologies: ["React.js", "JavaScript", "REST API", "Dashboard Development", "FinTech"],
    category: "Web Apps",
    githubUrl: "#",
    liveUrl: "https://remit.hamropatro.com/aus",
    featured: true,
  },

  {
    id: "3",
    title: "Hamro Pay – Digital Wallet (Corporate)",
    description:
        "Digital wallet platform with 10K+ active users supporting QR payments, bill payments, ticketing, and P2P transfers. Worked with Svelte in a microservices-driven frontend architecture and collaborated closely with backend teams to improve scalability.",
    image: "/wallet-p.jpg",
    technologies: ["Svelte", "JavaScript", "Microservices", "Payment Gateway", "FinTech", "Digital Wallet"],
    category: "Web Apps",
    githubUrl: "#",
    liveUrl: "https://pay.hamropatro.com/",
    featured: true,
  },

  {
    id: "4",
    title: "Hamro Gifts – Multinational E-commerce Platform (Corporate)",
    description:
        "Multinational gifting and e-commerce platform. Built responsive UI components and frontend pages while contributing to scalable frontend architecture and improved customer experience.",
    image: "/gifts-app.png",
    technologies: ["React.js", "JavaScript", "E-commerce", "Responsive Design", "Frontend Architecture"],
    category: "Web Apps",
    githubUrl: "#",
    liveUrl: "https://gifts.hamropatro.com/",
  },

  {
    id: "5",
    title: "Custom Canvas Ordering App (Full-Stack Side Project)",
    description:
        "Full-stack application allowing users to design custom canvases, place orders, and send gifts. Implemented complete flow from frontend UI to backend services and PostgreSQL database.",
    image: "/milantara.png",
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Full-Stack Development", "REST API"],
    category: "Full Stack",
    githubUrl: "#",
    liveUrl: "https://dev-milantara.vercel.app/",
    featured: true,
  },

  {
    id: "6",
    title: "DnD 5e Spell Explorer (Hackathon Project)",
    description:
        "Hackathon project built using React, TypeScript, and Redux Toolkit featuring advanced spell search, filtering, and favorites system with clean component architecture following Airbnb ESLint standards.",
    image: "/dnd-app.png",
    technologies: ["React.js", "TypeScript", "Redux Toolkit", "State Management", "Frontend Architecture"],
    category: "Hackathon",
    githubUrl: "https://github.com/awesomesuzjon/spell-listing-app",
    liveUrl: "https://dnde5-spell.vercel.app/",
  },

  {
    id: "7",
    title: "University Website (Hackathon Project)",
    description:
        "Responsive university website featuring dynamic course listings and teacher profiles built using JavaScript, HTML, CSS, Bootstrap 5, and Ant Design.",
    image: "/unipod-app.png",
    technologies: ["JavaScript", "HTML", "CSS", "Bootstrap 5", "Ant Design", "Responsive Design"],
    category: "Hackathon",
    githubUrl: "https://github.com/awesomesuzjon/University-WebApp",
    liveUrl: "https://unipud.netlify.app/",
  },
];
const categories = ["All", "Web Apps", "DevOps", "Applications"]

export function ProjectsShowcase() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)

  const filteredProjects = (
    selectedCategory === "All" ? projects : projects.filter((project) => project.category === selectedCategory)
  ).sort((a, b) => {
    // Sort featured projects first
    if (a.featured && !b.featured) return -1
    if (!a.featured && b.featured) return 1
    return 0
  })

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my work in FinTech, security systems, AI applications, and scalable backend architectures.
          </p>
        </div>

        {/*  /!*feat: enable filter section to toggle between different choice*!/*/}

        {/* Filter Bar */}
        {/*<div className="flex flex-wrap justify-center gap-2 mb-12">*/}
        {/*  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">*/}
        {/*    <Filter className="h-4 w-4" />*/}
        {/*    <span>Filter by:</span>*/}
        {/*  </div>*/}
        {/*  <div className="flex flex-wrap gap-2">*/}
        {/*    {categories.map((category) => (*/}
        {/*      <Button*/}
        {/*        key={category}*/}
        {/*        variant={selectedCategory === category ? "default" : "outline"}*/}
        {/*        size="sm"*/}
        {/*        onClick={() => setSelectedCategory(category)}*/}
        {/*        className={`transition-all duration-200 ${*/}
        {/*          selectedCategory === category*/}
        {/*            ? "bg-accent text-accent-foreground"*/}
        {/*            : "hover:bg-accent/10 hover:text-accent"*/}
        {/*        }`}*/}
        {/*      >*/}
        {/*        {category}*/}
        {/*      </Button>*/}
        {/*    ))}*/}
        {/*  </div>*/}
        {/*</div>*/}

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              className={`group cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-2 flex flex-col h-full ${
                project.featured ? "ring-2 ring-accent/20" : ""
              } ${hoveredProject === project.id ? "scale-105" : ""}`}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                {project.featured && (
                  <Badge className="absolute top-3 left-3 bg-accent text-accent-foreground">Featured</Badge>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <CardHeader>
                <CardTitle className="text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs px-2 py-1 bg-muted text-muted-foreground">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="flex gap-3 pt-4">
                {project.githubUrl !== "#" && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 hover:bg-accent hover:text-accent-foreground transition-colors bg-transparent"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                )}
                <Button 
                  size="sm" 
                  className={`${project.githubUrl === "#" ? "w-full" : "flex-1"} bg-accent hover:bg-accent/90 text-accent-foreground`} 
                  asChild
                >
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="px-8 py-3 text-lg border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
            asChild
          >
            <a href="https://github.com/awesomesuzjon" target="_blank" rel="noopener noreferrer">
              View All Projects
              <ExternalLink className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
