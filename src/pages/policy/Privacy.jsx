import PageHero from "../../components/PageHero";

export default function Privacy() {
  return (
    <div>
      <PageHero kicker="Policy" title="Privacy Policy" />
      <section className="section">
        <div className="wrap max-w-3xl space-y-6 text-ink-mute leading-relaxed text-sm">
          <p>
            D2CECOMMERCE INDIA PRIVATE LIMITED is the licensed owner of
            d2csale.com ("Site"). D2C Sale respects your privacy. By
            accessing the services provided by the Site, you agree to the
            collection and use of your data as described here.
          </p>
          <h2 className="text-xl font-bold text-ink">What Information We Collect</h2>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>First and last name, email address, mobile phone number</li>
            <li>Postal code, address and demographic information</li>
            <li>Age, gender, occupation and education</li>
            <li>Pages visited, links clicked, and browsing/usage information</li>
          </ul>
          <h2 className="text-xl font-bold text-ink">How We Collect It</h2>
          <p>
            D2CSALE collects personally identifiable information as part of
            voluntary registration, online surveys, purchases and enquiries.
            The Site and third-party vendors, including Google, may use
            first- and third-party cookies to analyse traffic, optimize
            services and serve relevant advertising.
          </p>
          <h2 className="text-xl font-bold text-ink">How It's Used</h2>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>To provide personalized features and services</li>
            <li>To process and maintain transaction history</li>
            <li>To provide promotional offers and updates</li>
            <li>To improve our products, services and website experience</li>
            <li>To provide relevant advertising through third-party networks</li>
          </ul>
          <h2 className="text-xl font-bold text-ink">Sharing of Information</h2>
          <p>
            D2CSALE does not rent, sell or share your personal information
            for unauthorized purposes. Information may be shared with
            business associates, service providers and authorized partners
            strictly to operate and improve the Site.
          </p>
        </div>
      </section>
    </div>
  );
}
