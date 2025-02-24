import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { SiReact, SiJavascript, SiTypescript, SiNodedotjs } from "react-icons/si";

const icons = [
  { Icon: SiJavascript, delay: 0 },
  { Icon: SiReact, delay: 1 },
  { Icon: SiTypescript, delay: 2 },
  { Icon: SiNodedotjs, delay: 3 },
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
      const startX = Math.random() * window.innerWidth * 0.8;
      const startY = Math.random() * window.innerHeight * 0.8;

      // Set initial positions
      gsap.set(icon, {
        x: startX,
        y: startY,
        opacity: 0.4,
        scale: 1,
        rotate: Math.random() * 360
      });

      // Create floating animation
      gsap.to(icon, {
        duration: 15,
        x: `+=${Math.random() * 200 - 100}`,
        y: `+=${Math.random() * 200 - 100}`,
        rotation: `+=${Math.random() * 360}`,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        delay: index * 0.3
      });

      // Create scale and opacity animation
      gsap.to(icon, {
        duration: 4,
        scale: 1.2,
        opacity: 0.6,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        delay: index * 0.2
      });
    });

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
          className="absolute text-[#FFA94D] w-16 h-16 md:w-24 md:h-24"
          style={{ 
            filter: 'blur(1px)',
            willChange: 'transform'
          }}
        />
      ))}
    </div>
  );
}