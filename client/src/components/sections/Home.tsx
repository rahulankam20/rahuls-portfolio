import { motion } from "framer-motion";
import FloatingIcons from "@/components/FloatingIcons";

export default function Home() {
  return (
    <section id="home" className="min-h-screen relative overflow-hidden">
      <FloatingIcons />

      <div className="container mx-auto px-4 h-screen flex items-center relative z-10">
        <div className="max-w-2xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[#FFA94D] font-medium mb-4"
          >
            Hi, I'm Rahul Ankam
          </motion.h2>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Full Stack Developer & UI/UX Designer
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg text-muted-foreground mb-8"
          >
            I build exceptional digital experiences that combine beautiful design
            with powerful functionality
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-block bg-[#FFA94D] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#FF922B] transition-colors"
            >
              Get in touch
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}