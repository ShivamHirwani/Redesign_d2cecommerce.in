import PageHero from "../components/PageHero";
import ContactForm from "../components/ContactForm";

export default function Careers() {
  return (
    <div>
      <PageHero
        kicker="Careers"
        title="Join Our Team."
        sub="We're hiring across multiple functions. If you thrive in a fast-paced, quick-to-action workplace, then you'll love working with us."
      />
      <section className="section">
        <div className="wrap grid md:grid-cols-2 gap-14">
          <div>
            <h2 className="h2 mb-6">Why work at D2C Ecommerce?</h2>
            <div className="grid gap-4">
              {[
                ["Fast-moving teams", "Ship, learn and iterate across 15+ live brands at once."],
                ["Ownership from day one", "Small teams mean real responsibility, fast."],
                ["Omni-channel exposure", "Work across ecommerce, retail and logistics in one org."],
              ].map(([title, desc]) => (
                <div key={title} className="bg-white border border-hairline rounded-xl p-6">
                  <h3 className="font-bold mb-1.5">{title}</h3>
                  <p className="text-sm text-ink-mute">{desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-canvas-soft border border-hairline rounded-2xl p-8">
            <h3 className="font-bold text-lg mb-5">Write to us</h3>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
