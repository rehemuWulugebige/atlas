import Image from "next/image";

import type { MenuItem } from "@/features/menu/types";

type MenuCardProps = {
  item: MenuItem;
};

export function MenuCard({ item }: MenuCardProps) {
  return (
    <article className="bg-bone shadow-warm hover:shadow-warm-lg flex flex-col overflow-hidden rounded-2xl transition-shadow">
      <div className="bg-cream relative aspect-[4/3] w-full">
        {item.photoUrl ? (
          <Image
            src={item.photoUrl}
            alt={item.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <div className="flex h-full items-center justify-center px-4">
            <span className="font-body text-walnut text-center text-sm italic">
              [ photo coming soon ]
            </span>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-6">
        <div>
          <h2 className="font-display text-dark-walnut text-2xl font-light tracking-tight">
            {item.name}
          </h2>
          <p className="font-body text-walnut mt-1 text-sm italic">{item.tagline}</p>
        </div>

        <p className="font-body text-walnut text-sm leading-relaxed">{item.description}</p>

        <ul className="flex flex-wrap gap-2" aria-label={`Allergens for ${item.name}`}>
          {item.allergens.map((allergen) => (
            <li
              key={allergen}
              className="font-body bg-cream text-walnut rounded-full px-2.5 py-0.5 text-xs capitalize"
            >
              {allergen}
            </li>
          ))}
        </ul>

        <p className="font-body text-dark-walnut mt-auto pt-2 text-base">
          <span className="font-medium">{item.price}</span>{" "}
          <span className="text-walnut text-sm">{item.unit}</span>
        </p>
      </div>
    </article>
  );
}
