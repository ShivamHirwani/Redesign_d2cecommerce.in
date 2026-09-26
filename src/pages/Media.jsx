import PageHero from "../components/PageHero";
import { mediaItems } from "../data/siteData";

export default function Media() {
  return (
    <div>
      <PageHero kicker="In the Press" title="News, media coverage & press releases." />
      <section className="section">
        <div className="wrap grid md:grid-cols-3 gap-6">
          {mediaItems.map((m) => (
            <div key={m.title} className="bg-white border border-hairline rounded-2xl p-7 flex flex-col h-full">
              <div className="text-xs font-bold text-teal-deep uppercase tracking-wide mb-3.5">{m.tag}</div>
              <h3 className="font-semibold leading-snug mb-4">{m.title}</h3>
              <div className="text-xs text-ink-faint mt-auto pt-3">{m.date}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
