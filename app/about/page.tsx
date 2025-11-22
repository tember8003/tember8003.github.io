export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section pt-32 pb-20">
        <div className="max-w-4xl">
          <h1 className="heading-1 mb-6">About Me</h1>
          <p className="text-xl text-gray-400 leading-relaxed mb-8">
            Hello! I'm a Computer Science student passionate about backend
            development. I enjoy building scalable systems and writing clean,
            maintainable code.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section py-20 bg-gray-950/50">
        <h2 className="heading-2 mb-12">Skills</h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
          {/* Backend */}
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4 text-cyan-400">Backend</h3>
            <div className="flex flex-wrap gap-2">
              {[
                "Java",
                "Spring Boot",
                "JPA/Hibernate",
                "MySQL",
                "PostgreSQL",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-2 bg-gray-800 text-gray-300 rounded-lg text-sm border border-gray-700 hover:border-cyan-500 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* DevOps & Tools */}
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4 text-blue-400">
              DevOps & Tools
            </h3>
            <div className="flex flex-wrap gap-2">
              {["Docker", "AWS", "Git/GitHub", "Redis", "Nginx"].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-2 bg-gray-800 text-gray-300 rounded-lg text-sm border border-gray-700 hover:border-blue-500 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Frontend */}
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4 text-green-400">Frontend</h3>
            <div className="flex flex-wrap gap-2">
              {[
                "React",
                "Next.js",
                "TypeScript",
                "Tailwind CSS",
                "JavaScript",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-2 bg-gray-800 text-gray-300 rounded-lg text-sm border border-gray-700 hover:border-green-500 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Other */}
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4 text-purple-400">Other</h3>
            <div className="flex flex-wrap gap-2">
              {[
                "REST API",
                "GraphQL",
                "WebSocket",
                "JWT",
                "OAuth 2.0",
                "ElasticSearch",
                "MongoDB",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm border border-gray-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education & Experience */}
      <section className="section py-20">
        <h2 className="heading-2 mb-12">Education & Experience</h2>

        <div className="max-w-3xl space-y-8">
          {/* Education */}
          <div className="relative pl-8 border-l-2 border-cyan-500">
            <div className="absolute -left-2 top-0 w-4 h-4 bg-cyan-500 rounded-full" />
            <div className="mb-1 text-sm text-cyan-400 font-medium">
              2022 - Present
            </div>
            <h3 className="text-xl font-bold mb-2">MyongJi University</h3>
            <p className="text-gray-400">Computer Science Major</p>
            <ul className="mt-3 space-y-1 text-gray-400 text-sm">
              <li>• GPA: 3.7/4.5</li>
            </ul>
          </div>

          <div className="relative pl-8 border-l-2 border-blue-500">
            <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-500 rounded-full" />
            <div className="mb-1 text-sm text-blue-400 font-medium">
              2024.03 - 2024.08
            </div>
            <h3 className="text-xl font-bold mb-2">Codeit Boost 1기 백엔드</h3>
            <ul className="mt-3 space-y-1 text-gray-400 text-sm">
              <li>• Developed RESTful APIs using Node.js & Postgresql</li>
              <li>• Collaborated with frontend team</li>
            </ul>
          </div>

          {/* Experience 2 */}
          <div className="relative pl-8 border-l-2 border-blue-300">
            <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-400 rounded-full" />
            <div className="mb-1 text-sm text-blue-300 font-medium">
              2024.08 - Present
            </div>
            <h3 className="text-xl font-bold mb-2">MJSEC</h3>
            <p className="text-gray-400">
              University Software Engineering Course
            </p>
            <ul className="mt-3 space-y-1 text-gray-400 text-sm">
              <li>
                • Led a team of 5 students to build an e-commerce platform
              </li>
              <li>
                • Implemented payment system integration using Iamport API
              </li>
              <li>• Achieved Best Project Award</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Interests */}
      <section className="section py-20 bg-gray-950/50">
        <h2 className="heading-2 mb-12 text-center">Interests & Hobbies</h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { icon: "💻", title: "Coding", desc: "Building side projects" },
            { icon: "📚", title: "Reading", desc: "Tech blogs & books" },
            { icon: "🎮", title: "Gaming", desc: "Strategy games" },
            { icon: "🏃", title: "Exercise", desc: "Running & fitness" },
          ].map((interest) => (
            <div
              key={interest.title}
              className="bg-gray-900 border border-gray-800 rounded-lg p-6 text-center hover:border-cyan-500 transition-all duration-300"
            >
              <div className="text-4xl mb-3">{interest.icon}</div>
              <h3 className="font-bold mb-2">{interest.title}</h3>
              <p className="text-sm text-gray-400">{interest.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section py-20 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="heading-2 mb-4">Let's Work Together</h2>
          <p className="text-gray-400 mb-8 text-lg">
            I'm always open to discussing new projects or opportunities.
          </p>
          <div className="flex justify-center gap-4">
            <a href="mailto:your.email@example.com" className="btn-primary">
              Email Me
            </a>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
