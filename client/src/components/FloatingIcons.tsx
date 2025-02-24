import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { SiReact, SiTypescript, SiNodedotjs, SiPython, SiJavascript, SiDocker, SiKubernetes, SiAmazon } from "react-icons/si";

const icons = [
  { Icon: SiReact, delay: 0 },
  { Icon: SiTypescript, delay: 2 },
  { Icon: SiNodedotjs, delay: 4 },
  { Icon: SiPython, delay: 1 },
  { Icon: SiJavascript, delay: 3 },
  { Icon: SiDocker, delay: 5 },
  { Icon: SiKubernetes, delay: 2.5 },
  { Icon: SiAmazon, delay: 1.5 },
];

export default function FloatingIcons() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const iconElements = container.children;

    Array.from(iconElements).forEach((icon, index) => {
      // Initial position
      gsap.set(icon, {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        opacity: 0.3
      });

      // Floating animation
      gsap.to(icon, {
        duration: 20,
        x: `+=${Math.random() * 200 - 100}`,
        y: `+=${Math.random() * 200 - 100}`,
        repeat: -1,
        yoyo: true,
        ease: "none"
      });

      // Fade animation
      gsap.to(icon, {
        duration: 4,
        opacity: 0,
        repeat: -1,
        yoyo: true,
        delay: icons[index].delay,
        ease: "power2.inOut"
      });
    });
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 -z-10 overflow-hidden">
      {icons.map(({ Icon, delay }, index) => (
        <Icon
          key={index}
          className="absolute text-[#FFA94D]/20 w-12 h-12"
          style={{ animationDelay: `${delay}s` }}
        />
      ))}
    </div>
  );
}