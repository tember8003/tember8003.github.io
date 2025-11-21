import Link from "next/link";
import { projects } from "@/lib/data";

export default function Home() {
  const recentProjects = projects.slice(0, 3);

  return (
    <div className="min-h-screen">
      <section className="section pt-32 pb-20">
        <div className="max-w-4xl">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 bg-linear-to-b from-white to-gray-400 bg-clip-text text-transparent">
            Hello!
            <br />
            I'm Computer Science Student
          </h1>

          <p className="text-xl sm:text-2xl text-gray-400 mb-8 leading-relaxed">
            I develop with Spring Boot
            <br />
            Good.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link href="/projects" className="btn-primary">
              Show Project
            </Link>
            <Link href="/about" className="btn-secondary">
              Show Introduction
            </Link>
          </div>
        </div>
      </section>

      <section className="section py-20 bg-gray-950/50">
        <h2 className="heading-2 text-center mb-12">Tech Stack</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            "Java",
            "Spring Boot",
            "JPA",
            "MySQL",
            "Redis",
            "Docker",
            "AWS",
            "Git",
          ].map((tech) => (
            <div
              key={tech}
              className="bg-gray-900 border border-gray-800 rounded-lg p-6 text-center hover:border-cyan-500 transition-all duration-300 hover:scale-105"
            >
              <p className="font-medium text-gray-200">{tech}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section py-20">
        <div className="flex items-center justify-between mb-12">
          <h2 className="heading-2 mb-0">Recent Project</h2>
          <Link
            href="/projects"
            className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium"
          >
            Show All →
          </Link>
        </div>
      </section>
    </div>
  );
}
