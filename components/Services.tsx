import Image from 'next/image'

const services = [
  {
    num: '01',
    name: `Drain and clog clearing`,
    desc: `Slow sinks, backed up tubs and stubborn floor drains cleared out. A camera can confirm what is blocking the line before anything gets torn apart.`,
  },
  {
    num: '02',
    name: `Water heater repair and service`,
    desc: `Cold showers, leaks at the tank, or a unit that will not fire usually trace back to a handful of parts. Diagnosed and fixed the same visit whenever possible.`,
  },
  {
    num: '03',
    name: `Panel and breaker work`,
    desc: `Tripping breakers, a panel that runs hot, or an older box that cannot keep up with the house. Checked, repaired or replaced so the power stays on.`,
  },
  {
    num: '04',
    name: `Leak repair and pipe fixes`,
    desc: `A dripping supply line or a pipe that finally gave out gets shut down at the source, then repaired. Water damage only grows the longer it runs.`,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-brand-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl md:text-4xl font-heading font-700 tracking-tight text-brand-text [text-wrap:balance]">
          Plumbing and electrical work we handle
        </h2>
        <p className="mt-4 text-brand-text/80 max-w-prose leading-relaxed">
          Most calls fall into a short list of jobs. Here is what shows up on the truck most often.
        </p>

        <div className="mt-10 relative overflow-hidden w-full aspect-[3/4] max-w-xs mx-auto rounded-none">
          <Image
            src="/images/gallery-3.jpg"
            alt="A Mendez Family Plumbing & Electrical technician working under a sink in Austin"
            fill
            sizes="(min-width: 1024px) 33vw, 100vw"
            className="object-cover object-top saturate-[.95] contrast-[1.03]"
          />
        </div>

        <div className="mt-10 divide-y divide-brand-text/10">
          {services.map((s) => (
            <div key={s.num} className="py-8 flex gap-6 items-start">
              <span className="text-4xl md:text-5xl font-heading font-700 text-brand-text/20 leading-none">
                {s.num}
              </span>
              <div>
                <h3 className="font-semibold text-lg text-brand-text">{s.name}</h3>
                <p className="mt-2 text-brand-text/80 leading-relaxed max-w-prose">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-brand-text/80">
          Something urgent? <a href="tel:+15128130488" className="underline font-semibold text-brand-text">Call now</a> and we will talk through what is going on.
        </p>
      </div>
    </section>
  )
}
