export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  image: string;
  github?: string;
  demo?: string;
  date: string;
  type: "team" | "personal";
  period: string;
  features: string[];
}

export interface NavLink {
  name: string;
  href: string;
}
