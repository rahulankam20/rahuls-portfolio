import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import ThemeToggle from "./ThemeToggle";
import { Download } from "lucide-react";

export default function Navbar() {
  const [location] = useLocation();

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/">
          <a className="text-xl font-bold text-[#FFA94D]">Portfolio</a>
        </Link>

        <div className="flex items-center gap-6">
          <div className="hidden md:flex gap-4">
            {links.map((link) => (
              <Link key={link.href} href={link.href}>
                <a
                  className={`hover:text-[#FFA94D] transition-colors ${
                    location === link.href ? "text-[#FFA94D]" : ""
                  }`}
                >
                  {link.label}
                </a>
              </Link>
            ))}
          </div>
          
          <Button variant="outline" size="sm" className="gap-2">
            <Download size={16} />
            Resume
          </Button>
          
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
