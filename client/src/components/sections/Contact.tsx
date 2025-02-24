import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { FiGithub, FiTwitter, FiLinkedin } from "react-icons/fi";

export default function Contact() {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
  };

  return (
    <section id="contact" className="min-h-screen py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-8 text-[#FFA94D]">Get in Touch</h1>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Input
                placeholder="Your Name"
                required
                className="bg-card"
              />
            </div>
            
            <div>
              <Input
                type="email"
                placeholder="Email Address"
                required
                className="bg-card"
              />
            </div>
            
            <div>
              <Textarea
                placeholder="Your Message"
                required
                className="bg-card min-h-[150px]"
              />
            </div>
            
            <Button type="submit" className="w-full bg-[#FFA94D] hover:bg-[#FF922B]">
              Send Message
            </Button>
          </form>

          <div className="mt-12">
            <h2 className="text-xl font-semibold mb-4">Connect with me</h2>
            <div className="flex gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-card rounded-full hover:bg-[#FFA94D] hover:text-white transition-colors"
              >
                <FiGithub size={24} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-card rounded-full hover:bg-[#FFA94D] hover:text-white transition-colors"
              >
                <FiTwitter size={24} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-card rounded-full hover:bg-[#FFA94D] hover:text-white transition-colors"
              >
                <FiLinkedin size={24} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
