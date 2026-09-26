import PageHero from "../../components/PageHero";

const steps = [
  ["Raise a Return / Replacement Request", "Raise a request within the return timeline from date of delivery at care@d2cecommerce.in. For damaged/missing product(s), raise it within 2 days of delivery."],
  ["Request Review", "Give us 2 working days to review your return request."],
  ["Product Pickup", "After review, our courier partner will pick up the products from you."],
  ["Self-Shipping (if needed)", "If reverse pickup isn't available at your location, self-ship via a reliable courier and share the receipt and tracking ID — we'll reimburse the charges."],
  ["Refund / Replacement", "Once received, we verify against the claim and initiate a replacement or refund; replacement depends on stock availability."],
];

export default function Refund() {
  return (
    <div>
      <PageHero kicker="Policy" title="Refund & Return Policy" />
      <section className="section">
        <div className="wrap max-w-3xl">
          <div className="space-y-5 mb-14">
            {steps.map(([title, desc], i) => (
              <div key={title} className="flex gap-5">
                <div className="w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-bold mb-1">{title}</h3>
                  <p className="text-sm text-ink-mute leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-white border border-hairline rounded-2xl p-7">
              <h3 className="font-bold mb-3">Eligible for Return / Replace</h3>
              <ul className="list-disc pl-5 space-y-1.5 text-sm text-ink-mute">
                <li>Wrong product delivered</li>
                <li>Expired product delivered</li>
                <li>Damaged product — physical damage / tampering</li>
                <li>Incomplete order — missing products</li>
              </ul>
            </div>
            <div className="bg-white border border-hairline rounded-2xl p-7">
              <h3 className="font-bold mb-3">Not Accepted If</h3>
              <ul className="list-disc pl-5 space-y-1.5 text-sm text-ink-mute">
                <li>Product is opened, used or altered</li>
                <li>Original packaging or labels are missing</li>
                <li>Request is raised after the return timeline</li>
                <li>Damage reported after 2 days of delivery</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
