import Image from 'next/image'

export default function Hero() {
  return (
    <section id="hero" className="bg-brand-background pt-28 lg:pt-32 pb-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-md">
          <h1 className="text-5xl md:text-6xl font-heading font-700 tracking-tight leading-none text-brand-text [text-wrap:balance]">
            One call covers the pipes and the panel
          </h1>
          <p className="mt-6 text-lg text-brand-text/80 max-w-prose leading-relaxed">
            Family run plumbing and electrical service for Austin homes. Drains, water heaters, breakers and panels, one crew, one number.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="tel:+15128130488"
              className="bg-brand-accent text-brand-text font-semibold px-8 py-4 rounded-none hover:bg-brand-accent/90 transition-colors"
            >
              Call Us
            </a>
          </div>
        </div>

        <div className="mt-12 lg:mt-16 lg:ml-auto lg:w-4/5">
          <div className="relative overflow-hidden w-full aspect-[4/5] sm:aspect-[4/3] rounded-none">
            <Image
              src="/images/hero.jpg"
              alt="Bathroom plumbing repair in progress at a Mendez Family Plumbing & Electrical job in Austin"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center saturate-[.95] contrast-[1.03]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
