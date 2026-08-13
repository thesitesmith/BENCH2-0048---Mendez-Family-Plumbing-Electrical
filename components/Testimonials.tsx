import Image from 'next/image'

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-brand-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl md:text-4xl font-heading font-700 tracking-tight text-brand-text [text-wrap:balance]">
          Finished work speaks for itself
        </h2>

        <div className="mt-10 grid md:grid-cols-3 gap-10 items-start">
          <div className="relative overflow-hidden aspect-[3/4] h-full min-h-[420px] w-full rounded-none">
            <Image
              src="/images/gallery-1.jpg"
              alt="Close-up detail of finished plumbing work by Mendez Family Plumbing & Electrical"
              fill
              sizes="(min-width: 1024px) 33vw, 100vw"
              className="object-cover object-top saturate-[.95] contrast-[1.03]"
            />
          </div>

          <div className="md:col-span-2 flex flex-col gap-8">
            <blockquote className="border-l-2 border-brand-text/10 pl-6">
              <p className="text-lg text-brand-text/90 leading-relaxed max-w-prose">
                We show up on time, diagnose the problem clearly, and get it fixed right the first time.
              </p>
              <p className="mt-3 text-xs uppercase tracking-widest text-brand-text/60">Our Promise</p>
            </blockquote>

            <blockquote className="border-l-2 border-brand-text/10 pl-6">
              <p className="text-lg text-brand-text/90 leading-relaxed max-w-prose">
                From plumbing repairs to electrical issues, we take the time to explain exactly what is going on and what it takes to fix it.
              </p>
              <p className="mt-3 text-xs uppercase tracking-widest text-brand-text/60">Our Promise</p>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}
