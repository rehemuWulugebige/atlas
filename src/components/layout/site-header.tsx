import { Bodom } from "@/components/decorative/bodom";

export function SiteHeader() {
  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-50 bg-transparent px-4 pt-4 md:px-8 md:pt-6">
      <header className="border-walnut/15 bg-bone/65 shadow-nav pointer-events-auto mx-auto flex max-w-6xl min-h-14 items-center justify-between rounded-full border px-8 py-4 backdrop-blur-md md:min-h-16 md:px-10 md:py-5">
        <a
          href="/"
          className="font-body text-dark-walnut inline-flex items-center text-xl font-bold tracking-tight"
        >
          <Bodom className="text-honey mr-2.5 inline-block h-4 w-2.5" />
          Darya
        </a>
        <nav className="font-body flex items-center gap-6 text-base md:gap-8">
          <a href="/menu" className="text-walnut hover:text-dark-walnut font-medium">
            Menu
          </a>
          <a href="#story" className="text-walnut hover:text-dark-walnut font-medium">
            Story
          </a>
          <a
            href="#order"
            className="bg-dark-walnut text-bone hover:bg-dark-walnut/90 rounded-full px-5 py-2.5 text-sm font-medium transition-colors"
          >
            Order
          </a>
        </nav>
      </header>
    </div>
  );
}
