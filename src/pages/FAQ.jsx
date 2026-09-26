import PageHero from "../components/PageHero";
import { faqGroups } from "../data/siteData";

export default function FAQ() {
  return (
    <div>
      <PageHero
        kicker="FAQ"
        title="Frequently asked questions."
        sub="Find answers about D2C Ecommerce, our services, orders, payments and more."
      />
      <section className="section">
        <div className="wrap max-w-2xl">
          {faqGroups.map((group) => (
            <div key={group.title} className="mb-12">
              <h2 className="text-xl font-bold mb-4">{group.title}</h2>
              <div>
                {group.items.map(([q, a], i) => (
                  <details key={q} className="border-b border-hairline py-5" open={i === 0}>
                    <summary className="cursor-pointer font-semibold text-base flex justify-between items-center gap-4 list-none">
                      {q}
                      <span className="text-ink-faint text-xl">+</span>
                    </summary>
                    <p className="text-sm text-ink-mute leading-relaxed mt-3.5 pr-6">{a}</p>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
