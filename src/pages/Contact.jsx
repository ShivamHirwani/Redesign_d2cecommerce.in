import PageHero from "../components/PageHero";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <div>
      <PageHero
        kicker="Get in touch"
        title="Contact Us."
        sub="We're here to help. Get in touch with our team for any questions or assistance."
      />
      <section className="section">
        <div className="wrap grid md:grid-cols-2 gap-14">
          <div className="space-y-6">
            {[
              ["📍", "Address", "D2CECOMMERCE INDIA Private Limited, Sector 62, Noida, Uttar Pradesh, India"],
              ["☎", "Phone", "+91 98217 21100"],
              ["✉", "Email", "care@d2cecommerce.in"],
              ["🕘", "Working Hours", "Monday – Saturday, 9:00 AM – 7:00 PM"],
            ].map(([icon, label, val]) => (
              <div key={label} className="flex gap-4 border-b border-hairline pb-6">
                <div className="w-11 h-11 rounded-lg bg-canvas-soft border border-hairline flex items-center justify-center flex-shrink-0 text-lg">
                  {icon}
                </div>
                <div>
                  <div className="font-bold text-sm mb-0.5">{label}</div>
                  <div className="text-ink-mute text-sm">{val}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-canvas-soft border border-hairline rounded-2xl p-8">
            <h3 className="font-bold text-lg mb-5">Send us a message</h3>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
