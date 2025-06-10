export const projects = [
  {
    slug: "ecommerce-platform",
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution with React, Node.js, and Stripe integration",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
    liveUrl: "https://example-ecommerce.com",
    githubUrl: "https://github.com/alexjohnson/ecommerce-platform",
  },
  {
    slug: "task-management-app",
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["Next.js", "TypeScript", "Prisma", "Socket.io", "PostgreSQL"],
    liveUrl: "https://example-tasks.com",
    githubUrl: "https://github.com/alexjohnson/task-management",
  },
  {
    slug: "portfolio-website",
    title: "Portfolio Website",
    description: "A responsive portfolio website built with modern web technologies",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "MDX"],
    liveUrl: "https://example-portfolio.com",
    githubUrl: "https://github.com/alexjohnson/portfolio",
  },
]

export const workExperience = [
  {
    position: "Senior Full-Stack Developer",
    company: "TechCorp Solutions",
    period: "2022 - Present",
    description:
      "Lead development of web applications using React, Node.js, and cloud technologies. Mentored junior developers and improved team productivity by 40%.",
    technologies: ["React", "Node.js", "AWS", "TypeScript", "PostgreSQL"],
    companyLogo: "/placeholder.svg?height=32&width=32",
  },
  {
    position: "Frontend Developer",
    company: "Digital Agency Pro",
    period: "2020 - 2022",
    description:
      "Developed responsive web applications and collaborated with design teams to create pixel-perfect user interfaces for various clients.",
    technologies: ["React", "Vue.js", "Sass", "JavaScript", "Figma"],
    companyLogo: "/placeholder.svg?height=32&width=32",
  },
  {
    position: "Web Developer",
    company: "StartupXYZ",
    period: "2019 - 2020",
    description:
      "Built and maintained company website and internal tools. Implemented SEO best practices resulting in 200% increase in organic traffic.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    companyLogo: "/placeholder.svg?height=32&width=32",
  },
]

export const skillCategories = [
  {
    name: "Frontend",
    skills: [
      { name: "React", level: 95, icon: "/placeholder.svg?height=32&width=32" },
      { name: "Next.js", level: 90, icon: "/placeholder.svg?height=32&width=32" },
      { name: "TypeScript", level: 85, icon: "/placeholder.svg?height=32&width=32" },
      { name: "Tailwind CSS", level: 90, icon: "/placeholder.svg?height=32&width=32" },
      { name: "Vue.js", level: 75, icon: "/placeholder.svg?height=32&width=32" },
      { name: "Sass", level: 80, icon: "/placeholder.svg?height=32&width=32" },
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "Node.js", level: 90, icon: "/placeholder.svg?height=32&width=32" },
      { name: "Express.js", level: 85, icon: "/placeholder.svg?height=32&width=32" },
      { name: "PostgreSQL", level: 80, icon: "/placeholder.svg?height=32&width=32" },
      { name: "MongoDB", level: 75, icon: "/placeholder.svg?height=32&width=32" },
      { name: "Prisma", level: 85, icon: "/placeholder.svg?height=32&width=32" },
      { name: "GraphQL", level: 70, icon: "/placeholder.svg?height=32&width=32" },
    ],
  },
  {
    name: "Tools & DevOps",
    skills: [
      { name: "Git", level: 95, icon: "/placeholder.svg?height=32&width=32" },
      { name: "Docker", level: 75, icon: "/placeholder.svg?height=32&width=32" },
      { name: "AWS", level: 70, icon: "/placeholder.svg?height=32&width=32" },
      { name: "Vercel", level: 90, icon: "/placeholder.svg?height=32&width=32" },
      { name: "Figma", level: 85, icon: "/placeholder.svg?height=32&width=32" },
      { name: "Jest", level: 80, icon: "/placeholder.svg?height=32&width=32" },
    ],
  },
]

export const education = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "University of Technology",
    period: "2015 - 2019",
    description: "Focused on software engineering, algorithms, and web development. Graduated with honors.",
    achievements: ["Summa Cum Laude (GPA: 3.9/4.0)", "Dean's List for 6 semesters", "Winner of Annual Hackathon 2018"],
  },
  {
    degree: "AWS Certified Solutions Architect",
    institution: "Amazon Web Services",
    period: "2021",
    description: "Professional certification demonstrating expertise in designing distributed systems on AWS.",
    achievements: ["Passed with 850/1000 score", "Specialized in serverless architectures"],
  },
]
