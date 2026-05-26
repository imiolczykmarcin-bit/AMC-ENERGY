import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

type Props = {
  text: string;
  as?: ElementType;
  className?: string;
  delay?: number;
  children?: ReactNode;
};

/**
 * Lightweight heading reveal: a single fade + small translate when entering
 * the viewport. No per-word stagger (cheaper, smoother on long scrolls).
 */
export function TextReveal({ text, as: Tag = "h2", className = "", delay = 0 }: Props) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as never}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(14px)",
        transition: "opacity 900ms ease, transform 900ms ease",
        transitionDelay: `${delay}ms`,
        willChange: "opacity, transform",
      }}
    >
      {text}
    </Tag>
  );
}
