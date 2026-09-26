import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import ContactForm from "../components/ContactForm";

export default function Franchise() {
  return (
    <div>
      <PageHero
        kicker="Franchise Opportunity"
        title="Become a D2C Franchise Partner."
        sub="Join India's fastest-growing ecommerce ecosystem with complete training, marketing support, and proven business strategies."
      />
      <section className="section">
        <div className="wrap grid md:grid-cols-2 gap-14">
          <div>
            <h2 className="h2 mb-6">Why partner with D2C Mall?</h2>
            <ul className="space-y-4">
              {[
                "Enter offline retail at the cost of warehousing, not a full store.",
                "Get free visibility for your products in high-footfall D2C Mall locations.",
                "Complete training and onboarding support from our team.",
                "Marketing support across 15+ established house brands.",
                "Proven, repeatable business strategies from an operator that's scaled 15+ brands.",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-ink-mute">
                  <span className="text-teal-deep font-bold mt-0.5">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link to="/contact" className="btn btn-primary mt-8">Talk to our Franchise Team</Link>
          </div>
          <div className="bg-canvas-soft border border-hairline rounded-2xl p-8">
            <h3 className="font-bold text-lg mb-5">Apply now</h3>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
