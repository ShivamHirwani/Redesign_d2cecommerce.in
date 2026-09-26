import { motion } from "framer-motion";

export default function BrandCard({ brand, detailed = false }) {
  const logo = new URL(`../assets/logos/${brand.logo}`, import.meta.url).href;

  return (
    <motion.div
      whileHover={{ y: -4, borderColor: "#8f7bd6" }}
      className="bg-white border border-hairline rounded-2xl p-6 flex flex-col items-center text-center gap-3 h-full"
    >
      <div className="h-16 flex items-center justify-center">
        <img src={logo} alt={`${brand.name} logo`} className="max-h-14 max-w-full object-contain" />
      </div>
      {detailed && (
        <>
          <h3 className="font-bold text-base">{brand.name}</h3>
          <p className="text-sm text-ink-mute leading-relaxed">{brand.desc}</p>
        </>
      )}
    </motion.div>
  );
}
