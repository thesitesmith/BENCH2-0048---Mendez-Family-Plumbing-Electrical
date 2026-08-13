import { MapPin, Clock, Phone } from 'lucide-react';

export default function Contact() {
  const address = '2508 Guadalupe St Ste 175, Austin, TX'
  const mapSrc = 'https://www.google.com/maps?q=' + encodeURIComponent(address) + '&output=embed'

  return (
    <section id="contact" className="py-20 bg-brand-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl md:text-4xl font-heading font-700 tracking-tight text-brand-text [text-wrap:balance]">
          Reach the crew
        </h2>

        <div className="mt-10 grid lg:grid-cols-2 gap-10">
          <div className="flex flex-col justify-between gap-8 bg-brand-primary p-8 rounded-none">
            <div>
              <a
                href="tel:+15128130488"
                className="inline-block bg-brand-accent text-brand-text font-semibold px-10 py-5 text-lg rounded-none hover:bg-brand-accent/90 transition-colors"
              >
                Call Us
              </a>
            </div>

            <ul className="space-y-4 text-brand-background/90">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span>2508 Guadalupe St Ste 175, Austin, TX</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={18} className="mt-1 flex-shrink-0" />
                <span className="leading-relaxed">
                  Monday: 6:00 AM to 7:00 PM<br />
                  Closed Tuesday<br />
                  Wednesday: 8:00 AM to 2:00 PM<br />
                  Thursday: 8:00 AM to 6:00 PM<br />
                  Closed Friday to Sunday
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={18} className="mt-1 flex-shrink-0" />
                <a href="tel:+15128130488" className="underline">(512) 813-0488</a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <div className="relative overflow-hidden w-full h-64 sm:h-80 rounded-none">
              <img
                src="/images/gallery-2.jpg"
                alt="Exterior storefront of Mendez Family Plumbing & Electrical on Guadalupe Street in Austin"
                className="absolute inset-0 w-full h-full object-cover object-center saturate-[.95] contrast-[1.03]"
              />
            </div>

            <div className="relative overflow-hidden w-full min-h-[300px] rounded-none">
              
            </div>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Mendez%20Family%20Plumbing%20%26%20Electrical&query_place_id=ChIJUyLNim61RIYRM-lw1Jbh4w0"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-text/80 underline text-sm"
            >
              View on Google Maps
            </a>
          </div>
        </div>
      </div>
    
      <div className="mx-auto max-w-6xl px-6 mt-10">
        <div className="relative overflow-hidden rounded-xl">
          <iframe
            src="https://www.google.com/maps?q=2508%20Guadalupe%20St%20Ste%20175&output=embed"
            title="Location map"
            loading="lazy"
            className="h-[320px] w-full border-0"
          />
        </div>
      </div>
</section>
  )
}
