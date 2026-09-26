import PageHero from "../components/PageHero";
import { team } from "../data/siteData";

export default function Team() {
  return (
    <div>
      <PageHero kicker="Our Team" title="Meet the people behind D2C Ecommerce." />
      <section className="section">
        <div className="wrap grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((p) => (
            <div key={p.name} className="bg-white border border-hairline rounded-2xl p-8 text-center">
              <img
                src={new URL(`../assets/people/${p.photo}`, import.meta.url).href}
                alt={p.name}
                className="w-24 h-24 mx-auto rounded-2xl object-cover mb-4"
              />
              <h3 className="font-bold text-lg">{p.name}</h3>
              <p className="text-teal-deep text-sm font-medium">{p.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
