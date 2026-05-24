"use client";

import { useState } from "react";

import type { MenuItem } from "@/features/menu/types";

const GLASS_PILL =
  "border-cream/40 bg-bone/65 shadow-glass-pill rounded-full border backdrop-blur-md";

type MenuCardDetailsProps = {
  item: MenuItem;
};

function DetailsChevron({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className={className}
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

export function MenuCardDetails({ item }: MenuCardDetailsProps) {
  const [open, setOpen] = useState(false);
  const panelId = `menu-details-${item.id}`;

  return (
    <div className="flex flex-col gap-3 pt-4">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? `Hide details for ${item.name}` : `Show details for ${item.name}`}
        className="flex w-full cursor-pointer items-stretch gap-2 text-left"
      >
        <span
          className={`${GLASS_PILL} font-display text-dark-walnut flex min-h-11 flex-1 items-center px-5 py-2.5 text-lg font-normal tracking-tight`}
        >
          {item.name}
        </span>
        <span
          className={`${GLASS_PILL} text-walnut flex h-11 w-11 shrink-0 items-center justify-center transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        >
          <DetailsChevron className="h-5 w-5" />
        </span>
      </button>

      {open ? (
        <div
          id={panelId}
          className="border-cream/40 bg-bone/65 shadow-glass-pill rounded-2xl border px-5 py-4 backdrop-blur-md"
        >
          <p className="font-body text-walnut text-sm italic">{item.tagline}</p>
          <p className="font-body text-walnut mt-3 text-sm leading-relaxed">{item.description}</p>
          <p className="font-body text-walnut mt-3 text-sm leading-relaxed">
            <span className="text-dark-walnut font-medium">Ingredients: </span>
            {item.ingredients}
          </p>
        </div>
      ) : null}

      <ul className="flex flex-wrap gap-2" aria-label={`Allergens for ${item.name}`}>
        {item.allergens.map((allergen) => (
          <li
            key={allergen}
            className="font-body bg-cream/80 text-walnut rounded-full px-2.5 py-0.5 text-xs capitalize"
          >
            {allergen}
          </li>
        ))}
      </ul>

      <p className="font-body text-dark-walnut text-base">
        <span className="font-medium">{item.price}</span>{" "}
        <span className="text-walnut text-sm">{item.unit}</span>
      </p>
    </div>
  );
}
