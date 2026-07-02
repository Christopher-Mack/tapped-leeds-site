import { useEffect, useState } from "react";

export default function CursorGlow() {
  const [position, setPosition] = useState({ x: -200, y: -200 });

  useEffect(() => {
    const move = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="pointer-events-none fixed z-0 h-[500px] w-[500px] rounded-full blur-3xl"
      style={{
        left: position.x - 250,
        top: position.y - 250,
        background:
          "radial-gradient(circle, rgba(245,158,11,0.18) 0%, rgba(245,158,11,0.06) 40%, transparent 75%)",
        transition: "left 120ms linear, top 120ms linear",
      }}
    />
  );
}