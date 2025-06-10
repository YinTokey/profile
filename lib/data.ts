export const projects = [
  {
    slug: "audibit",
    title: "Audibit",
    description: "Audibit gathers the latest and hottest tech news and turns them into podcast-style audio",
    image: "/images/sections/projects/audibit/1.png",
    technologies: ["Professional"],
    role: "Developer",
    timeline: "May 2025 - Present",
    url: "/posts/projects/audibit",
  },
  {
    slug: "translation-platform",
    title: "Language Translation Platform",
    description: "An internal platform in Xmind Company",
    image: "/images/sections/projects/language-translation/1.jpg",
    technologies: ["Professional"],
    role: "Designer & Developer",
    timeline: "Aug 2023 - Jul 2024",
    url: "/posts/projects/translation-platform",
  },
  {
    slug: "flash-cut",
    title: "Shanjian",
    description: "Shanjian Cut is a video generation platform based on text, pictures, and video clips to generate digital avatar videos.",
    image: "/images/sections/projects/shanjian/4.png",
    technologies: ["Professional"],
    role: "Developer",
    timeline: "Jun 2021 - Aug 2022",
    url: "/posts/projects/flash-cut",
  },
  {
    slug: "rendering-service",
    title: "Video Rendering Service",
    description: "Video Rendering Service is an internal backend core service that supports all the company's video generation products.",
    image: "/images/sections/projects/video-rendering-service/1.jpg",
    technologies: ["Professional"],
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
    technologies: ["Professional"],
    role: "Developer",
    timeline: "Aug 2019 - May 2021",
    url: "/posts/projects/dp",
  },
  {
    slug: "youpai",
    title: "Youpai",
    description: "Youpai is a game live-streaming and video-sharing platform under 4399.",
    image: "/images/sections/projects/youpai/2.png",
    technologies: ["Professional"],
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
      { name: "Typescript", level: 90, icon: "/images/sections/skills/typescript.svg" },
      { name: "Javascript", level: 90, icon: "/images/sections/skills/javascript.png" },
      { name: "Python", level: 85, icon: "/images/sections/skills/python.png" },
      { name: "Go", level: 80, icon: "/images/sections/skills/go.png" },
      { name: "HTML", level: 85, icon: "/images/sections/skills/html.png" },
      { name: "CSS", level: 80, icon: "/images/sections/skills/css.png" },
      { name: "SQL", level: 85, icon: "/images/sections/skills/sql.png" },
      { name: "Shell", level: 85, icon: "/images/sections/skills/shell.png" },
      { name: "Objective-C", level: 90, icon: "/images/sections/skills/obj-c.png" },
      { name: "Swift", level: 85, icon: "/images/sections/skills/swift.png" },
      { name: "C", level: 80, icon: "/images/sections/skills/c.png" },
      { name: "R", level: 75, icon: "/images/sections/skills/r.png" },
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "Node.js", level: 90, icon: "/images/sections/skills/nodejs.png" },
      { name: "Docker", level: 85, icon: "/images/sections/skills/docker.svg" },
      { name: "AWS", level: 85, icon: "/images/sections/skills/aws.png" },
      { name: "REST API", level: 90, icon: "/images/sections/skills/api.png" },
      { name: "Redis", level: 85, icon: "/images/sections/skills/redis.png" },
      { name: "MongoDB", level: 85, icon: "/images/sections/skills/mongodb.png" },
      { name: "MySQL", level: 85, icon: "/images/sections/skills/mysql.png" },
      { name: "RabbitMQ", level: 85, icon: "/images/sections/skills/rabbitmq.png" },
      { name: "Websocket", level: 85, icon: "/images/sections/skills/websocket.png" },
      { name: "Protobuf", level: 80, icon: "/images/sections/skills/protobuf.png" },
      { name: "gRPC", level: 80, icon: "/images/sections/skills/grpc.webp" },
      { name: "Koa.js", level: 85, icon: "/images/sections/skills/koa.png" },
      { name: "Express.js", level: 85, icon: "/images/sections/skills/express.png" },
    ],
  },
  {
    name: "Frontend",
    skills: [
      { name: "React.js", level: 85, icon: "/images/sections/skills/react.png" },
      { name: "Next.js", level: 85, icon: "/images/sections/skills/nextjs.png" },
      { name: "Ionic", level: 80, icon: "/images/sections/skills/ionic.png" },
      { name: "Material UI", level: 85, icon: "/images/sections/skills/materialui.png" },
      { name: "ES6", level: 90, icon: "/images/sections/skills/es.png" },
      { name: "Materializecss", level: 80, icon: "/images/sections/skills/materializecss.png" },
    ],
  },
  {
    name: "Other",
    skills: [
      { name: "Git", level: 95, icon: "/images/sections/skills/git.png" },
      { name: "Linux", level: 85, icon: "/images/sections/skills/linux.png" },
      { name: "LLM", level: 80, icon: "/images/sections/skills/ai.png" },
    ],
  },
]

export const education = [
  {
    degree: "Master of Engineering - Software Engineering Practice",
    institution: "Carleton University",
    period: "2024.9 - 2026.5",
    description: "Currently pursuing a Master's degree in Software Engineering Practice",
    achievements: [
      "GPA: 10.67/12",
      "Courses:",
      "- Web and Mobile Development",
      "- Advanced Operating Systems",
      "- Data Analytics",
      "- Project Management",
      "- Entrepreneurship",
      "- Research Methods & Professional and Ethical Practice"
    ],
    institutionLogo: "/images/sections/education/carleton.jpeg",
    institutionUrl: "https://www.linkedin.com/school/carleton-university/posts/?feedView=all",
    location: "Canada"
  },
  {
    degree: "Bachelor of Engineering - Electronic & Information Engineering",
    institution: "Fujian Agriculture and Forestry University",
    period: "2013 - 2017",
    description: "Completed Bachelor's degree in Electronic & Information Engineering",
    achievements: [
      "GPA: 3.5/4.0",
      "Courses:",
      "- Data Structures and Algorithms",
      "- Computer Network",
      "- System & Applications of Linux"
    ],
    institutionLogo: "/images/sections/education/fafu.png",
    institutionUrl: "https://english.fafu.edu.cn/main.htm",
    location: "China"
  }
]
