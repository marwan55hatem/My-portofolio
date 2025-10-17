export default function Skills() {
  const skills = [
    { category: 'Frontend', items: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js'] },
    { category: 'Backend', items: ['Node.js', 'PostgreSQL', 'REST APIs', 'GraphQL'] },
    { category: 'Tools', items: ['Git', 'Docker', 'VS Code', 'Figma'] },
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Skills</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skillGroup, index) => (
            <div 
              key={skillGroup.category}
              className="bg-secondary/50 backdrop-blur-sm rounded-2xl p-8 border border-border hover:border-primary transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-2xl font-bold mb-6 text-primary">{skillGroup.category}</h3>
              <ul className="space-y-3">
                {skillGroup.items.map((skill) => (
                  <li key={skill} className="text-muted-foreground">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
