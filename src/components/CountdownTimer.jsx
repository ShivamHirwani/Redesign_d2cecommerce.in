import { useEffect, useState } from "react";

function getTimeLeft(target) {
  const diff = Math.max(0, target - Date.now());
  return {
    d: Math.floor(diff / 86400000),
    h: Math.floor((diff / 3600000) % 24),
    m: Math.floor((diff / 60000) % 60),
    s: Math.floor((diff / 1000) % 60),
  };
}

export default function CountdownTimer() {
  // Rolling 3-day flash-sale window
  const [target] = useState(() => Date.now() + 3 * 86400000);
  const [t, setT] = useState(() => getTimeLeft(target));

  useEffect(() => {
    const id = setInterval(() => setT(getTimeLeft(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  const box = (val, label) => (
    <div className="bg-primary text-white rounded-lg px-3 py-2 text-center min-w-[52px]">
      <div className="font-bold text-lg leading-none">{String(val).padStart(2, "0")}</div>
      <div className="text-[10px] text-white/60 mt-1">{label}</div>
    </div>
  );

  return (
    <div className="flex gap-2">
      {box(t.d, "D")}
      {box(t.h, "H")}
      {box(t.m, "M")}
      {box(t.s, "S")}
    </div>
  );
}
