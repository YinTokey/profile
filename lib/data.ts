export const projects = [
  {
    slug: "audibit",
    title: "Audibit",
    description: "Audibit gathers the latest and hottest tech news and turns them into podcast-style audio",
    image: "/images/sections/projects/audibit/1.png",
    technologies: ["Next.js", "SwfitUI", "OpenAI", "TTS", "RAG"],
    role: "Developer",
    timeline: "May 2025 - Present",
    url: "/posts/projects/audibit",
  },
  {
    slug: "translation-platform",
    title: "Language Translation Platform",
    description: "An internal platform in Xmind Company",
    image: "/images/sections/projects/language-translation/1.jpg",
    technologies: ["Next.js", "RAG", "AWS"],
    role: "Designer & Developer",
    timeline: "Aug 2023 - Jul 2024",
    url: "/posts/projects/translation-platform",
  },
  {
    slug: "flash-cut",
    title: "Shanjian",
    description: "Shanjian is a video generation platform based on text, pictures, and video clips to generate digital avatar videos.",
    image: "/images/sections/projects/shanjian/4.png",
    technologies: ["Node.js", "RabbitMQ", "Redis"],
    role: "Developer",
    timeline: "Jun 2021 - Aug 2022",
    url: "/posts/projects/flash-cut",
  },
  {
    slug: "rendering-service",
    title: "Video Rendering Service",
    description: "Video Rendering Service is an internal backend core service that supports all the company's video generation products.",
    image: "/images/sections/projects/video-rendering-service/1.jpg",
    technologies: ["Node.js", "Go", "RabbitMQ", "Microservices"],
    role: "Developer",
    timeline: "Dec 2021 - Aug 2022",
    url: "/posts/projects/rendering-service",
  },
  // {
  //   slug: "mimetype",
  //   title: "mimetype",
  //   description: "A Golang package for detecting MIME types and file extensions. I contributed code to support the detection of one MIME type.",
  //   image: "/images/sections/projects/minetype.png",
  //   technologies: ["Open Source"],
  //   role: "Contributor",
  //   timeline: "Apr 2021",
  //   githubUrl: "https://github.com/gabriel-vasile/mimetype",
  // },
  {
    slug: "doupai",
    title: "Doupai",
    description: "Doupai is a video editing tool that helps users create engaging videos and quickly share them on social media.",
    image: "/images/sections/projects/doupai/doupai-bg.png",
    technologies: ["Objective-C", "UIKit"],
    role: "Developer",
    timeline: "Aug 2019 - May 2021",
    url: "/posts/projects/dp",
  },
  {
    slug: "youpai",
    title: "Youpai",
    description: "Youpai is a game live-streaming and video-sharing platform under 4399.",
    image: "/images/sections/projects/youpai/2.png",
    technologies: ["Objective-C", "UIKit"],
    role: "Developer",
    timeline: "Mar 2017 - Jan 2018",
    url: "/posts/projects/youpai",
  },
]

export const workExperience = [
  {
    position: "Backend Engineer",
    company: "Shenzhen Aisi Software Technology Co., Ltd. (Xmind)",
    period: "Apr 2023 - Jul 2024",
    description: [
      "Built a translation platform solely using LLM, Next.js, AWS, cutting external translation costs by CAD 20k/year.",
      "Achieved 90% human translation quality (French, German) via RAG-based improvements, validated by in-house language experts.",
      "Optimized user/payment services (Python, Node.js) features and collaborating across teams."
    ],
    technologies: ["LLM", "Next.js", "AWS", "Python", "Node.js"],
    companyLogo: "/images/sections/experiences/xmind.svg",
    location: "Shenzhen, China",
    companyUrl: "https://xmind.app/about/",
    companyOverview: "Xmind Established in 2006, is a pioneering mind mapping software trusted by over 100 million users worldwide. Specialized in mind mapping and brainstorming, Xmind offers a versatile suite of tools that cater to diverse needs, from small teams to Fortune 500 companies. Shenzhen Aisi Software Technology Co., Ltd. is the Shenzhe office of Xmind (80-100 employees)."
  },
  {
    position: "Backend Development Engineer",
    company: "Shenzhen Qutui Science & Technology Co., Ltd. (Shanjian)",
    period: "Jun 2021 - Aug 2022",
    description: [
      "Led 1 engineer to develop a cloud video rendering service (Node.js, Go, RabbitMQ) and coordinated with 5 teams (11 members) to support for more than 4 products integration.",
      "Authored a technical guide that improved cross-team collaboration; received top monthly performance rating (1st of 14).",
      "Migrated a rendering engine from a single machine to scalable GPU servers, boosting rendering speed by 3× and simplifying deployment.",
      "Optimized rendering tasks scheduled within cron jobs by designing a Redis-based caching strategy, reducing rendering costs by 50%.",
      "Delivered REST and WebSocket APIs for a text-to-video generation product, collaborating with 3 teams on integration and testing to enable seamless mobile and front-end functionality."
    ],
    technologies: ["Node.js", "Go", "RabbitMQ", "Redis", "REST API", "WebSocket"],
    companyLogo: "/images/sections/experiences/shanjian.png",
    location: "Shenzhen, China",
    companyUrl: "https://sjzn.com/",
    companyOverview: "Shanjian Intelligence is the leading company of AI video tools in China, with a total of 300 million users worldwide. I signed the contract with its subsidiary Shenzhen Qutui Science & Technology Co., Ltd."
  },
  {
    position: "iOS Development Engineer",
    company: "Shenzhen Qutui Science & Technology Co., Ltd. (Shanjian)",
    period: "Mar 2019 - May 2021",
    description: [
      "Led 3 iOS developers to deliver major version updates, integrating video rendering engine new features.",
      "Developed an iOS module registration library to support modular architectures across multiple projects."
    ],
    technologies: ["iOS", "Swift", "Objective-C"],
    companyLogo: "/images/sections/experiences/shanjian.png",
    location: "Shenzhen, China",
    companyUrl: "https://sjzn.com/"
  },
  {
    position: "iOS Development Engineer",
    company: "4399 Network Co., Ltd.",
    period: "Jul 2017 - Jan 2019",
    description: [
      "Drove evaluation and adoption of a new iOS tech stack (RxSwift, MVVM, modularization) by developing libraries and documentation that enabled team integration in new projects.",
      "Collaborated with other members to develop a gaming video app and children vidoe app."
    ],
    technologies: ["iOS", "RxSwift", "MVVM"],
    companyLogo: "/images/sections/experiences/4399.jpeg",
    location: "Xiamen, China",
    companyUrl: "https://4399en.com/",
    companyOverview: "4399 founded in 2002, is a leading Chinese game developer, publisher, and platform operator. It has over 600 million registered users, operates 4399.com, China's top gaming portal, and has developed and published 30+ hit games across web and mobile platforms."
  },
  {
    position: "iOS Development Intern",
    company: "4399 Network Co., Ltd.",
    period: "Feb 2017 - Jun 2017",
    description: [
      "Supported iOS team in a video streaming app feature development, bug fixes, and testing."
    ],
    technologies: ["iOS"],
    companyLogo: "/images/sections/experiences/4399.jpeg",
    location: "Xiamen, China",
    companyUrl: "https://4399en.com/"
  }
]

export const skillCategories = [
  {
    name: "Language",
    skills: [
      { name: "Typescript" },
      { name: "Javascript" },
      { name: "Python" },
      { name: "Go" },
      { name: "Swift" },
      { name: "Objective-C" },
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "Node.js" },
      { name: "Postgres (Supabase)" },
      { name: "Redis" },
      { name: "MongoDB" },
      { name: "MySQL" },
      { name: "Firestore" },
      { name: "RabbitMQ" },
      { name: "Websocket" },
      { name: "Express.js" },
      { name: "Nest.js" },
    ],
  },
  {
    name: "Frontend",
    skills: [
      { name: "React.js" },
      { name: "Next.js" },
      { name: "Tailwind CSS" },
      { name: "Charkra UI" },
      { name: "HTML" },
      { name: "CSS" },
    ],
  },
  {
    name: "AI",
    skills: [
      { name: "OpenAI API" },
      { name: "RAG" },
      { name: "LangChain/LangGraph/LangSmith" },
      { name: "Pinecone" },
      { name: "Qdrant" },
      { name: "Machine Learning (Supervised)" },
    ],
  },
  {
    name: "Mobile",
    skills: [
      { name: "SwiftUI" },
      { name: "React Native" },
      { name: "Swift" },
      { name: "Ionic" },
      { name: "Objective-C" },
      { name: "UIKit" },
      { name: "MVVM" },
    ],
  },
  {
    name: "DevOps",
    skills: [
      { name: "Docker" },
      { name: "AWS" },
      { name: "Github Actions" },
      { name: "Gitlab CI/CD" },
      { name: "Vercel" },
      { name: "Netlify" },
    ],
  },
  {
    name: "Tools",
    skills: [
      { name: "Cursor" },
      { name: "V0" },
      { name: "Linux" },
      { name: "Figma" },
      { name: "ffmpeg" },
    ],
  },
]

export const education = [
  {
    degree: "Master of Engineering - Software Engineering Practice",
    institution: "Carleton University",
    period: "2024.9 - 2026.5",
    institutionLogo: "/images/sections/education/carleton.jpeg",
    institutionUrl: "https://www.linkedin.com/school/carleton-university/posts/?feedView=all",
    location: "Canada"
  },
  {
    degree: "Bachelor of Engineering - Electronic & Information Engineering",
    institution: "Fujian Agriculture and Forestry University",
    period: "2013 - 2017",
    institutionLogo: "/images/sections/education/fafu.png",
    institutionUrl: "https://english.fafu.edu.cn/main.htm",
    location: "China"
  }
]

export const blogPosts = [
  {
    slug: "hackathon-journey-1",
    title: "Hackathon Journey - I Vibe Coded a Vibe Landing Page Generator",
    description: "This was my first time participating in a hackathon. I participated solo, using Cursor, LangGraph, and OpenAI API to build a landing page generator.",
    excerpt: "Hackathon journey - I vibe coded a vibe landing page generator",
    image: "/images/blog/ai-hackathon/1.png",
    date: "2025-06-12",
    readTime: "3 min read",
    tags: ["Vibe Coding", "Gen AI", "Hackathon"],
    author: "Yinjian Chen",
    published: true,
  }, 
  {
    slug: "auto-mv",
    title: "I built a music video generator",
    description: "I built a music video generator",
    excerpt: "I built a music video generator",
    image: "/images/blog/auto-mv/4.png",
    date: "2025-08-07",
    readTime: "5 min read",
    tags: ["Suno AI", "Runware AI", "FFmpeg"],
    author: "Yinjian Chen",
    published: true,
  },
  {
    slug: "vibe-freelancing",
    title: "I Failed at Vibe Coding on a Freelance iOS Project",
    description: "I failed at Vibe Coding on a Freelance iOS Project",
    excerpt: "I failed at Vibe Coding on a Freelance iOS Project",
    image: "/images/blog/vibe-freelancing/1.webp",
    date: "2025-08-08",
    readTime: "5 min read",
    tags: ["Vibe Coding", "Freelancing"],
    author: "Yinjian Chen",
    published: true,
  }
]
