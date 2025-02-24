import { motion } from "framer-motion";
import { useState } from "react";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-featured e-commerce platform with real-time inventory management",
    preview: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800&q=80",
    url: "https://example.com/project1",
    technologies: ["React", "Node.js", "MongoDB"]
  },
  {
    title: "Task Management App",
    description: "Collaborative task management application with real-time updates",
    preview: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&w=800&q=80",
    url: "https://example.com/project2",
    technologies: ["Vue.js", "Express", "PostgreSQL"]
  },
  {
    title: "Social Media Dashboard",
    description: "Analytics dashboard for social media management",
    preview: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    url: "https://example.com/project3",
    technologies: ["React", "GraphQL", "AWS"]
  }
];

export default function Projects() {
  const [previewPosition, setPreviewPosition] = useState({ x: 0, y: 0 });
  const [activeProject, setActiveProject] = useState<number | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    setPreviewPosition({ x: e.clientX, y: e.clientY });
    setActiveProject(index);
  };

  const handleMouseLeave = () => {
    setActiveProject(null);
  };

  return (
    <section id="projects" className="min-h-screen py-24">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-12 text-[#FFA94D]"
        >
          Featured Projects
        </motion.h1>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseMove={(e) => handleMouseMove(e, index)}
              onMouseLeave={handleMouseLeave}
              className="p-8 bg-card rounded-lg border border-border cursor-none relative group"
            >
              <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
              <p className="text-muted-foreground mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm bg-muted rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 z-10"
                aria-label={`View ${project.title}`}
              />
            </motion.div>
          ))}
        </div>

        {/* Floating Preview */}
        {activeProject !== null && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed pointer-events-none z-50"
            style={{
              left: previewPosition.x,
              top: previewPosition.y,
              transform: 'translate(-50%, -50%)'
            }}
          >
            <div className="bg-card/80 backdrop-blur-sm border border-border rounded-lg shadow-lg overflow-hidden" style={{ width: '300px' }}>
              <div className="relative w-full aspect-video">
                <img 
                  src={projects[activeProject].preview} 
                  alt={projects[activeProject].title}
                  className="object-cover w-full h-full opacity-50"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-white font-medium flex items-center gap-2">
                    View Project <ExternalLink size={16} />
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}