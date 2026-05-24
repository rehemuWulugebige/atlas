import { Bodom } from "@/components/decorative/bodom";

export function SiteFooter() {
  return (
    <footer className="border-cream border-t px-6 py-12 md:px-12">
      <div className="mx-auto flex max-w-5xl flex-col gap-8 text-center md:flex-row md:items-start md:justify-between md:text-left">
        <div>
          <span className="font-display text-dark-walnut inline-flex items-center text-lg">
            <Bodom className="text-honey mr-2 inline-block h-3 w-2" />
            Darya
          </span>
          <p className="font-body text-walnut mt-1 text-sm">
            handmade Uyghur desserts · Fairfax, Virginia
          </p>
        </div>
        <p className="font-body text-walnut text-xs leading-relaxed md:max-w-xs md:text-center">
          NOT FOR RESALE — PROCESSED AND PREPARED WITHOUT STATE INSPECTION
        </p>
        <div className="font-body text-walnut text-sm">
          <p>DM @darya-handle</p>
          <p>text (XXX) XXX-XXXX</p>
        </div>
      </div>
    </footer>
  );
}
