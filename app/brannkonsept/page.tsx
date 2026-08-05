import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { FileText, Phone, Mail, CheckCircle } from 'lucide-react'
import FAQAccordion from '@/components/FAQAccordion'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Brannkonsept i Bergen | Brannkonsult AS',
  description:
    'Brannkonsept i Bergen, Hordaland og Vestland. Sentralt godkjent TKL 1+2. Fastpristilbud fra kr 15 000 inkl. branntegninger — svar innen 24 timer.',
  alternates: { canonical: 'https://www.bergenbrannkonsult.no/brannkonsept' },
}

const faqItems = [
  {
    question: 'Hva er forskjellen på brannkonsept og brannteknisk notat?',
    answer:
      'Et brannteknisk notat brukes for enkle tiltak der kommunen ikke krever full prosjektering. For de fleste søknadspliktige byggesaker — tilbygg, bruksendring, nybygg — kreves et komplett brannkonsept. Vi veileder deg på hva som passer ditt prosjekt.',
  },
  {
    question: 'Gjelder det spesielle brannkrav for eldre trehus i Bergen?',
    answer:
      'Ja. Bergen har mange eldre trebygninger, særlig i Sandviken, på Nordnes og i kvartalene rundt Bryggen. Disse stiller særskilte krav til branncelleinndeling og rømningsveier siden de ikke er bygget etter dagens regelverk. Vi har erfaring med slike bygg og vet hva Bergen kommune forventer av dokumentasjonen.',
  },
  {
    question: 'Hva koster et brannkonsept i Bergen?',
    answer:
      'Et brannkonsept i tiltaksklasse 2 starter fra ca. 15 000 kr ekskl. mva., inkludert branntegninger. Vi tilbyr alltid fastpris — du vet hva det koster før vi starter. Send oss tegninger og prosjektbeskrivelse, så har du tilbud innen 24 timer.',
  },
  {
    question: 'Kan dere erklære ansvarsrett overfor Bergen kommune?',
    answer:
      'Ja. Vi er sentralt godkjent for brannprosjektering i tiltaksklasse 1 og 2, og kan erklære ansvarsrett direkte overfor Bergen kommune i byggesaken.',
  },
  {
    question: 'Er befaring nødvendig for prosjekter i Hordaland?',
    answer:
      'Sjelden. For nybygg og tilbygg i hele Hordaland — enten det er i Bergen sentrum, på Askøy, i Bjørnafjorden eller på Osterøy — holder det som regel med tegninger, kartdata og bilder. For eldre vernede bygg uten oppdatert tegningsgrunnlag kan befaring være nødvendig, og vi avtaler det i så fall som en del av oppdraget.',
  },
  {
    question: 'Hva trenger dere fra meg for å gi tilbud?',
    answer:
      'Vi trenger adresse eller matrikkel, antall etasjer og bruksareal, tegninger (situasjonsplan og plantegninger) og en kort beskrivelse av hva du skal gjøre. Send det på e-post, så svarer vi med fastpristilbud innen 24 timer.',
  },
  {
    question: 'Hvor raskt kan brannkonseptet leveres?',
    answer:
      'For de fleste prosjekter leverer vi innen 5–10 virkedager etter mottatt komplett underlag. Har du en spesifikk tidsfrist mot kommunen, oppgi den i forespørselen — vi er fleksible.',
  },
  {
    question: 'Dekker dere hele Hordaland?',
    answer:
      'Ja — vi leverer brannkonsept til hele Hordaland. Vi tar jevnlig oppdrag i Askøy, Bjørnafjorden (tidl. Os og Fusa), Alver, Osterøy, Voss, Samnanger, Kvam og resten av regionen. Takket være digitale kartdata og tegningsunderlag trenger vi sjelden å besøke prosjektstedet fysisk — avstand er ikke et hinder.',
  },
  {
    question: 'Hva bør jeg vite om brannkonsept før jeg bestiller?',
    answer: '',
    answerHtml:
      'Et brannkonsept skal dokumentere at bygget ditt oppfyller kravene i TEK17. Vi har samlet en grundig gjennomgang av hva et brannkonsept inneholder og hva du som byggherre bør kjenne til — se <a href="https://www.brannkonsult.no/brannkonsept/" class="text-brand-orange hover:underline">vår faglige gjennomgang av brannkonsept</a> for mer informasjon.',
  },
]

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Hjem', item: 'https://www.bergenbrannkonsult.no' },
    { '@type': 'ListItem', position: 2, name: 'Brannkonsept', item: 'https://www.bergenbrannkonsult.no/brannkonsept' },
  ],
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Brannkonsept',
  description: 'Utarbeidelse av brannkonsept og brannteknisk notat for byggesaker i Bergen og Hordaland. Inkluderer branntegninger og ansvarsrett i tiltaksklasse 1 og 2.',
  offers: {
    '@type': 'Offer',
    priceSpecification: {
      '@type': 'PriceSpecification',
      price: '15000',
      priceCurrency: 'NOK',
      description: 'Fra kr 15 000 ekskl. mva. i tiltaksklasse 2',
    },
  },
  provider: {
    '@type': 'ProfessionalService',
    name: 'Brannkonsult AS',
    url: 'https://www.bergenbrannkonsult.no',
  },
  areaServed: { '@type': 'City', name: 'Bergen' },
  serviceType: 'Brannkonsept og brannteknisk prosjektering',
}

export default function BrannkonseptPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      {/* Hero */}
      <section className="bg-brand-dark py-16 lg:py-24">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="hero-1 flex items-center gap-2 text-brand-orange text-sm mb-4">
            <Link href="/" className="hover:underline">Hjem</Link>
            <span>/</span>
            <span>Brannkonsept</span>
          </div>
          <h1 className="hero-2 text-brand-white text-4xl lg:text-5xl font-black max-w-2xl">
            Brannkonsept i Bergen
          </h1>
          <p className="hero-3 text-brand-white/70 text-lg mt-4 max-w-xl leading-relaxed">
            Vi utarbeider helhetlige brannkonsept for byggesaker i Bergen og Hordaland. Fastpris, rask levering og sentral godkjenning.
          </p>
        </div>
      </section>

      {/* Content + Sidebar */}
      <section className="py-16 lg:py-24 bg-brand-white">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main content */}
            <div className="lg:w-[65%]">
              <ScrollReveal>
                <p className="text-brand-darkgray text-lg leading-relaxed mb-8">
                  Skal du søke om byggetillatelse? Da krever kommunen brannteknisk dokumentasjon — og det er her vi kommer inn. Vi utarbeider komplette brannkonsept for private, arkitekter, entreprenører og utbyggere i Bergen og Hordaland. Med oss på laget får du en erfaren brannrådgiver som kjenner både regelverket og de lokale byggeskikkene — fra de historiske trehusene i Sandviken til moderne leilighetsbygg på Mindemyren. Fastpris, rask levering, og svar innen 24 timer.
                </p>
              </ScrollReveal>

              <ScrollReveal>
                <h2 className="text-brand-black text-2xl font-black mb-4">Hva inngår i brannkonseptet?</h2>
                <p className="text-brand-darkgray leading-relaxed mb-6">
                  Et brannkonsept dokumenterer at bygget oppfyller kravene i TEK17. Vi leverer et komplett søknadsklart dokument som Bergen kommune kan godkjenne direkte:
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    'Fastsettelse av risikoklasse (RKL) for alle bygningsdeler',
                    'Fastsettelse av brannklasse (BKL)',
                    'Oppdeling i brannceller og brannseksjoner',
                    'Beskrivelse av rømningsveier og røykventilasjon',
                    'Branntekniske tegninger (plantegninger med brannceller, rømning m.m.)',
                    'Vurdering av bærende og skille konstruksjoner',
                    'Krav til branntekniske installasjoner',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-brand-darkgray">
                      <CheckCircle size={18} className="text-brand-orange shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </ScrollReveal>

              <ScrollReveal>
                <h2 className="text-brand-black text-2xl font-black mb-4">Risikoklasse — hva gjelder for ditt bygg?</h2>
                <p className="text-brand-darkgray leading-relaxed mb-4">
                  Alle bygninger klassifiseres etter risikoklasse (RKL 1–6) og brannklasse (BKL 1–4). Risikoklassen bestemmes av hva bygget brukes til og hvilke konsekvenser en brann kan ha for personene som oppholder seg der.
                </p>
                <p className="text-brand-darkgray leading-relaxed mb-4">
                  I Bergen er det mange byggesaker som gjelder bruksendring i eldre bygårder — for eksempel ombygging av næringslokaler til bolig, eller etablering av ny leilighet i et eksisterende bygg. Disse utløser som regel RKL 2 og brannklasse 2.
                </p>
                <div className="bg-brand-lightgray rounded-[20px] p-6 mb-8">
                  <h3 className="font-bold text-brand-black mb-3">Eksempler på risikoklasser:</h3>
                  <ul className="space-y-2 text-brand-darkgray text-sm">
                    <li><strong>RKL 1:</strong> Garasjer, lager (ingen personopphold)</li>
                    <li><strong>RKL 2:</strong> Boliger med evakueringsmulighet fra egen enhet</li>
                    <li><strong>RKL 4:</strong> Kontorbygg, undervisningsbygg</li>
                    <li><strong>RKL 5:</strong> Hoteller, sykehjem (sover/overnatting)</li>
                    <li><strong>RKL 6:</strong> Sykehus (svekkede beboere)</li>
                  </ul>
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <h2 className="text-brand-black text-2xl font-black mb-4">Erfaring fra Bergen og Hordaland</h2>
                <p className="text-brand-darkgray leading-relaxed mb-6">
                  Siden 2013 har vi jobbet med over 1 200 brannprosjekter — mange av dem i Bergen og Hordaland. Vi kjenner bygningsmassen godt: trehusene i Sandviken og på Nordnes, bygårdene fra tidlig 1900-tall i sentrum, eldre næringsbygg langs havnefronten og nyere leilighetsprosjekter i Åsane og Fana. Det gjør at vi raskt ser hva som er krevende i et prosjekt — og hva som går greit.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    'Erfaring med eldre trebygninger og verneverdige kvartaler',
                    'Kjennskap til Bergen kommunes krav og saksbehandlingspraksis',
                    'Ansvarsrett overfor kommunen i tiltaksklasse 1 og 2',
                    'Fastpris bekreftet skriftlig før vi starter',
                    'Levering 5–10 virkedager',
                    'Svar på spørsmål underveis — uten ekstra kostnad',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-brand-darkgray">
                      <CheckCircle size={18} className="text-brand-orange shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </ScrollReveal>

              <ScrollReveal>
                <div className="bg-brand-lightgray rounded-[20px] p-6 mb-8">
                  <div className="flex items-start gap-4">
                    <FileText size={32} className="text-brand-orange shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-brand-black text-lg mb-2">Pris</h3>
                      <p className="text-brand-darkgray">
                        Fra ca. <strong className="text-brand-black">15 000 kr</strong> i tiltaksklasse 2, inkl. branntegninger og ekskl. mva. Alltid fastpris.
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <h2 className="text-brand-black text-2xl font-black mb-6">Ofte stilte spørsmål</h2>
              </ScrollReveal>
              <ScrollReveal delay={80} variant="fade">
                <FAQAccordion items={faqItems} />
              </ScrollReveal>
            </div>

            {/* Sidebar */}
            <div className="lg:w-[35%]">
              <ScrollReveal delay={200}>
                <div className="sticky top-24">
                  <div className="bg-brand-dark rounded-[30px] p-8 text-brand-white">
                    <h3 className="font-bold text-xl mb-3">Send tegningene — få fastpris</h3>
                    <p className="text-brand-white/60 text-sm mb-6 leading-relaxed">
                      Vi ser på prosjektet ditt og sender fastpristilbud innen 24 timer. Ingen forpliktelser.
                    </p>
                    <Link
                      href="/kontakt-oss"
                      className="block bg-brand-orange text-brand-white font-bold px-6 py-3.5 rounded-[10px] text-center hover:opacity-90 transition-opacity mb-6"
                    >
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

                  <div className="mt-6 bg-brand-lightgray rounded-[30px] p-8">
                    <h3 className="font-bold text-brand-black text-lg mb-4">Andre tjenester</h3>
                    <ul className="space-y-3">
                      {[
                        { href: '/brannprosjektering', label: 'Brannprosjektering' },
                        { href: '/branninspeksjon', label: 'Branninspeksjon' },
                        { href: '/uavhengig-kontroll', label: 'Uavhengig kontroll' },
                      ].map((link) => (
                        <li key={link.href}>
                          <Link href={link.href} className="text-brand-darkgray hover:text-brand-orange transition-colors text-sm font-medium">
                            → {link.label}
                          </Link>
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

      {/* Bottom CTA */}
      <ScrollReveal variant="fade">
        <section className="bg-brand-orange py-14">
          <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-brand-white text-2xl lg:text-3xl font-black mb-4">
              Send tegningene — vi svarer med fastpris innen 24 timer
            </h2>
            <Link href="/kontakt-oss" className="inline-block bg-brand-white text-brand-black font-bold px-8 py-3.5 rounded-[10px] hover:opacity-90 transition-opacity">
              Få tilbud nå
            </Link>
          </div>
        </section>
      </ScrollReveal>
    </>
  )
}
