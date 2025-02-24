import { motion } from "framer-motion";
import { SiReact, SiTypescript, SiNodedotjs, SiPython, SiJavascript, SiDocker } from "react-icons/si";

const skills = [
  { name: "React", icon: SiReact },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Python", icon: SiPython },
  { name: "JavaScript", icon: SiJavascript },
  { name: "Docker", icon: SiDocker },
];

export default function About() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-8 text-[#FFA94D]">About Me</h1>
          
          <div className="prose prose-lg dark:prose-invert mb-12">
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

          <h2 className="text-2xl font-semibold mb-6">Skills & Technologies</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
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
      </div>
    </div>
  );
}
