import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Scene3D from "../components/Scene3D";
import Spotlight from "../components/Spotlight";
import Meteors from "../components/Meteors";
import StatCounter from "../components/StatCounter";
import BrandCard from "../components/BrandCard";
import { brands, mediaItems, stats } from "../data/siteData";
import founderPhoto from "../assets/people/Manish-Gupta.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="relative bg-primary text-white overflow-hidden">
        <Spotlight />
        <Meteors number={12} />
        <Scene3D className="absolute inset-0 opacity-90" />
        <div className="wrap relative grid lg:grid-cols-2 gap-14 items-center py-24">
          <motion.div initial="hidden" animate="show" variants={fadeUp}>
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-violet bg-violet/10 border border-violet/30 rounded-full px-3.5 py-1.5 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-violet" />
              India's 1st Omni-Channel House of D2C Brands
            </div>
            <h1 className="text-4xl md:text-6xl font-semibold leading-[0.98] tracking-tight mb-6">
              Fast-moving goods<br />belong on shelves,<br />
              <em className="italic font-medium text-violet">not in warehouses.</em>
            </h1>
            <p className="text-lg text-white/65 max-w-xl mb-8 leading-relaxed">
              D2C Ecommerce runs India's first tech-led retail chain built for
              direct-to-consumer brands — online through d2csale.com, and
              offline through D2C Mall retail stores.
            </p>
            <div className="flex flex-wrap gap-3.5">
              <Link to="/franchise" className="btn btn-violet">Become a Franchise Partner</Link>
              <Link to="/brands" className="btn btn-outline-dark">Explore Our Brands →</Link>
            </div>
            <div className="flex flex-wrap gap-8 mt-12">
              {stats.map((s) => (
                <div key={s.label}>
                  <b className="block text-2xl font-bold">{s.value.toLocaleString()}{s.suffix}</b>
                  <span className="text-xs text-white/55">{s.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
          <div className="hidden lg:block" />
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="bg-canvas-soft border-b border-hairline py-10">
        <div className="wrap">
          <p className="text-center text-xs font-semibold uppercase tracking-wider text-ink-faint mb-6">
            Brands built &amp; scaled inside the D2C portfolio
          </p>
          <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-7 gap-4">
            {brands.slice(0, 14).map((b) => (
              <div key={b.name} className="bg-white border border-hairline rounded-xl h-16 flex items-center justify-center p-3">
                <img
                  src={new URL(`../assets/logos/${b.logo}`, import.meta.url).href}
                  alt={`${b.name} logo`}
                  className="max-h-8 max-w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="section">
        <div className="wrap">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto mb-14"
          >
            <div className="kicker">How we operate</div>
            <h2 className="h2">Everything a D2C brand needs, under one roof.</h2>
          </motion.div>
          <div className="grid md:grid-cols-4 gap-5">
            {[
              ["01", "Product Expertise", "Deep category knowledge across FMCG, fashion, beauty and lifestyle electronics."],
              ["02", "Customer Experience", "Consistent service standards across 15+ brands and every marketplace we sell on."],
              ["03", "Logistics", "Retail-store-as-warehouse model dispatches online orders straight from D2C Mall shelves."],
              ["04", "Online Marketing", "Full-funnel marketplace management — listings, SEO, advertising and order operations."],
            ].map(([num, title, desc], i) => (
              <motion.div
                key={num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-white border border-hairline rounded-2xl p-7"
              >
                <div className="text-xs font-bold text-violet-glow mb-4">{num}</div>
                <h3 className="font-bold mb-2">{title}</h3>
                <p className="text-sm text-ink-mute leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS BAND */}
      <section className="bg-primary py-16">
        <div className="wrap grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <StatCounter key={s.label} value={s.value} suffix={s.suffix} label={s.label} />
          ))}
        </div>
      </section>

      {/* BRAND GRID PREVIEW */}
      <section className="section">
        <div className="wrap">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
            <div>
              <div className="kicker">Our Portfolio</div>
              <h2 className="h2 max-w-xl">A house of brands, built brand by brand.</h2>
            </div>
            <Link to="/brands" className="btn btn-primary">View All Brands</Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
            {brands.slice(0, 8).map((b) => (
              <BrandCard key={b.name} brand={b} />
            ))}
          </div>
        </div>
      </section>

      {/* MEDIA PREVIEW */}
      <section className="section section-soft bg-canvas-soft">
        <div className="wrap">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
            <div>
              <div className="kicker">In the Press</div>
              <h2 className="h2">News, media coverage &amp; press releases.</h2>
            </div>
            <Link to="/media" className="btn btn-primary">All Coverage</Link>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {mediaItems.slice(0, 3).map((m) => (
              <div key={m.title} className="bg-white border border-hairline rounded-2xl p-7 flex flex-col h-full">
                <div className="text-xs font-bold text-teal-deep uppercase tracking-wide mb-3.5">{m.tag}</div>
                <h3 className="font-semibold leading-snug mb-4">{m.title}</h3>
                <div className="text-xs text-ink-faint mt-auto pt-3">{m.date}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FRANCHISE CTA */}
      <section className="relative bg-teal-deep text-white py-24 text-center overflow-hidden">
        <div className="wrap relative">
          <div className="kicker !text-violet">Franchise Opportunity</div>
          <h2 className="h2 !text-white max-w-xl mx-auto mb-5">Become a D2C Franchise Partner.</h2>
          <p className="text-white/65 max-w-xl mx-auto mb-8">
            Join India's fastest-growing ecommerce ecosystem with complete
            training, marketing support, and proven business strategies.
          </p>
          <Link to="/franchise" className="btn btn-teal">Become a Franchise Partner</Link>
        </div>
      </section>

      {/* FOUNDER */}
      <section className="section">
        <div className="wrap max-w-3xl">
          <div className="bg-white border border-hairline rounded-2xl p-10 grid sm:grid-cols-[180px_1fr] gap-8 items-center text-center sm:text-left">
            <img
              src={founderPhoto}
              alt="Manish Gupta"
              className="w-36 h-36 mx-auto sm:mx-0 rounded-2xl object-cover"
            />
            <div>
              <h3 className="text-xl font-bold mb-1">Manish Gupta</h3>
              <div className="text-teal-deep font-semibold text-sm mb-3">Founder &amp; CEO, D2C Ecommerce</div>
              <p className="text-ink-mute text-sm leading-relaxed">
                Ex-IIM A with over 12 years across Paytm Mall, Mahindra, Samsung,
                Amazon, Upscalio and ITC — Manish founded D2C Ecommerce in
                April 2022 around the four pillars every D2C brand needs to scale.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
