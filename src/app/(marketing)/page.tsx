import Image from "next/image";

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
      "A rotating weekly selection of Uyghur desserts. The menu updates every Sunday — see the menu page or message us on Instagram.",
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
    <main>
      {/* Hero — full-bleed photo, copy on a bone scrim for readability */}
      <section className="relative min-h-[88vh] w-full overflow-hidden">
        <Image
          src="/images/home/IMG_2451.jpg"
          alt="Handmade desserts from Darya"
          fill
          className="object-cover object-center brightness-105"
          sizes="100vw"
          priority
        />
        <div
          className="absolute inset-0 bg-bone/45 bg-gradient-to-t from-bone/70 via-bone/25 to-bone/15 md:bg-gradient-to-r md:from-bone/80 md:from-42% md:via-bone/40 md:via-58% md:to-bone/5"
          aria-hidden="true"
        />
        <div className="relative z-10 flex min-h-[88vh] flex-col justify-center px-6 pt-28 pb-16 md:items-start md:px-12 md:pt-32 md:pb-24 lg:px-24">
          <div className="max-w-xl text-center md:max-w-2xl md:text-left">
            <h1 className="font-display text-dark-walnut [text-shadow:0_1px_24px_color-mix(in_srgb,var(--color-bone)_85%,transparent)] text-4xl leading-[1.1] font-normal tracking-tight md:text-5xl lg:text-6xl">
              Recipes from the city farthest from any ocean.
            </h1>
            <p className="font-body text-walnut mt-6 max-w-md text-lg leading-relaxed md:mx-0 mx-auto">
              Uyghur desserts from Darya, handmade each week in Fairfax. Pickup only — order by
              message.
            </p>
            <a
              href="/menu"
              className="bg-honey font-body text-dark-walnut shadow-warm hover:shadow-warm-lg mt-8 inline-block rounded-full px-8 py-3 text-sm font-medium transition-shadow"
            >
              see this week&apos;s menu
            </a>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section id="story" className="scroll-mt-28 px-6 py-20 md:py-28">
        <p className="font-body text-dark-walnut mx-auto max-w-2xl text-center text-lg leading-relaxed md:text-xl">
          Made by hand the week of pickup.{" "}
          <em className="italic">Same recipes our family brought from Urumqi.</em>
        </p>
      </section>

      {/* CTA Strip */}
      <section id="order" className="bg-cream scroll-mt-28 px-6 py-12 text-center md:py-16">
        <p className="font-body text-walnut">
          ordering is by message — pickup in Fairfax · weekly menu
        </p>
        <a
          href="#order"
          className="bg-honey font-body text-dark-walnut shadow-warm hover:shadow-warm-lg mt-6 inline-block rounded-full px-8 py-3 text-sm font-medium transition-shadow"
        >
          see how to order
        </a>
      </section>

      {/* FAQ */}
      <section className="px-6 py-24 md:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-body text-dark-walnut text-4xl font-semibold tracking-normal md:text-5xl">
            Frequently asked questions
          </h2>
          <p className="font-body text-walnut mx-auto mt-5 max-w-2xl text-center text-xl leading-relaxed md:text-2xl md:leading-loose">
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
  );
}
