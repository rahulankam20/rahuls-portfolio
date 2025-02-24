import { motion } from "framer-motion";
import { 
  SiHtml5, SiCss3, SiJavascript, SiReact, SiBootstrap, 
  SiTailwindcss, SiTypescript, SiNodedotjs, SiExpress,
  SiMysql, SiMongodb, SiGit, SiGithub 
} from "react-icons/si";

const skills = [
  { name: "HTML", icon: SiHtml5 },
  { name: "CSS", icon: SiCss3 },
  { name: "JavaScript", icon: SiJavascript },
  { name: "React.js", icon: SiReact },
  { name: "Bootstrap", icon: SiBootstrap },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Express.js", icon: SiExpress },
  { name: "MySQL", icon: SiMysql },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Git", icon: SiGit },
  { name: "GitHub", icon: SiGithub }
];

const education = [
  {
    degree: "Master of Computer Science",
    institution: "Example University",
    year: "2020-2022",
    details: "Specialized in Software Engineering and Web Technologies"
  },
  {
    degree: "Bachelor of Technology",
    institution: "Example Institute of Technology",
    year: "2016-2020",
    details: "Computer Science and Engineering"
  }
];

export default function About() {
  return (
    <section id="about" className="min-h-screen py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-12 text-[#FFA94D]">About Me</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left side - About text */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center"
            >
              <div className="prose prose-lg dark:prose-invert">
                <p>
                  I'm a passionate Full Stack Developer with over 5 years of experience
                  building web applications. I specialize in creating intuitive and
                  performant user experiences using modern technologies.
                </p>
                <p>
                  My journey in software development started with a curiosity about how
                  things work on the web. Since then, I've worked with various
                  technologies and frameworks, always staying up-to-date with the
                  latest industry trends.
                </p>
              </div>
            </motion.div>

            {/* Right side - Education */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-semibold mb-6">Education</h2>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div 
                    key={index}
                    className="bg-card rounded-lg p-6 border border-border"
                  >
                    <h3 className="text-xl font-medium text-[#FFA94D]">{edu.degree}</h3>
                    <p className="text-muted-foreground mt-1">{edu.institution}</p>
                    <p className="text-sm text-muted-foreground">{edu.year}</p>
                    <p className="mt-2">{edu.details}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Skills section below */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-16"
          >
            <h2 className="text-2xl font-semibold mb-8">Skills & Technologies</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {skills.map(({ name, icon: Icon }) => (
                <motion.div
                  key={name}
                  whileHover={{ scale: 1.05 }}
                  className="p-4 bg-card rounded-lg flex items-center gap-3"
                >
                  <Icon className="w-8 h-8 text-[#FFA94D]" />
                  <span className="font-medium">{name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}