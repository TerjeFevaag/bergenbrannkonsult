import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Phone, Mail, CheckCircle, ShieldCheck } from 'lucide-react'
import FAQAccordion from '@/components/FAQAccordion'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Uavhengig kontroll av brann i Bergen | Bergen Brannkonsult',
  description:
    'Uavhengig kontroll (UK) av brannkonsept i Bergen. Sentralt godkjent foretak. Vi gjennomgår brannkonsept, branntegninger og løsningsvalg mot TEK17. Fast pris.',
  alternates: { canonical: 'https://www.bergenbrannkonsult.no/uavhengig-kontroll' },
}

const faqItems = [
  {
    question: 'Hva er uavhengig kontroll av brann?',
    answer:
      'Uavhengig kontroll (UK) er en obligatorisk kvalitetssikring der en uavhengig part kontrollerer at brannprosjekteringen er utført i henhold til gjeldende forskrifter. Kontrollen utføres av et firma uten tilknytning til det som har prosjektert.',
  },
  {
    question: 'Når er det krav om uavhengig kontroll av brann?',
    answer:
      'Det er krav om UK brann når prosjekteringen av brann utføres i tiltaksklasse 2 (TKL 2) eller høyere, i henhold til SAK10. Dette gjelder de fleste næringsbygg, boligblokker og bygninger med mer enn 2 etasjer.',
  },
  {
    question: 'Hva koster uavhengig kontroll?',
    answer:
      'Kostnaden avhenger av prosjektets omfang og kompleksitet. Vi gir fastpristilbud etter gjennomgang av brannkonseptet. Ta kontakt med oss for et uforpliktende estimat.',
  },
  {
    question: 'Kan dere ta UK selv om dere ikke har prosjektert brannkonseptet?',
    answer:
      'Ja — det er faktisk et krav at den som utfører UK ikke er den samme som har prosjektert. Vi kan ta på oss uavhengig kontroll av brannkonsept utarbeidet av andre rådgivere.',
  },
  {
    question: 'Tar dere oppdrag utenfor Bergen?',
    answer:
      'Ja — vi har base i Bergen, men utfører uavhengig kontroll for prosjekter i hele Hordaland og over hele Norge. Kontrollarbeidet baseres på oversendte tegninger og dokumenter, noe som gjør det enkelt å gjennomføre uten geografiske begrensninger. Ta kontakt uansett hvor prosjektet ditt befinner seg.',
  },
]

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Hjem', item: 'https://www.bergenbrannkonsult.no' },
    { '@type': 'ListItem', position: 2, name: 'Uavhengig kontroll', item: 'https://www.bergenbrannkonsult.no/uavhengig-kontroll' },
  ],
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Uavhengig kontroll av brann',
  description: 'Uavhengig kontroll (UK) av brannkonsept og brannprosjektering i tiltaksklasse 2 og høyere. Skriftlig kontrollrapport og erklæring om ansvarsrett.',
  provider: {
    '@type': 'ProfessionalService',
    name: 'Bergen Brannkonsult AS',
    url: 'https://www.bergenbrannkonsult.no',
  },
  areaServed: { '@type': 'City', name: 'Bergen' },
  serviceType: 'Uavhengig kontroll brann (SAK10)',
}

export default function UavhengigKontrollPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <section className="bg-brand-dark py-16 lg:py-24">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="hero-1 flex items-center gap-2 text-brand-orange text-sm mb-4">
            <Link href="/" className="hover:underline">Hjem</Link>
            <span>/</span>
            <span>Uavhengig kontroll</span>
          </div>
          <h1 className="hero-2 text-brand-white text-4xl lg:text-5xl font-black max-w-2xl">
            Uavhengig kontroll av brannkonsept i Bergen
          </h1>
          <p className="hero-3 text-brand-white/70 text-lg mt-4 max-w-xl leading-relaxed">
            Krav om UK brann? Vi gjennomgår brannkonseptet og utfører uavhengig kontroll for byggesaker i Bergen og Hordaland.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-brand-white">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-[65%]">
              <ScrollReveal>
                <p className="text-brand-darkgray text-lg leading-relaxed mb-8">
                  I mange byggeprosjekter er det krav om uavhengig kontroll (UK) av brannsikkerheten. Kontrollen skal sikre at brannkonseptet er i tråd med gjeldende forskrifter og at prosjekteringen holder nødvendig kvalitet. Vi er basert i Bergen og utfører UK brann for prosjekter i Åsane, Fana, Fyllingsdalen, Laksevåg og Ytrebygda, i hele Hordaland og over hele Norge.
                </p>
              </ScrollReveal>

              <ScrollReveal>
                <h2 className="text-brand-black text-2xl font-black mb-4">Når er det krav om uavhengig kontroll?</h2>
                <p className="text-brand-darkgray leading-relaxed mb-8">
                  I henhold til SAK10 § 14-2 er det krav om uavhengig kontroll av prosjektering av brann når tiltaket er i tiltaksklasse 2 (TKL 2) eller høyere. Dette gjelder de fleste næringsbygg, boligblokker og bygninger med særskilte krav til brannsikkerhet.
                </p>
              </ScrollReveal>

              <ScrollReveal>
                <h2 className="text-brand-black text-2xl font-black mb-4">Hva kontrolleres?</h2>
                <ul className="space-y-3 mb-8">
                  {[
                    'Brannkonseptets overensstemmelse med TEK17 og Veiledning til TEK17',
                    'Valg av risikoklasse og brannklasse',
                    'Branncelleinndeling og seksjoneringer',
                    'Rømningsveier og røykventilasjon',
                    'Krav til branntekniske installasjoner',
                    'Branntegningenes nøyaktighet og fullstendighet',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-brand-darkgray">
                      <CheckCircle size={18} className="text-brand-orange shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </ScrollReveal>

              <ScrollReveal>
                <h2 className="text-brand-black text-2xl font-black mb-4">Hva vi tilbyr</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {[
                    { icon: ShieldCheck, title: 'Uavhengig gjennomgang', desc: 'Grundig kontroll av hele brannkonseptet av en erfaren brannrådgiver.' },
                    { icon: CheckCircle, title: 'Skriftlig kontrollrapport', desc: 'Detaljert rapport med funn, avvik og anbefalinger.' },
                    { icon: ShieldCheck, title: 'Erklæring om ansvarsrett', desc: 'Vi erklærer ansvarsrett som uavhengig kontrollerende for brann.' },
                    { icon: CheckCircle, title: 'Nøytral part', desc: 'Vi selger ingen produkter og har ingen interesser i valg av løsning.' },
                  ].map((item, i) => (
                    <div key={i} className="bg-brand-lightgray rounded-[20px] p-5 flex items-start gap-3">
                      <item.icon size={20} className="text-brand-orange shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-bold text-brand-black mb-1 text-sm">{item.title}</h3>
                        <p className="text-brand-darkgray text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <h2 className="text-brand-black text-2xl font-black mb-6">Ofte stilte spørsmål</h2>
              </ScrollReveal>
              <ScrollReveal delay={80} variant="fade">
                <FAQAccordion items={faqItems} />
              </ScrollReveal>
            </div>

            <div className="lg:w-[35%]">
              <ScrollReveal delay={200}>
                <div className="sticky top-24">
                  <div className="bg-brand-dark rounded-[30px] p-8 text-brand-white">
                    <h3 className="font-bold text-xl mb-3">Trenger du UK brann?</h3>
                    <p className="text-brand-white/60 text-sm mb-6 leading-relaxed">
                      Ta kontakt for uforpliktende tilbud på uavhengig kontroll av brannkonsept i Bergen.
                    </p>
                    <Link href="/kontakt-oss" className="block bg-brand-orange text-brand-white font-bold px-6 py-3.5 rounded-[10px] text-center hover:opacity-90 transition-opacity mb-6">
                      Kontakt oss
                    </Link>
                    <div className="space-y-3 pt-4 border-t border-brand-white/10">
                      <a href="tel:+4748481914" className="flex items-center gap-2 text-brand-white/60 hover:text-brand-orange transition-colors text-sm">
                        <Phone size={14} /> +47 484 81 914
                      </a>
                      <a href="mailto:post@bergenbrannkonsult.no" className="flex items-center gap-2 text-brand-white/60 hover:text-brand-orange transition-colors text-sm">
                        <Mail size={14} /> post@bergenbrannkonsult.no
                      </a>
                    </div>
                  </div>
                  <div className="mt-6 bg-brand-lightgray rounded-[30px] p-6">
                    <p className="text-brand-darkgray text-xs mb-1">Pris</p>
                    <p className="font-bold text-brand-black text-sm mb-1">
                      {/* TODO: legg inn fra-pris når dette er avklart */}
                      Fastpristilbud etter gjennomgang av brannkonseptet
                    </p>
                    <p className="text-brand-darkgray text-xs">Kontakt oss for uforpliktende estimat.</p>
                  </div>

                  <div className="mt-6 bg-brand-lightgray rounded-[30px] p-8">
                    <h3 className="font-bold text-brand-black text-lg mb-4">Andre tjenester</h3>
                    <ul className="space-y-3">
                      {[
                        { href: '/brannkonsept', label: 'Brannkonsept' },
                        { href: '/brannprosjektering', label: 'Brannprosjektering' },
                        { href: '/branninspeksjon', label: 'Branninspeksjon' },
                      ].map((link) => (
                        <li key={link.href}>
                          <Link href={link.href} className="text-brand-darkgray hover:text-brand-orange transition-colors text-sm font-medium">→ {link.label}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 flex justify-center">
                    <Image
                      src="/images/sentralt-godkjent.png"
                      alt="Sentralt godkjent foretak"
                      width={160}
                      height={64}
                      className="object-contain"
                    />
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <ScrollReveal variant="fade">
        <section className="bg-brand-orange py-14">
          <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-brand-white text-2xl lg:text-3xl font-black mb-4">
              Kontakt oss for uavhengig kontroll i Bergen
            </h2>
            <Link href="/kontakt-oss" className="inline-block bg-brand-white text-brand-black font-bold px-8 py-3.5 rounded-[10px] hover:opacity-90 transition-opacity">
              Kontakt oss
            </Link>
          </div>
        </section>
      </ScrollReveal>
    </>
  )
}
