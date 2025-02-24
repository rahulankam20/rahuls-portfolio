import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { SiReact, SiNodedotjs, SiJavascript } from "react-icons/si";

const icons = [
  { Icon: SiReact, delay: 0 },
  { Icon: SiNodedotjs, delay: 2 },
  { Icon: SiJavascript, delay: 4 },
];

export default function FloatingIcons() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Setup initial positions
    const iconElements = Array.from(container.children);

    iconElements.forEach((icon, index) => {
      // Set initial random positions
      gsap.set(icon, {
        x: Math.random() * window.innerWidth * 0.8,
        y: Math.random() * window.innerHeight * 0.8,
        opacity: 0.2
      });

      // Create simple floating animation
      gsap.to(icon, {
        duration: "random(15, 20)",
        x: "+=50",
        y: "+=30",
        rotation: "random(-45, 45)",
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        delay: index * 2
      });

      // Create opacity animation
      gsap.to(icon, {
        duration: 3,
        opacity: 0.6,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        delay: index
      });
    });

    return () => {
      gsap.killTweensOf(iconElements);
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 -z-10 pointer-events-none"
    >
      {icons.map(({ Icon }, index) => (
        <Icon
          key={index}
          className="absolute text-[#FFA94D]/20 w-20 h-20"
        />
      ))}
    </div>
  );
}