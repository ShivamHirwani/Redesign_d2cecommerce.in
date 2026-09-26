import PageHero from "../components/PageHero";
import BrandCard from "../components/BrandCard";
import { brands } from "../data/siteData";

export default function Brands() {
  return (
    <div>
      <PageHero
        kicker="Our Brands"
        title="Explore our growing portfolio of indigenous brands."
        sub="From beauty and jewellery to home, kitchen, fitness and baby care — each brand runs on the same D2C Ecommerce backbone."
      />
      <section className="section">
        <div className="wrap grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {brands.map((b) => (
            <BrandCard key={b.name} brand={b} detailed />
          ))}
        </div>
      </section>
    </div>
  );
}
