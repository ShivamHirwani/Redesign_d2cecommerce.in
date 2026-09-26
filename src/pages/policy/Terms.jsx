import PageHero from "../../components/PageHero";

export default function Terms() {
  return (
    <div>
      <PageHero kicker="Policy" title="Terms & Conditions" />
      <section className="section">
        <div className="wrap max-w-3xl prose-block space-y-6 text-ink-mute leading-relaxed text-sm">
          <h2 className="text-xl font-bold text-ink">Use Of The Platform</h2>
          <p>
            Welcome to d2cecommerce.in ("Site"). The website is owned and
            operated by D2CECOMMERCE INDIA PVT. LTD. ("Company"), a company
            incorporated under the provisions of the Companies Act, 1956 with
            its registered office at Plot No. 12, Khasra No. 505/1, Deepak
            Vihar, Khora.
          </p>
          <p>
            These Terms of Use govern your use of our Site and your conduct,
            regardless of the means of access, and apply to all products
            offered on the Site.
          </p>
          <p>
            The Site is only to be used for your personal, non-commercial use
            and information. Your use of the Site is governed by these Terms
            and Conditions along with the Privacy Policy, Shipping Policy and
            Cancellation, Refund and Return Policy.
          </p>
          <p>
            By accessing, browsing or otherwise using the Site, you
            acknowledge and agree to be bound by these Terms of Use and
            applicable Policies. The Company reserves the right to change or
            update these Terms at any time; changes become effective
            immediately upon posting.
          </p>
          <h2 className="text-xl font-bold text-ink">Your Account</h2>
          <p>
            This Site is directed to be used by adults only. You are
            responsible for maintaining the confidentiality of your account
            and password, and accept responsibility for all activities that
            occur under it. We reserve the right to refuse service or
            terminate accounts without prior notice if these Terms are
            violated.
          </p>
          <h2 className="text-xl font-bold text-ink">Product Information</h2>
          <p>
            The Company attempts to provide accurate descriptions of products
            available on the Site. However, descriptions, colours,
            information and other content may occasionally contain errors or
            inaccuracies, and product pictures are indicative and may not
            exactly match the delivered product.
          </p>
        </div>
      </section>
    </div>
  );
}
