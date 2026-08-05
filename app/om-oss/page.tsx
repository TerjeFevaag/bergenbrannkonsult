import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle, Phone, Mail, MapPin } from 'lucide-react'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Om oss | Brannkonsult AS i Bergen',
  description:
    'Brannkonsult AS utfører brannkonsept, brannprosjektering og branninspeksjon i Bergen og Hordaland. Sentralt godkjent foretak med over 1 500 prosjekter siden 2013.',
  alternates: { canonical: 'https://www.bergenbrannkonsult.no/om-oss' },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Hjem', item: 'https://www.bergenbrannkonsult.no' },
    { '@type': 'ListItem', position: 2, name: 'Om oss', item: 'https://www.bergenbrannkonsult.no/om-oss' },
  ],
}

export default function OmOssPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="bg-brand-dark py-16 lg:py-24">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="hero-1 flex items-center gap-2 text-brand-orange text-sm mb-4">
            <Link href="/" className="hover:underline">Hjem</Link>
            <span>/</span>
            <span>Om oss</span>
          </div>
          <h1 className="hero-2 text-brand-white text-4xl lg:text-5xl font-black max-w-2xl">
            Om Brannkonsult AS
          </h1>
          <p className="hero-3 text-brand-white/70 text-lg mt-4 max-w-xl leading-relaxed">
            Sentralt godkjent brannrådgiverfirma. Vi utfører brannkonsept, brannprosjektering og branninspeksjon i Bergen og Hordaland.
          </p>
        </div>
      </section>

      {/* Hvem er vi */}
      <section className="py-16 lg:py-24 bg-brand-white">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <ScrollReveal className="lg:w-1/2">
              <h2 className="text-brand-black text-3xl font-black mb-6">Hvem er vi?</h2>
              <p className="text-brand-darkgray leading-relaxed mb-5">
                Brannkonsult AS er et nasjonalt brannrådgivingsfirma med sentral godkjenning for brannprosjektering i tiltaksklasse 1 og 2. Vi hjelper privatpersoner, arkitekter og entreprenører med å få byggesaken i mål — raskt og til fast pris.
              </p>
              <p className="text-brand-darkgray leading-relaxed mb-5">
                Bergen og Hordaland er et av våre kjernemarkeder. Vi kjenner den lokale bygningsmassen godt: trehusbebyggelsen i Sandviken og på Nordnes, de eldre bygårdene i sentrum, og de nye utviklingsprosjektene i Åsane, Fana og Fyllingsdalen. For branninspeksjon er vi fysisk til stede i Bergen — vi møter opp, gjennomgår bygget og leverer tilstandsrapport med handlingsplan.
              </p>
              <p className="text-brand-darkgray leading-relaxed mb-8">
                Brannkonsept, brannprosjektering og uavhengig kontroll leveres digitalt og er ikke avhengig av fysisk befaring — noe som gir rask levering uansett hvor i Hordaland prosjektet befinner seg.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { number: '2013', label: 'Etablert' },
                  { number: '1500+', label: 'Prosjekter' },
                  { number: 'TKL 1+2', label: 'Godkjenning' },
                  { number: 'Bergen', label: 'Fysisk inspeksjon' },
                ].map((stat, i) => (
                  <div key={i} className="bg-brand-lightgray rounded-[20px] p-5 text-center">
                    <div className="text-brand-orange font-black text-2xl mb-1">{stat.number}</div>
                    <div className="text-brand-darkgray text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={150} className="lg:w-1/2">
              <div className="relative rounded-[30px] overflow-hidden h-80 lg:h-96">
                <Image
                  src="/images/Om-oss.jpg"
                  alt="Brannkonsult AS — Bergen"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Bergen-spesifikt */}
      <section className="py-16 lg:py-24 bg-brand-lightgray">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="max-w-3xl mx-auto">
            <h2 className="text-brand-black text-3xl font-black mb-5">Branninspeksjon i Bergen — vi er der fysisk</h2>
            <p className="text-brand-darkgray leading-relaxed mb-5">
              Bergen er en by med en særegen bygningsmasse. Trebygninger fra 1800-tallet, vernede kvartaler og eldre leiegårder som aldri ble bygget etter dagens brannkrav — det stiller krav til den som skal gjennomføre en branninspeksjon. Vi kjenner kravene, vi kjenner bygningene, og vi vet hva Bergen brannvesen forventer av dokumentasjonen.
            </p>
            <p className="text-brand-darkgray leading-relaxed mb-8">
              For borettslag, sameier og næringsbygg i Bergen tilbyr vi fysisk branninspeksjon: vi møter opp, går gjennom bygget systematisk og leverer en skriftlig tilstandsrapport med avvik rangert etter alvorlighetsgrad og en konkret handlingsplan for utbedring.
            </p>
            <Link
              href="/branninspeksjon"
              className="inline-block bg-brand-orange text-brand-white font-bold px-7 py-3.5 rounded-[10px] hover:opacity-90 transition-opacity"
            >
              Les mer om branninspeksjon
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Sentralt godkjent */}
      <section className="py-16 lg:py-24 bg-brand-white">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <ScrollReveal className="lg:w-1/2">
              <h2 className="text-brand-black text-3xl font-black mb-5">Sentralt godkjent foretak</h2>
              <p className="text-brand-darkgray leading-relaxed mb-5">
                Sentral godkjenning fra Direktoratet for byggkvalitet (DiBK) dokumenterer at foretaket har tilstrekkelig kompetanse og kvalitetssystem for å påta seg ansvarsrett i byggesaker. For deg som kunde betyr det at vi kan erklære ansvarsrett direkte overfor Bergen kommune — og at du har en forsikret, kvalitetssikret rådgiver i ryggen.
              </p>
              <ul className="space-y-3">
                {[
                  'Dokumentert faglig kompetanse innen brannprosjektering',
                  'Ansvarsforsikring som gir deg trygghet',
                  'Godkjent kvalitetssystem',
                  'Referanseprosjekter evaluert av DiBK',
                  'Kan erklære ansvarsrett overfor Bergen kommune',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-brand-darkgray">
                    <CheckCircle size={18} className="text-brand-orange shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </ScrollReveal>
            <ScrollReveal delay={150} variant="scale" className="lg:w-1/2 flex justify-center">
              <Image
                src="/images/sentralt-godkjent.png"
                alt="Sentralt godkjent"
                width={250}
                height={100}
                className="object-contain"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Nøytral rådgiver */}
      <section className="py-16 lg:py-24 bg-brand-lightgray">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="max-w-3xl">
            <h2 className="text-brand-black text-3xl font-black mb-5">Vi selger ingenting — bare råd</h2>
            <p className="text-brand-darkgray leading-relaxed mb-4">
              Brannkonsult AS tilbyr utelukkende rådgivning. Vi selger ingen branntekniske produkter, utfører ingen håndverkertjenester og har ingen kommersielle interesser i hvilke løsninger du velger. Det betyr at rådet vi gir alltid er i ditt beste interesse — ikke i vår.
            </p>
            <p className="text-brand-darkgray leading-relaxed">
              Mange av våre kunder i Bergen er arkitekter og entreprenører som setter pris på at de kan ringe oss underveis i prosjektet og få svar raskt — uten at det tikker inn på timepris.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact box */}
      <section className="py-16 lg:py-24 bg-brand-white">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="bg-brand-dark rounded-[30px] p-10 lg:p-16 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
              <div>
                <h2 className="text-brand-white text-2xl lg:text-3xl font-black mb-3">
                  Ta kontakt med oss
                </h2>
                <div className="space-y-2 text-brand-white/60 text-sm">
                  <div className="flex items-center gap-2">
                    <Phone size={14} />
                    <a href="tel:+4748481914" className="hover:text-brand-orange transition-colors">+47 484 81 914</a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail size={14} />
                    <a href="mailto:post@bergenbrannkonsult.no" className="hover:text-brand-orange transition-colors">post@bergenbrannkonsult.no</a>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={14} />
                    <span>Bergen og Hordaland</span>
                  </div>
                </div>
              </div>
              <Link
                href="/kontakt-oss"
                className="bg-brand-orange text-brand-white font-bold px-8 py-4 rounded-[10px] hover:opacity-90 hover:scale-[1.03] transition-all duration-200 whitespace-nowrap"
              >
                Få uforpliktende tilbud
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
