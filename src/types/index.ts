export interface Experience {
  id: string;
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  techStack: string[];
  achievements: string[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  location: string;
  startDate: string;
  endDate: string;
  gpa?: string;
}

export interface Portfolio {
  id: string;
  title: string;
  description: string;
  url?: string;
  images: string[];
  techStack: string[];
  featured?: boolean;
  github?: boolean;
}

export interface PersonalInfo {
  name: string;
  title: string;
  location: string;
  phone: string;
  email: string;
  linkedin: string;
  github: string;
  portfolio: string;
}

export interface NavItem {
  id: string;
  label: string;
  href: string;
}
