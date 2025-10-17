export default function Projects() {
  const projects = [
    {
      title: 'Project One',
      description: 'A full-stack web application built with React and Node.js',
      tech: ['React', 'Node.js', 'PostgreSQL'],
    },
    {
      title: 'Project Two',
      description: 'Mobile-responsive e-commerce platform with modern UI',
      tech: ['Next.js', 'Tailwind', 'Stripe'],
    },
    {
      title: 'Project Three',
      description: 'Real-time collaboration tool with WebSocket integration',
      tech: ['TypeScript', 'Socket.io', 'Redis'],
    },
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <article 
              key={project.title}
              className="bg-secondary/50 backdrop-blur-sm rounded-2xl p-6 border border-border hover:border-primary transition-all duration-300 hover:scale-105 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
              <p className="text-muted-foreground mb-6">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span 
                    key={tech}
                    className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
