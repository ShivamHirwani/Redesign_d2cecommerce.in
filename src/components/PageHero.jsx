import { motion } from "framer-motion";
import Spotlight from "./Spotlight";

export default function PageHero({ kicker, title, sub }) {
  return (
    <section className="relative bg-primary text-white overflow-hidden py-20">
      <Spotlight />
      <div className="wrap relative">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {kicker && <div className="kicker !text-violet">{kicker}</div>}
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight leading-tight max-w-3xl">
            {title}
          </h1>
          {sub && <p className="text-white/65 mt-4 max-w-2xl text-lg">{sub}</p>}
        </motion.div>
      </div>
    </section>
  );
}
