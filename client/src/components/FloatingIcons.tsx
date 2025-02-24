import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { SiReact } from "react-icons/si";

const icons = [
  { Icon: SiReact, delay: 0 },
];

export default function FloatingIcons() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Setup initial positions
    const iconElements = Array.from(container.children);

    iconElements.forEach((icon, index) => {
      // Set initial positions
      gsap.set(icon, {
        x: Math.random() * window.innerWidth * 0.8,
        y: Math.random() * window.innerHeight * 0.8,
        opacity: 0.2 // Lighter opacity
      });

      // Create simple floating animation
      gsap.to(icon, {
        duration: "random(10, 20)",  // Faster, shorter movement
        x: "+=50",
        y: "+=30",
        rotation: "random(-45, 45)",
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        delay: index * 1
      });

      // Create opacity animation
      gsap.to(icon, {
        duration: 2,
        opacity: 0.6,  // Higher peak opacity
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        delay: index * 1
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
          className="absolute text-[#FFA94D] w-48 h-48"  // Increased size
        />
      ))}
    </div>
  );
}