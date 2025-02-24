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
    console.log("FloatingIcons mounted");
    const container = containerRef.current;
    if (!container) {
      console.log("Container not found");
      return;
    }

    console.log("Setting up animations");
    const iconElements = container.children;
    console.log(`Found ${iconElements.length} icons`);

    Array.from(iconElements).forEach((icon, index) => {
      // Random starting position within viewport
      const startX = Math.random() * (window.innerWidth - 100); // Subtract icon size
      const startY = Math.random() * (window.innerHeight - 100);

      gsap.set(icon, {
        x: startX,
        y: startY,
        opacity: 0.3
      });

      // Create a timeline for each icon
      const tl = gsap.timeline({ repeat: -1 });

      // Floating animation
      tl.to(icon, {
        duration: 10,
        x: startX + (Math.random() * 100 - 50),
        y: startY + (Math.random() * 100 - 50),
        ease: "none",
        yoyo: true,
        repeat: -1
      });

      // Separate timeline for fade animation
      gsap.to(icon, {
        duration: 2,
        opacity: 0.8,
        repeat: -1,
        yoyo: true,
        delay: icons[index].delay,
        ease: "power1.inOut"
      });
    });

    // Cleanup
    return () => {
      console.log("Cleaning up animations");
      gsap.killTweensOf(iconElements);
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 -z-10 overflow-hidden pointer-events-none"
      style={{ minHeight: '100vh' }}
    >
      {icons.map(({ Icon }, index) => (
        <Icon
          key={index}
          className="absolute text-[#FFA94D]/20 w-16 h-16 transform"
        />
      ))}
    </div>
  );
}