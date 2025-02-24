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
      // Randomize starting positions across the viewport
      const startX = Math.random() * window.innerWidth * 0.8;
      const startY = Math.random() * window.innerHeight * 0.8;

      // Set initial positions with high opacity
      gsap.set(icon, {
        x: startX,
        y: startY,
        opacity: 0.15,
        scale: 1,
        rotate: Math.random() * 360
      });

      // Create floating animation
      gsap.to(icon, {
        duration: 30,
        x: `+=${Math.random() * 300 - 150}`,
        y: `+=${Math.random() * 300 - 150}`,
        rotation: `+=${Math.random() * 360}`,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        delay: index * 0.2
      });

      // Create scale and opacity animation
      gsap.to(icon, {
        duration: 5,
        scale: 1.2,
        opacity: 0.25,
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
      className="absolute inset-0 pointer-events-none overflow-hidden -z-10"
      aria-hidden="true"
    >
      {icons.map(({ Icon }, index) => (
        <Icon
          key={index}
          className="absolute text-[#FFA94D] w-24 h-24 md:w-32 md:h-32"
          style={{ 
            filter: 'blur(1px)',
            willChange: 'transform'
          }}
        />
      ))}
    </div>
  );
}