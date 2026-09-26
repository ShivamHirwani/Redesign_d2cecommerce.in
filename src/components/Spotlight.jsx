// Custom spotlight glow, in the spirit of Aceternity UI's Spotlight component.
export default function Spotlight({ className = "" }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <div
        className="absolute -top-40 left-1/3 w-[60rem] h-[60rem] rounded-full opacity-30 blur-[110px]"
        style={{
          background:
            "radial-gradient(circle, rgba(201,180,250,0.55) 0%, rgba(143,123,214,0.25) 40%, transparent 70%)",
        }}
      />
      <div
        className="absolute top-10 right-0 w-[36rem] h-[36rem] rounded-full opacity-20 blur-[100px]"
        style={{
          background:
            "radial-gradient(circle, rgba(14,48,48,0.7) 0%, transparent 70%)",
        }}
      />
    </div>
  );
}
