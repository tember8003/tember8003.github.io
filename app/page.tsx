import Link from "next/link";
import { projects } from "@/lib/data";

export default function Home() {
  const recentProjects = projects.slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section pt-32 pb-20">
        <div className="max-w-4xl">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 bg-linear-to-b from-white to-gray-400 bg-clip-text text-transparent">
            Hello!
            <br />
            I'm Computer Science Student
          </h1>

          <p className="text-xl sm:text-2xl text-gray-400 mb-8 leading-relaxed">
            I develop backend systems with Spring Boot.
            <br />
            Focusing on clean code and scalable architecture.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link href="/projects" className="btn-primary">
              View Projects
            </Link>
            <Link href="/about" className="btn-secondary">
              Show Introduction
            </Link>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
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

      {/* Recent Projects Section */}
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

        {/* 프로젝트 카드 그리드 - section 안으로 이동! */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentProjects.map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.id}`}
              className="group bg-gray-900 border border-gray-800 rounded-lg overflow-hidden hover:border-cyan-500 transition-all duration-300 hover:scale-[1.02]"
            >
              {/* 프로젝트 이미지 placeholder */}
              <div className="aspect-video bg-linear-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                <p className="text-gray-600 text-sm">Image</p>
              </div>

              <div className="p-6">
                {/* 프로젝트 타입 뱃지 */}
                <span
                  className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-3 ${
                    project.type === "team"
                      ? "bg-blue-500/20 text-blue-400"
                      : "bg-green-500/20 text-green-400"
                  }`}
                >
                  {project.type === "team"
                    ? "Team Project"
                    : "Personal Project"}
                </span>

                <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* 기술 스택 태그 */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-800 text-gray-300 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-2 py-1 text-gray-500 text-xs">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section py-20 text-center">
        <div className="max-w-3xl mx-auto bg-linear-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl p-12">
          <h2 className="heading-2 mb-4">Contact!</h2>
          <p className="text-gray-400 mb-8 text-lg">
            I welcome the opportunity to actively engage in new projects and
            collaborations!
          </p>
          <Link href="/contact" className="btn-primary">
            Contact Link
          </Link>
        </div>
      </section>
    </div>
  );
}
