import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { SiHtml5, SiCss3, SiJavascript, SiNodedotjs, SiExpress, SiMongodb } from "react-icons/si";

const icons = [
  { Icon: SiHtml5, delay: 0 },
  { Icon: SiCss3, delay: 1 },
  { Icon: SiJavascript, delay: 2 },
  { Icon: SiNodedotjs, delay: 3 },
  { Icon: SiExpress, delay: 4 },
  { Icon: SiMongodb, delay: 5 },
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
      // Set initial positions with higher opacity
      gsap.set(icon, {
        x: Math.random() * window.innerWidth * 0.7,
        y: Math.random() * window.innerHeight * 0.7,
        opacity: 0.4, // Higher initial opacity
        scale: 0.8
      });

      // Create floating animation with slower movement
      gsap.to(icon, {
        duration: 15, // Slower duration
        x: "+=100",
        y: "+=100",
        rotation: "random(-30, 30)",
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        delay: index * 0.5
      });

      // Create pulsing opacity animation
      gsap.to(icon, {
        duration: 3,
        opacity: 0.7, // Higher peak opacity
        scale: 1,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        delay: index * 0.3
      });
    });

    return () => {
      gsap.killTweensOf(iconElements);
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 -z-10 pointer-events-none overflow-hidden"
    >
      {icons.map(({ Icon }, index) => (
        <Icon
          key={index}
          className="absolute text-[#FFA94D] w-32 h-32 md:w-40 md:h-40" // Larger size
          style={{ filter: 'blur(1px)' }} // Slight blur for depth
        />
      ))}
    </div>
  );
}