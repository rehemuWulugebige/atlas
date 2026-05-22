const FAQ_ITEMS = [
  {
    question: "How do I order?",
    answer:
      "Send a DM on Instagram or text the number in the footer. We'll confirm your order and pickup time. Orders are placed Sunday–Tuesday for that week's Saturday pickup.",
  },
  {
    question: "Where and when is pickup?",
    answer:
      "Pickup is from our home in Fairfax, Virginia, Saturdays 10am–2pm. We share the exact address when you confirm your order.",
  },
  {
    question: "Why pickup only? Can you deliver?",
    answer:
      "We bake in our home kitchen under Virginia's cottage food law, which allows direct pickup but not delivery. If demand grows, we may upgrade to a setup that allows delivery — for now, pickup is the only option.",
  },
  {
    question: "What's on the menu?",
    answer:
      "A rotating weekly selection of Uyghur desserts — walnut halwa, honey baklava, sangza, rose-water cake, and others. The menu updates every Sunday. Check Instagram or the menu section above.",
  },
  {
    question: "Do you note ingredients and allergens?",
    answer:
      "Yes — every item lists full ingredients and major allergens. Common allergens in our desserts: wheat, eggs, dairy, tree nuts (walnut, pistachio). For any specific allergy, message us before ordering.",
  },
  {
    question: "How long do the desserts keep, and how should I serve them?",
    answer:
      "Most items stay fresh 3–5 days at room temperature in an airtight container; some keep longer refrigerated or frozen. We include storage and serving notes with each pickup.",
  },
] as const;

const DETAILS_OPEN_CHEVRON = "[&[open]>summary>svg]:rotate-180";
const DETAILS_DIVIDER = "[&:not(:last-child)]:border-b [&:not(:last-child)]:border-cream";

function FaqChevron() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="chevron text-walnut h-6 w-6 shrink-0 transition-transform"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
        clipRule="evenodd"
      />
    </svg>
  );
}

type FaqItemProps = {
  question: string;
  answer: string;
  defaultOpen?: boolean;
  isLast?: boolean;
};

function FaqItem({ question, answer, defaultOpen = false, isLast = false }: FaqItemProps) {
  return (
    <details
      open={defaultOpen || undefined}
      className={isLast ? DETAILS_OPEN_CHEVRON : `${DETAILS_OPEN_CHEVRON} ${DETAILS_DIVIDER}`}
    >
      <summary className="hover:bg-cream/40 flex cursor-pointer list-none items-center justify-between px-8 py-6 transition-colors [&::-webkit-details-marker]:hidden">
        <span className="font-body text-dark-walnut text-lg leading-snug font-medium md:text-xl">
          {question}
        </span>
        <FaqChevron />
      </summary>
      <div className="px-8 pt-0 pb-6">
        <p className="font-body text-walnut border-honey/40 border-l-2 pl-5 text-lg leading-loose md:text-xl md:leading-loose">
          {answer}
        </p>
      </div>
    </details>
  );
}

export default function Home() {
  return (
    <>
      {/* Navigation */}
      <header className="border-cream bg-bone sticky top-0 z-50 flex items-center justify-between border-b px-6 py-4 md:px-12">
        <a href="/" className="font-display text-dark-walnut text-lg">
          atlas
        </a>
        <nav className="font-body text-walnut flex gap-6 text-sm">
          <a href="#menu" className="hover:text-dark-walnut">
            Menu
          </a>
          <a href="#story" className="hover:text-dark-walnut">
            Story
          </a>
          <a href="#order" className="hover:text-dark-walnut">
            Order
          </a>
        </nav>
      </header>

      <main>
        {/* Hero */}
        <section className="bg-bone flex min-h-[80vh] flex-col items-center gap-12 px-6 py-16 md:flex-row md:gap-16 md:px-12 lg:px-24">
          <div className="flex flex-1 flex-col items-center text-center md:items-start md:text-left">
            <h1 className="font-display text-dark-walnut text-4xl leading-tight font-light tracking-tight md:text-5xl lg:text-6xl">
              The Uyghur desserts you{" "}
              <em className="italic">won't find at any bakery in the DMV.</em>
            </h1>
            <p className="font-body text-walnut mt-6 max-w-md text-lg">
              Handmade each week in a Fairfax kitchen. Pickup only — order by message.
            </p>
            <a
              href="#menu"
              className="bg-honey font-body text-bone mt-8 inline-block rounded-full px-8 py-3 text-sm font-medium shadow-sm transition-shadow hover:shadow-md"
            >
              see this week's menu
            </a>
          </div>
          <div className="flex flex-1 items-center justify-center">
            <div className="bg-cream flex aspect-[4/5] w-full max-w-sm items-center justify-center">
              <span className="font-body text-walnut italic">[ hero photo placeholder ]</span>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="bg-bone px-6 py-20 md:py-28">
          <p className="font-body text-dark-walnut mx-auto max-w-2xl text-center text-lg leading-relaxed md:text-xl">
            Recipes carried from the Altay mountains to a home kitchen in Fairfax.{" "}
            <em className="italic">Made by hand, in small batches,</em> the week of pickup.
          </p>
        </section>

        {/* CTA Strip */}
        <section className="bg-cream px-6 py-12 text-center md:py-16">
          <p className="font-body text-walnut">
            ordering is by message — pickup in Fairfax · weekly menu
          </p>
          <a
            href="#order"
            className="bg-honey font-body text-bone mt-6 inline-block rounded-full px-8 py-3 text-sm font-medium shadow-sm transition-shadow hover:shadow-md"
          >
            see how to order
          </a>
        </section>

        {/* FAQ */}
        <section className="bg-bone px-6 py-24 md:py-32">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="font-body text-dark-walnut text-4xl font-semibold tracking-normal md:text-5xl">
              Frequently asked questions
            </h2>
            <p className="font-body text-walnut mx-auto mt-5 max-w-2xl text-center text-xl leading-relaxed md:text-2xl md:leading-relaxed">
              Everything you need to know about ordering, pickup, and what we make.
            </p>

            <div className="bg-bone border-cream shadow-warm-lg mx-auto mt-16 max-w-4xl overflow-hidden rounded-2xl border">
              {FAQ_ITEMS.map((item, index) => (
                <FaqItem
                  key={item.question}
                  question={item.question}
                  answer={item.answer}
                  defaultOpen={index === 0}
                  isLast={index === FAQ_ITEMS.length - 1}
                />
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-cream bg-bone border-t px-6 py-12 md:px-12">
        <div className="mx-auto flex max-w-5xl flex-col gap-8 text-center md:flex-row md:items-start md:justify-between md:text-left">
          <div>
            <span className="font-display text-dark-walnut text-lg">atlas</span>
            <p className="font-body text-walnut mt-1 text-sm">handmade Uyghur desserts</p>
          </div>
          <p className="font-body text-walnut text-xs leading-relaxed md:max-w-xs md:text-center">
            NOT FOR RESALE — PROCESSED AND PREPARED WITHOUT STATE INSPECTION
          </p>
          <div className="font-body text-walnut text-sm">
            <p>DM @atlas-handle</p>
            <p>text (XXX) XXX-XXXX</p>
          </div>
        </div>
      </footer>
    </>
  );
}
