import { useMemo } from "react";

// Custom meteor-trail effect, in the spirit of Magic UI's Meteors component.
export default function Meteors({ number = 14 }) {
  const meteors = useMemo(
    () =>
      Array.from({ length: number }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 6,
        duration: 3.5 + Math.random() * 3,
      })),
    [number]
  );

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {meteors.map((m) => (
        <span
          key={m.id}
          className="absolute top-0 h-0.5 w-0.5 rounded-full bg-violet shadow-[0_0_0_1px_#c9b4fa30]"
          style={{
            left: `${m.left}%`,
            animation: `meteor ${m.duration}s linear ${m.delay}s infinite`,
          }}
        >
          <span className="absolute top-1/2 -translate-y-1/2 right-0 h-px w-16 bg-gradient-to-r from-violet to-transparent" />
        </span>
      ))}
      <style>{`
        @keyframes meteor {
          0% { transform: translateY(-10%) translateX(0) rotate(35deg); opacity: 1; }
          100% { transform: translateY(120vh) translateX(-60vh) rotate(35deg); opacity: 0; }
        }
      `}</style>
    </div>
  );
}
