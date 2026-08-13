export default function Footer() {
  return (
    <footer className="bg-brand-background pb-20 md:pb-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <span className="text-xl md:text-2xl font-heading font-700 tracking-tight text-brand-text">Mendez Family</span>
        <p className="mt-3 text-brand-text/80 max-w-prose leading-relaxed">
          Family run plumbing and electrical service for Austin homes and the surrounding area.
        </p>

        <div className="mt-8 pt-6 border-t border-brand-text/10 text-sm text-brand-text/60">
          <a href="https://thesitesmith.co" target="_blank" rel="noopener noreferrer" className="hover:text-brand-text">
            Website by The Sitesmith
          </a>
          {' '}&middot; {new Date().getFullYear()} Mendez Family Plumbing & Electrical
        </div>
      </div>
    </footer>
  )
}
