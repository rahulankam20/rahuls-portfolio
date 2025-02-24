import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "./ThemeToggle";
import { Download } from "lucide-react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  const links = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = section.clientHeight;
        const sectionId = section.getAttribute("id") || "";

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/RAHUL ANKAM RESUME.pdf';
    link.download = 'RAHUL ANKAM RESUME.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="w-10 h-10 rounded-full bg-[#FFA94D] flex items-center justify-center">
          <span className="text-white font-bold">RA</span>
        </div>

        <div className="flex items-center gap-6">
          <div className="hidden md:flex gap-4">
            {links.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`hover:text-[#FFA94D] transition-colors ${
                  activeSection === link.href.slice(1) ? "text-[#FFA94D]" : ""
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <Button 
            variant="outline" 
            size="sm" 
            className="gap-2"
            onClick={handleDownloadResume}
          >
            <Download size={16} />
            Resume
          </Button>

          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}