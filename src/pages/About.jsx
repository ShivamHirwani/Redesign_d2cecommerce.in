import { motion } from "framer-motion";
import PageHero from "../components/PageHero";
import { experts } from "../data/siteData";

export default function About() {
  return (
    <div>
      <PageHero
        kicker="About D2C Ecommerce"
        title="Empowering brands to succeed in the digital marketplace."
        sub="India's 1st New Age Technology-based Retail chain for fast consumer goods."
      />

      <section className="section">
        <div className="wrap grid md:grid-cols-2 gap-14">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="kicker">Company History</div>
            <h2 className="h2 mb-5">Founded in April 2022.</h2>
            <p className="text-ink-mute leading-relaxed mb-4">
              D2C Ecommerce is India's 1st New Age Technology based Retail
              chain for fast consumer goods. We sell both online through our
              portal www.d2csale.com, and offline through our retail
              stores — D2C Mall.
            </p>
            <p className="text-ink-mute leading-relaxed">
              D2C Ecommerce was founded by Manish Gupta, Ex-IIM A and an
              industry veteran with over 12 years of experience in Paytm
              Mall, Mahindra, Samsung, Amazon, Upscalio and ITC.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="bg-primary text-white rounded-2xl p-8 mb-6">
              <h3 className="font-bold text-lg mb-3">Our Vision</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Fast consumer goods should be displayed in retail stores, and
                not stored in boxes in a dark store or a warehouse. Online
                orders should get dispatched from those retail stores only.
              </p>
            </div>
            <div className="bg-canvas-soft border border-hairline rounded-2xl p-8">
              <h3 className="font-bold text-lg mb-3">D2C Mall</h3>
              <p className="text-ink-mute text-sm leading-relaxed">
                India's 1st Offline Marketplace, enabling D2C brands to get
                into offline retail at the cost of warehousing — free
                visibility and fixed-cost-free offline retail sales.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section section-soft bg-canvas-soft">
        <div className="wrap grid md:grid-cols-3 gap-6">
          <div className="bg-white border border-hairline rounded-2xl p-7">
            <h3 className="font-bold mb-2">Mission</h3>
            <p className="text-sm text-ink-mute leading-relaxed">
              Empower people with everyday quality products at the best
              prices and provide a better online shopping experience.
            </p>
          </div>
          <div className="bg-white border border-hairline rounded-2xl p-7">
            <h3 className="font-bold mb-2">What We Do</h3>
            <p className="text-sm text-ink-mute leading-relaxed">
              We create indigenous brands focusing on customer satisfaction,
              serving people who are price and quality conscious.
            </p>
          </div>
          <div className="bg-white border border-hairline rounded-2xl p-7">
            <h3 className="font-bold mb-2">Who We Are</h3>
            <p className="text-sm text-ink-mute leading-relaxed">
              A group of minimalist entrepreneurs, driven by excellence and
              trying to bring better change to online shopping.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="kicker">Leadership</div>
          <h2 className="h2 mb-10">Our Experts</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {experts.map((e) => (
              <div key={e.name} className="bg-white border border-hairline rounded-2xl p-6 text-center">
                <img
                  src={new URL(`../assets/people/${e.photo}`, import.meta.url).href}
                  alt={e.name}
                  className="w-16 h-16 mx-auto rounded-full object-cover mb-3"
                />
                <div className="font-semibold text-sm">{e.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
