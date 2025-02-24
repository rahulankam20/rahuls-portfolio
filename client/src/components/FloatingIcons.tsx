import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { 
  SiHtml5, SiCss3, SiJavascript, SiReact, SiBootstrap, 
  SiTailwindcss, SiTypescript, SiNodedotjs, SiExpress,
  SiMysql, SiMongodb, SiGit, SiGithub 
} from "react-icons/si";

const icons = [
  { Icon: SiHtml5, delay: 0 },
  { Icon: SiCss3, delay: 1 },
  { Icon: SiJavascript, delay: 2 },
  { Icon: SiReact, delay: 3 },
  { Icon: SiBootstrap, delay: 4 },
  { Icon: SiTailwindcss, delay: 5 },
  { Icon: SiTypescript, delay: 6 },
  { Icon: SiNodedotjs, delay: 7 },
  { Icon: SiExpress, delay: 8 },
  { Icon: SiMysql, delay: 9 },
  { Icon: SiMongodb, delay: 10 },
  { Icon: SiGit, delay: 11 },
  { Icon: SiGithub, delay: 12 }
];

export default function FloatingIcons() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Clear any existing animations
    gsap.killTweensOf(container.children);

    // Setup initial positions
    const iconElements = Array.from(container.children);

    iconElements.forEach((icon, index) => {
      // Randomize starting positions
      const startX = Math.random() * window.innerWidth;
      const startY = Math.random() * (window.innerHeight * 0.7); // Keep within hero section

      // Set initial positions
      gsap.set(icon, {
        x: startX,
        y: startY,
        opacity: 0,
        scale: 0.8,
        rotate: Math.random() * 360
      });

      // Create floating animation
      gsap.to(icon, {
        duration: "random(15, 25)",
        x: `+=${Math.random() * 300 - 150}`,
        y: `+=${Math.random() * 200 - 100}`,
        rotation: `+=${Math.random() * 360}`,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        delay: index * 0.2
      });

      // Create independent fade animation
      gsap.to(icon, {
        duration: "random(2, 4)",
        opacity: 0.6,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        delay: index * 0.3
      });

      // Create scale animation
      gsap.to(icon, {
        duration: "random(3, 5)",
        scale: 1.2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        delay: index * 0.4
      });
    });

    // Cleanup function
    return () => {
      gsap.killTweensOf(iconElements);
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 pointer-events-none overflow-hidden -z-10"
      aria-hidden="true"
    >
      {icons.map(({ Icon }, index) => (
        <Icon
          key={index}
          className="absolute text-[#FFA94D] w-12 h-12 md:w-16 md:h-16"
          style={{ 
            filter: 'blur(1px)',
            willChange: 'transform, opacity'
          }}
        />
      ))}
    </div>
  );
}