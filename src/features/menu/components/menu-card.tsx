import Image from "next/image";

import { MenuCardDetails } from "@/features/menu/components/menu-card-details";
import type { MenuItem } from "@/features/menu/types";

type MenuCardProps = {
  item: MenuItem;
};

export function MenuCard({ item }: MenuCardProps) {
  return (
    <article className="group flex flex-col">
      <div className="shadow-menu-photo group-hover:shadow-menu-photo-hover rounded-2xl transition-shadow duration-300 group-hover:-translate-y-1">
        <div className="relative aspect-square w-full overflow-hidden rounded-2xl">
          {item.photoUrl ? (
            <Image
              src={item.photoUrl}
              alt={item.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            />
          ) : (
            <div className="bg-cream flex h-full items-center justify-center px-4">
              <span className="font-body text-walnut text-center text-sm italic">
                [ photo coming soon ]
              </span>
            </div>
          )}
        </div>
      </div>

      <MenuCardDetails item={item} />
    </article>
  );
}
