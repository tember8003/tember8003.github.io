"use client";

import Link from "next/link";
import { useState } from "react";
import { projects } from "@/lib/data";

export default function ProjectsPage() {
  const [filter, setFilter] = useState<"all" | "team" | "personal">("all");

  // 필터링된 프로젝트
  const filteredProjects = projects.filter((project) => {
    if (filter === "all") return true;
    return project.type === filter;
  });

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="section pt-32 pb-12">
        <div className="max-w-4xl">
          <h1 className="heading-1 mb-6">Projects</h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            Here are some of the projects I've worked on. Each project
            represents a learning experience and showcases different skills.
          </p>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="section py-8">
        <div className="flex flex-wrap gap-3 justify-center">
          <button
            onClick={() => setFilter("all")}
            className={`px-6 py-2 rounded-lg font-medium transition-all ${
              filter === "all"
                ? "bg-cyan-500 text-black"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700"
            }`}
          >
            All Projects ({projects.length})
          </button>
          <button
            onClick={() => setFilter("team")}
            className={`px-6 py-2 rounded-lg font-medium transition-all ${
              filter === "team"
                ? "bg-blue-500 text-black"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700"
            }`}
          >
            Team Projects ({projects.filter((p) => p.type === "team").length})
          </button>
          <button
            onClick={() => setFilter("personal")}
            className={`px-6 py-2 rounded-lg font-medium transition-all ${
              filter === "personal"
                ? "bg-green-500 text-black"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700"
            }`}
          >
            Personal Projects (
            {projects.filter((p) => p.type === "personal").length})
          </button>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section py-12">
        {filteredProjects.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg">No projects found.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <Link
                key={project.id}
                href={`/projects/${project.id}`}
                className="group bg-gray-900 border border-gray-800 rounded-lg overflow-hidden hover:border-cyan-500 transition-all duration-300 hover:scale-[1.02]"
              >
                {/* Project Image */}
                <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                  <p className="text-gray-600 text-sm">Image</p>
                </div>

                <div className="p-6">
                  {/* Project Type Badge & Date */}
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                        project.type === "team"
                          ? "bg-blue-500/20 text-blue-400"
                          : "bg-green-500/20 text-green-400"
                      }`}
                    >
                      {project.type === "team"
                        ? "Team Project"
                        : "Personal Project"}
                    </span>
                    <span className="text-xs text-gray-500">
                      {project.date}
                    </span>
                  </div>

                  {/* Project Title */}
                  <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>

                  {/* Project Description */}
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Project Period */}
                  <div className="mb-4 text-sm text-gray-500">
                    📅 {project.period}
                  </div>

                  {/* Tech Stack Tags */}
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
        )}
      </section>
    </div>
  );
}
