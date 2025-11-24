import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, getProjectById } from "@/lib/data";
import Image from "next/image";

// 동적 라우트를 위한 params 생성
export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id.toString(),
  }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ id: string }>; // Promise 타입으로 변경!
}) {
  const { id } = await params; // await로 unwrap!
  const projectId = parseInt(id);
  const project = getProjectById(projectId);

  // 프로젝트를 찾지 못하면 404 페이지로
  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      {/* Back Button */}
      <section className="section pt-24 pb-8">
        <Link
          href="/projects"
          className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
        >
          ← Back to Projects
        </Link>
      </section>

      {/* Project Header */}
      <section className="section py-8">
        <div className="max-w-4xl">
          {/* Type Badge & Date */}
          <div className="flex items-center gap-3 mb-4">
            <span
              className={`inline-block px-4 py-2 rounded-full text-sm font-medium ${
                project.type === "team"
                  ? "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                  : "bg-green-500/20 text-green-400 border border-green-500/30"
              }`}
            >
              {project.type === "team"
                ? "👥 Team Project"
                : "👤 Personal Project"}
            </span>
            <span className="text-gray-500">📅 {project.period}</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            {project.title}
          </h1>

          {/* Description */}
          <p className="text-xl text-gray-400 leading-relaxed mb-8">
            {project.description}
          </p>

          {/* Links */}
          <div className="flex flex-wrap gap-4">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center gap-2"
              >
                🌐 Live Demo
              </a>
            )}
          </div>
        </div>
      </section>

      <section className="section py-12">
        <div className="max-w-4xl">
          {project.image ? (
            <div className="relative aspect-video bg-gray-800 rounded-xl border border-gray-800 overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 1024px"
              />
            </div>
          ) : (
            <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-gray-800 flex items-center justify-center">
              <p className="text-gray-600">Project Image Placeholder</p>
            </div>
          )}
        </div>
      </section>

      {/* Tech Stack */}
      <section className="section py-12 bg-gray-950/50">
        <div className="max-w-4xl">
          <h2 className="heading-3 mb-6">Tech Stack</h2>
          <div className="flex flex-wrap gap-3">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-gray-900 border border-gray-800 text-gray-300 rounded-lg font-medium hover:border-cyan-500 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section py-12">
        <div className="max-w-4xl">
          <h2 className="heading-3 mb-6">Key Features</h2>
          <ul className="space-y-4">
            {project.features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3 text-gray-300">
                <span className="text-cyan-400 text-xl flex-shrink-0 mt-1">
                  ✓
                </span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Project Info Grid */}
      <section className="section py-12 bg-gray-950/50">
        <div className="max-w-4xl grid md:grid-cols-2 gap-6">
          {/* Project Type */}
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
            <h3 className="text-sm text-gray-500 mb-2">Project Type</h3>
            <p className="text-lg font-medium">
              {project.type === "team" ? "Team Project" : "Personal Project"}
            </p>
          </div>

          {/* Duration */}
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
            <h3 className="text-sm text-gray-500 mb-2">Duration</h3>
            <p className="text-lg font-medium">{project.period}</p>
          </div>

          {/* Completion Date */}
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
            <h3 className="text-sm text-gray-500 mb-2">Completed</h3>
            <p className="text-lg font-medium">{project.date}</p>
          </div>

          {/* Tech Count */}
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
            <h3 className="text-sm text-gray-500 mb-2">Technologies Used</h3>
            <p className="text-lg font-medium">
              {project.tech.length} Technologies
            </p>
          </div>
        </div>
      </section>

      {/* Navigation to Other Projects */}
      <section className="section py-20">
        <div className="max-w-4xl">
          <h2 className="heading-3 mb-8 text-center">More Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projects
              .filter((p) => p.id !== project.id)
              .slice(0, 2)
              .map((otherProject) => (
                <Link
                  key={otherProject.id}
                  href={`/projects/${otherProject.id}`}
                  className="group bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-cyan-500 transition-all"
                >
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-3 ${
                      otherProject.type === "team"
                        ? "bg-blue-500/20 text-blue-400"
                        : "bg-green-500/20 text-green-400"
                    }`}
                  >
                    {otherProject.type === "team" ? "Team" : "Personal"}
                  </span>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">
                    {otherProject.title}
                  </h3>
                  <p className="text-gray-400 text-sm line-clamp-2">
                    {otherProject.description}
                  </p>
                </Link>
              ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/projects" className="btn-secondary">
              View All Projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
