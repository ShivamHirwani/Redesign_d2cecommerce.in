import PageHero from "../../components/PageHero";

export default function Shipping() {
  return (
    <div>
      <PageHero kicker="Policy" title="Shipping Policy" />
      <section className="section">
        <div className="wrap max-w-3xl space-y-6 text-ink-mute leading-relaxed text-sm">
          <p>
            The Company takes responsibility to package and dispatch Products
            to Buyers. The risk of any damage, loss or destruction during
            delivery or transit is borne by the Company. Unless stated
            otherwise on the product page, delivery is free of cost.
          </p>
          <p>
            The Company makes best efforts to dispatch all orders within{" "}
            <b className="text-ink">2–3 working days</b> and have them
            delivered within <b className="text-ink">2–6 working days</b>{" "}
            after dispatch, depending on the delivery location. Any delay in
            dispatch will be communicated via SMS, email or voice call.
          </p>
          <p>
            Dispatch times are estimates only and not guaranteed — time is
            not the essence of the contract between the Buyer and the
            Company. If nobody is available at the shipping address to take
            delivery, the Company may decide to cancel the order.
          </p>
          <p>
            Title and risk in the Products pass to the Buyer upon delivery
            and upon full payment of the price of the Product.
          </p>
        </div>
      </section>
    </div>
  );
}
