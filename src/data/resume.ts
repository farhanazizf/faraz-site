import type { Experience, Education, Portfolio, PersonalInfo } from "../types";

export const personalInfo: PersonalInfo = {
  name: "Farhan Aziz Fajarrudin",
  title: "Fullstack Software Engineer",
  location: "Jakarta, Indonesia",
  phone: "+6285776841027",
  email: "farhanazizf7@gmail.com",
  linkedin: "linkedin.com/in/farhanazizf",
  github: "github.com/farhanazizf",
  portfolio: "https://s.id/portfolio_2022",
};

export const skills = {
  frontend: [
    "React",
    "TypeScript",
    "JavaScript",
    "Next.js",
    "Vue.js",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "SASS",
  ],
  backend: [
    "Node.js",
    "Express.js",
    "Python",
    "Django",
    "FastAPI",
    "PHP",
    "Laravel",
    "REST APIs",
    "GraphQL",
  ],
  mobile: ["React Native", "Flutter", "Ionic", "Android", "iOS"],
  database: [
    "PostgreSQL",
    "MySQL",
    "MongoDB",
    "Redis",
    "Firebase",
    "Supabase",
    "Prisma",
    "Docker",
    "AWS",
    "Git",
  ],
};

export const experiences: Experience[] = [
  {
    id: "diamond-food",
    company: "Diamond Food Indonesia Tbk",
    position: "Senior Software Engineer",
    location: "Technology Team for Large Scale FMCG B2B Commerce",
    startDate: "Jan 2025",
    endDate: "now",
    description:
      "Leading strategic migration and development of B2B commerce platform",
    techStack: [
      "React",
      "Next.js",
      "Node.js",
      "AWS Environment",
      "RestAPI",
      "Firebase",
      "CI/CD",
      "TypeScript",
    ],
    achievements: [
      "Led the strategic migration of the entire B2B commerce platform from a third-party vendor to an in-house model, dramatically increasing development agility and enabling rapid pivots in response to market demands.",
      "Engineered and scaled the core infrastructure for a national B2B commerce platform, reliably processing over IDR 1 billion in daily transactions and handling 4,000-6,000 API requests per day.",
      "Acted as the technical liaison for national commercial teams, translating complex business needs from hundreds of users into actionable engineering tasks optimized for the B2B platform roadmap.",
    ],
  },
  {
    id: "govtech-edu",
    company: "GovTech Edu @ Telkom Indonesia",
    position: "Software Engineer",
    location:
      "Large Scale Technology Team for Ministry of Education Culture Research and Technology",
    startDate: "Mar 2022",
    endDate: "Dec 2024",
    description:
      "Building technologies to create irreversible transformation to improve student learning outcomes",
    techStack: [
      "React",
      "Next.js",
      "Vue.js",
      "Node.js",
      "GCP Environment",
      "RestAPI",
      "Firebase",
      "CI/CD",
      "Laravel",
      "Go",
    ],
    achievements: [
      "Building technologies to create irreversible transformation to improve student learning outcomes.",
      "Work in a team to design and develop software that can answer according to the needs of the production team.",
      "Update and maintain high-quality software and service systems by implementing good technology development practices and adopting a data-driven and customer-centric culture in software development.",
    ],
  },
  {
    id: "bagus-harapan",
    company: "Bagus Harapan Tritunggal",
    position: "Software Engineer Freelance",
    location: "Tech Team for Ministry of Marine Affairs and Fisheries",
    startDate: "Sept 2024",
    endDate: "Nov 2024",
    description: "Design, develop, and maintain user-friendly web applications",
    techStack: ["React", "JavaScript", "CI/CD"],
    achievements: [
      "Design, develop, and maintain user-friendly web applications using modern technologies and frameworks to deliver seamless user experiences.",
      "Collaborate with cross-functional teams, participate in agile development processes, and ensure effective communication for successful project coordination and delivery.",
    ],
  },
  {
    id: "revou",
    company: "RevoU",
    position: "Software Engineer Mentor",
    location:
      "Indonesia's Professional Skilling Platform Software Engineer Mentor",
    startDate: "April 2024",
    endDate: "Jun 2024",
    description:
      "Mentoring students for software development on Kampus Merdeka Programs",
    techStack: ["GIT", "HTML", "REST API", "Data Analytics", "JavaScript"],
    achievements: [
      "Mentoring ~40 students for software development on Kampus Merdeka Programs.",
      "Collaborating with the internal team and mentor for review curriculum software engineering of RevoU program.",
    ],
  },
  {
    id: "sarana-multigriya",
    company: "PT. Sarana Multigriya Financial (Persero)",
    position: "Software Engineer Freelance",
    location: "Government Company under Ministry of Finance Indonesia",
    startDate: "Sept 2020",
    endDate: "Feb 2022",
    description:
      "Collaborating with design and backend team for system development",
    techStack: [
      "Node.js",
      "React Native",
      "React.js",
      "TypeScript",
      "JavaScript",
    ],
    achievements: [
      "Collaborating with the design and backend team regarding system development.",
      "Design system interface according to design.",
      "Perform data integration from database to interface.",
    ],
  },
  {
    id: "achiko-teknologi",
    company: "PT. Achiko Teknologi Indonesia",
    position: "Software Engineer, Mobile and Web",
    location: "Startup Technology with Global Teams",
    startDate: "Feb 2020",
    endDate: "Feb 2022",
    description: "Design, develop, and maintain user-friendly web applications",
    techStack: [
      "Node.js",
      "React Native",
      "React.js",
      "TypeScript",
      "JavaScript",
      "Ionic",
      "Ios",
      "Android",
      "Mobile Apps",
    ],
    achievements: [
      "Design, develop, and maintain user-friendly web applications using modern technologies and frameworks to deliver seamless user experiences.",
      "Design scalable system architectures, optimize performance, and employ techniques like caching and database tuning to enhance speed, efficiency, and reliability across web platforms.",
      "Collaborate with cross-functional teams, participate in agile development processes, and ensure effective communication for successful project coordination and delivery.",
      "Develop and execute comprehensive testing strategies, implement continuous integration and delivery pipelines, and ensure the highest quality standards for bug-free web platforms.",
    ],
  },
  {
    id: "trans-news",
    company: "PT. Trans News Corpora (CNN Indonesia)",
    position: "Research Development Specialist",
    location: "Jakarta, Indonesia",
    startDate: "Sept 2019",
    endDate: "Feb 2020",
    description: "Designing database system and building website system",
    techStack: ["Git", "TypeScript", "JavaScript"],
    achievements: [
      "Designing database system",
      "Design & build website system",
      "Implementing the created system",
    ],
  },
  {
    id: "indonesian-institute",
    company: "Indonesian Institute of Science",
    position: "Embedded Project Engineer – Internship",
    location: "Bogor, Indonesia",
    startDate: "Feb 2019",
    endDate: "Apr 2019",
    description: "IoT System Development with end-to-end solutions",
    techStack: ["IoT", "C++", "Mobile Apps", "Embedded System"],
    achievements: [
      "IoT System Development: Design and develop end-to-end IoT systems, including hardware, firmware, and software components, to enable connectivity and data exchange between devices. Implement protocols such as MQTT or CoAP and leverage IoT platforms to build scalable and secure IoT solutions.",
      "Sensor Integration and Data Analytics: Integrate sensors, actuators, and IoT devices into the system architecture, ensuring seamless communication and data collection. Analyze and process sensor data using tools like machine learning and data analytics techniques to derive valuable insights and enable data-driven decision-making.",
      "Security and Device Management: Implement robust security measures to protect IoT networks, devices, and data from unauthorized access or breaches. Manage device lifecycle, including provisioning, authentication, and remote firmware updates, ensuring secure and efficient operation of IoT infrastructure.",
    ],
  },
];

export const education: Education[] = [
  {
    id: "perbanas",
    institution: "Perbanas Institute",
    degree: "Bachelor Degree of Information System",
    location: "Indonesia",
    startDate: "2022",
    endDate: "2024",
    gpa: "3.52 out of 4.00",
  },
  {
    id: "bogor-agricultural",
    institution: "Bogor Agricultural Institute",
    degree: "Associate Degree of Computer Engineering",
    location: "Indonesia",
    startDate: "2016",
    endDate: "2019",
    gpa: "3.45 out of 4.00",
  },
];

export const portfolios: Portfolio[] = [
  {
    id: "sukanda-onelink",
    title: "Sukanda Onelink",
    description:
      "Comprehensive B2B e-commerce platform for food and beverage industry with product catalog, order management, and business solutions.",
    url: "https://www.sukandaonelink.com",
    images: [
      "/screenshots/sol-1.png",
      "/screenshots/sol-2.png",
      "/screenshots/sol-3.png",
      "/screenshots/sol-4.png",
    ],
    techStack: [
      "React",
      "TypeScript",
      "NodeJS",
      "Fastify",
      "SAP",
      "AWS",
      "E-commerce",
      "B2B Platform",
    ],
    featured: true,
  },
  {
    id: "kampus-merdeka",
    title: "Kampus Merdeka Ecosystem",
    description:
      "A comprehensive educational platform for Indonesian students to take control of their future. Features program discovery, application management, and student progress tracking.",
    url: "https://kampusmerdeka.kemdikbud.go.id",
    images: [
      "/screenshots/kampus-merdeka-1.jpg",
      "/screenshots/kampus-merdeka-2.jpg",
    ],
    techStack: ["React", "Next.js", "Node.js", "GCP", "Firebase", "TypeScript"],
    featured: true,
  },
  {
    id: "marine-affairs",
    title: "Marine Affairs Management System",
    description:
      "Government web application for Ministry of Marine Affairs and Fisheries to manage marine resources and fisheries data across Indonesia.",
    images: ["/screenshots/marine-affairs-1.jpg"],
    techStack: ["React", "JavaScript", "REST API", "CI/CD"],
    featured: false,
  },
  {
    id: "financial-system",
    title: "Multigriya Financial System",
    description:
      "Government financial management system for PT. Sarana Multigriya Financial under Ministry of Finance Indonesia.",
    images: ["/screenshots/financial-system-1.jpg"],
    techStack: ["React Native", "React.js", "Node.js", "TypeScript"],
    featured: false,
  },
  {
    id: "iot-monitoring",
    title: "IoT Environmental Monitoring",
    description:
      "End-to-end IoT system for environmental monitoring with real-time data collection, analysis, and visualization dashboard.",
    images: ["/screenshots/iot-monitoring-1.jpg"],
    techStack: ["IoT", "C++", "Mobile Apps", "MQTT", "Data Analytics"],
    featured: false,
  },
  {
    id: "person-apps-teman-sehat",
    title: "Person Apps - Teman Sehat",
    description:
      "An apps provide for personal user for healthcare especially covid, features is booking test, booking vaccination, voucher purchase and others.",
    url: "https://www.person.teman-sehat.co.id",
    images: ["/screenshots/person-apps-1.jpg"],
    techStack: ["Javascript", "React JS (Ionic)", "Web Apps", "Android"],
    featured: false,
  },
];
