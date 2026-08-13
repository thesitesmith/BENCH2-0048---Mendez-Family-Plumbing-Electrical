const faqs = [
  {
    q: 'How do I book a visit?',
    a: 'Call the number on this page. A real person talks through what is going on and gets a visit scheduled for the next open slot.',
  },
  {
    q: 'Are you appointment only, or can I just walk in?',
    a: 'The shop on Guadalupe Street works by phone call first. Call ahead so a technician and truck are lined up before you arrive or before we drive out.',
  },
  {
    q: 'What are your hours?',
    a: 'Monday 6:00 AM to 7:00 PM. Closed Tuesday. Wednesday 8:00 AM to 2:00 PM. Thursday 8:00 AM to 6:00 PM. Closed Friday through Sunday.',
  },
  {
    q: 'What area do you cover?',
    a: 'Based at 2508 Guadalupe St in Austin, working jobs across Austin and the surrounding area.',
  },
  {
    q: 'What happens when you arrive?',
    a: 'A technician looks at the problem, whether it is a drain, a water heater or a breaker, explains what is going on, and confirms the plan and cost before any work starts.',
  },
  {
    q: 'How long does a typical job take?',
    a: 'A clogged drain or a breaker issue is often sorted in a single visit. Bigger repairs, like a water heater swap, get discussed up front so the timeline is clear.',
  },
  {
    q: 'How does payment work?',
    a: 'Cost is confirmed before any work starts, so there are no surprises once the job is done.',
  },
]

export default function Faq() {
  return (
    <section id="faq" className="py-20 bg-brand-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl md:text-4xl font-heading font-700 tracking-tight text-brand-text [text-wrap:balance]">
          Common questions before you call
        </h2>

        <div className="mt-8 divide-y divide-brand-text/10">
          {faqs.map((f) => (
            <details key={f.q} className="group py-5">
              <summary className="list-none flex justify-between items-center cursor-pointer font-semibold text-brand-text">
                {f.q}
                <span className="ml-4 text-brand-text/50 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-3 text-brand-text/80 leading-relaxed max-w-prose">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
