import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export const portfolioData = {
  personal: {
    name: "Aditya Gupta",
    role: "Full Stack Developer",
    email: "adityacse207@gmail.com",
    phone: "+91 9794369680",
    location: "Gorakhpur, UP, India 273413",
    github: "https://github.com/gptaditya",
    linkedin: "https://www.linkedin.com/in/gptaditya",
    website: "https://www.xadisri.in",
    summary:
      "Software Engineer with 2.5+ years of experience building scalable full-stack applications using Java, Spring Boot, Microservices, React.js, Next.js, and AWS. Skilled in designing secure REST APIs, optimizing performance, and delivering cloud-native, production-ready solutions in Agile environments.",
  },
  skills: ["Java", "JavaScript", "Python", "SpringBoot", "SpringMVC", "Hibernate", "MySQL", "PostgreSQL", "Github", "Git", "HTML", "CSS", "JS", "React.js", "Next.js", "TailwindCSS", "AWS", "JWT", "Vercel", "Jest", "Cypress", "Storybook"],
  experience: [
    {
      role: "Software Engineer",
      company: "Brainstrata",
      location: "London, UK",
      duration: "2025 - Present",
      description: [
        "Built responsive and reusable user interfaces using React.js and Next.js, integrating RESTful APIs to deliver real-time dashboards and content management solutions",
        "Improved development efficiency by ~25% by building a reusable React component library",
        "Enhanced application performance with lazy loading, image optimization, and code splitting while actively participating in Agile-based development, testing, and release cycles",
      ],
      techStack: ["React.js", "Next.js", "REST API", "JavaScript", "Tailwind CSS"],
    },
    {
      role: "Java Developer",
      company: "CSKAA",
      location: "Noida, India",
      duration: "2023 - 2025",
      description: [
        "Developed and deployed scalable RESTful APIs using Spring Boot, integrating backend services with frontend modules to deliver secure and efficient production-grade applications",
        "Implemented authentication and authorization using Spring Security and optimized database queries, improving application performance, security, and API response times",
      ],
      techStack: ["Java", "Spring Boot", "Spring Security", "REST API", "MySQL"],
    },
  ],
  projects: [
    {
      name: "DocuMind",
      github: "https://github.com/gptaditya",
      live: "https://documind.xadisri.in",
      techStack: [
        "Spring Boot",
        "OAuth 2.0",
        "AWS EC2/S3",
        "PostgreSQL",
        "Next.js",
        "Tailwind CSS",
        "REST API",
      ],
      description:
        "An AI-powered Document Intelligence platform enabling automated document analysis, data extraction, and intelligent insights generation, with secure document workflows and cloud-native deployment.",
      features: [
        "AI-Powered Document Analysis & Insights",
        "Secure REST APIs with OAuth 2.0 Authentication",
        "Document Processing via Open Router API",
        "Cloud Storage & Hosting on AWS (EC2/S3)",
        "Responsive UI with Next.js & Tailwind CSS",
      ],
    },
    {
      name: "MedAI",
      github: "https://github.com/gptaditya/MedAI",
      techStack: [
        "Spring Boot",
        "Spring Security",
        "Java",
        "Python",
        "RestTemplate",
        "Machine Learning",
        "MySQL",
      ],
      description:
        "MedAI is an AI-driven web application offering predictive healthcare insights, allowing users to predict diseases such as diabetes and cancer. It features secure user authentication, online video consultations, and payment processing.",
      features: [
        "User Authentication & Secure Login",
        "REST API Integration with Python",
        "Disease Prediction",
        "Database Management with MySQL",
        "Full-Stack Development",
      ],
    },
   
    {
      name: "Video Editing Platform",
      github: "https://github.com/gptaditya",
      live: "https://frontend-video-editing-app.vercel.app/",
      techStack: [
        "React.js",
        "Next.js",
        "Tailwind CSS",
        "Video.js",
        "Canvas API",
        "Web APIs",
      ],
      description:
        "A modern frontend video editing platform that allows users to edit videos directly in the browser. Features include trimming, filters, transitions, text overlays, and real-time preview with a beautiful, responsive UI.",
      features: [
        "Browser-based Video Editing",
        "Real-time Preview",
        "Multiple Filters & Effects",
        "Text Overlay & Transitions",
        "Responsive Design",
      ],
    },
  ],
  education: [
    {
      degree: "Bachelor of Technology (CSE)",
      institution: "Dev Bhoomi Uttarakhand University, Dehradun",
      duration: "2021 - 2025",
      marks: "83.03%",
    },
    {
      degree: "Secondary Education (PCM)",
      institution: "GIC Gangabhogpur, Rhishikesh",
      duration: "2020 - 2021",
      marks: "89.8%",
    },
    {
      degree: "High School Education (PCM)",
      institution: "GIC Gangabhogpur, Rhishikesh",
      duration: "2018 - 2019",
      marks: "88.2%",
    },
  ],
  achievements: [
    "INSPIRE AWARD 2021 - UTTARAKHAND BOARD",
    "Hackathon 2023 Session - DBUU University Competition",
  ],
  training: [
    {
      name: "Core Java",
      provider: "Internshala",
      marks: "84.7%",
    },
    {
      name: "Java Spring Boot",
      provider: "Scaler",
      marks: "87%",
    },
  ],
};
