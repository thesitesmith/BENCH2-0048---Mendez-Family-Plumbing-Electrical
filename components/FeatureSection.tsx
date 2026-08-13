import Image from 'next/image'

const areas = [
  'Austin',
  'Downtown Austin',
  'East Austin',
  'South Austin',
  'North Austin',
  'Surrounding Austin area',
]

export default function FeatureSection() {
  return (
    <section id="feature" className="bg-brand-secondary/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-heading font-700 tracking-tight text-brand-text [text-wrap:balance]">
          Where we drive out to
        </h2>
        <p className="mt-4 text-brand-text/80 max-w-prose leading-relaxed">
          Based on Guadalupe Street, working jobs across Austin and the surrounding area. Our trucks are stocked for both plumbing and electrical calls, so whether it is a slow drain on the east side or a breaker panel acting up near downtown, one visit usually covers it. We keep the service area tight on purpose. Staying close to home means shorter drive times, faster arrivals when something is leaking or sparking, and a crew that actually knows the older housing stock around Austin, from the pier and beam homes near South Congress to newer builds further north.
        </p>
        <p className="mt-4 text-brand-text/80 max-w-prose leading-relaxed">
          Every neighborhood on this list gets the same crew, the same trucks, and the same up front pricing before any work starts. If an address falls outside this footprint, a quick call will tell you whether we can still make it out.
        </p>

        <div className="mt-6 flex flex-wrap gap-x-3 gap-y-2 text-brand-text/80">
          {areas.map((a, i) => (
            <span key={a} className="flex items-center">
              {a}
              {i < areas.length - 1 && <span className="mx-3 text-brand-text/40">&middot;</span>}
            </span>
          ))}
        </div>
      </div>

      <div className="relative overflow-hidden w-screen h-64 sm:h-96">
        <Image
          src="/images/gallery-4.jpg"
          alt="Interior of an Austin home where Mendez Family Plumbing & Electrical performs service calls"
          fill
          sizes="100vw"
          className="object-cover object-center saturate-[.95] contrast-[1.03]"
        />
      </div>

      <div className="bg-brand-primary py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center sm:items-start justify-between gap-6">
          <p className="text-brand-background/90 text-lg max-w-md leading-relaxed">
            Water off at the main, breaker tripped, or power out. Call and we come out.
          </p>
          <a
            href="tel:+15128130488"
            className="bg-brand-accent text-brand-text font-semibold px-10 py-5 text-lg rounded-none hover:bg-brand-accent/90 transition-colors whitespace-nowrap"
          >
            Call Us
          </a>
        </div>
      </div>
    </section>
  )
}
