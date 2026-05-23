import type { Metadata } from "next";

import { MenuCard } from "@/features/menu/components/menu-card";
import { menuItems } from "@/features/menu/data";

export const metadata: Metadata = {
  title: "Menu — Atlas",
  description: "This week's handmade Uyghur desserts available for pickup in Fairfax, Virginia.",
};

export default function MenuPage() {
  return (
    <main className="bg-bone px-6 py-16 md:px-12 md:py-24">
      <div className="mx-auto max-w-6xl">
        <header className="mb-12 md:mb-16">
          <h1 className="font-display text-dark-walnut text-4xl leading-tight font-light tracking-tight md:text-5xl lg:text-6xl">
            The menu
          </h1>
          <p className="font-body text-walnut mt-4 text-lg italic">
            This week&apos;s selection. Updated every Sunday.
          </p>
        </header>

        <ul className="grid list-none grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {menuItems.map((item) => (
            <li key={item.id}>
              <MenuCard item={item} />
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
