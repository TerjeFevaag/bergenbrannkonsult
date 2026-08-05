import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle, ArrowRight, Phone } from 'lucide-react'
import ServiceCard from '@/components/ServiceCard'
import FAQAccordion from '@/components/FAQAccordion'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Brannprosjektering i Bergen | Brannkonsult AS',
  description:
    'Brannkonsult AS tilbyr brannkonsept, brannprosjektering og branninspeksjon i Bergen og Hordaland. Sentralt godkjent foretak. Få uforpliktende tilbud i dag.',
  alternates: { canonical: 'https://www.bergenbrannkonsult.no' },
}

const services = [
  {
    iconImage: '/images/icon-brannkonsept.gif',
    title: 'Brannkonsept',
    description:
      'Bergen kommune krever brannkonsept ved de fleste søknadspliktige byggesaker. Vi kjenner bygningsmassen — fra eldre trehus i Sandviken til nybygg i Åsane — og leverer søknadsklart dokument til fastpris.',
    href: '/brannkonsept',
  },
  {
    iconImage: '/images/icon-brannprosjektering.gif',
    title: 'Brannprosjektering',
    description:
      'Tilbygg, bruksendring eller rehabilitering av eldre bygård? Vi utarbeider komplett brannprosjektering med ansvarsrett overfor Bergen kommune. Fastpris fra kr 15 000, levering 5–10 virkedager.',
    href: '/brannprosjektering',
  },
  {
    iconImage: '/images/icon-branntilsyn.png',
    title: 'Branninspeksjon',
    description:
      'Fått pålegg fra Bergen brannvesen, eller ønsker du en grundig gjennomgang av byggets brannsikkerhet? Vi inspiserer hele bygningen og leverer tilstandsrapport med handlingsplan.',
    href: '/branninspeksjon',
  },
  {
    iconImage: '/images/icon-uavhengig-kontroll.png',
    title: 'Uavhengig kontroll',
    description:
      'Prosjektering i tiltaksklasse 2 utløser krav om uavhengig kontroll av brann. Vi gjennomgår brannkonseptet mot TEK17 og erklærer ansvarsrett som uavhengig kontrollerende overfor kommunen.',
    href: '/uavhengig-kontroll',
  },
]

const steps = [
  {
    step: '01',
    title: 'Kontakt oss',
    description: 'Send oss en forespørsel med informasjon om ditt prosjekt. Vi svarer innen 24 timer.',
  },
  {
    step: '02',
    title: 'Vi sender tilbud',
    description: 'Du mottar et fastpristilbud med tydelig leveransebeskrivelse. Ingen overraskelser.',
  },
  {
    step: '03',
    title: 'Vi prosjekterer',
    description: 'Etter aksept leverer vi komplett brannprosjektering klar for kommunen.',
  },
]

const stats = [
  { number: '1500+', label: 'Prosjekter siden 2013' },
  { number: 'TKL 1+2', label: 'Sentralt godkjent' },
  { number: 'Fast pris', label: 'Alltid bekreftet skriftlig' },
  { number: '5–10', label: 'Virkedager — standard levering' },
]

const faqItems = [
  {
    question: 'Hva koster et brannkonsept i Bergen og Hordaland?',
    answer:
      'Et brannkonsept i tiltaksklasse 2 starter fra ca. 15 000 kr ekskl. mva., inkludert branntegninger og all dokumentasjon klar til byggesøknaden. Prisen er den samme uavhengig av om prosjektet er i Bergen sentrum, Askøy, Voss eller Os. Vi gir alltid fastpris skriftlig før vi starter — ingen timepris, ingen overraskelser.',
  },
  {
    question: 'Hva krever kommunen av brannteknisk dokumentasjon?',
    answer:
      'Kommunene i Hordaland — inkludert Bergen, Askøy, Bjørnafjorden, Alver og Osterøy — krever som regel et komplett brannkonsept ved tilbygg, bruksendring, ny selvstendig boenhet og nybygg. Vi leverer søknadsklart dokument med branntegninger og erklærer ansvarsrett direkte overfor din kommune.',
  },
  {
    question: 'Gjelder det spesielle krav for eldre trehus og bygårder i Bergen?',
    answer:
      'Ja. Eldre trebygninger og bygårder fra tidlig 1900-tall har ofte planløsninger som ikke oppfyller dagens krav til branncelleinndeling og rømningsveier. Det betyr ikke at prosjektet er umulig — men det krever erfaring med denne typen bygg. Vi kjenner bygningsmassen i Bergen og omegn og vet hva kommunen aksepterer av løsninger.',
  },
  {
    question: 'Utfører dere branninspeksjon fysisk i Bergen og Hordaland?',
    answer:
      'Ja — branninspeksjon utfører vi fysisk på stedet i hele Hordaland. Vi møter opp, går gjennom bygget systematisk og leverer skriftlig tilstandsrapport med avvik og handlingsplan. Dette gjelder borettslag, sameier og næringsbygg i Bergen, Askøy, Osterøy, Bjørnafjorden og resten av regionen.',
  },
  {
    question: 'Er dere sentralt godkjent og kan dere ta ansvarsrett?',
    answer:
      'Ja. Vi har sentral godkjenning fra DiBK for brannprosjektering i tiltaksklasse 1 og 2, og kan erklære ansvarsrett overfor alle kommuner i Hordaland. Godkjenningen dokumenterer faglig kompetanse, ansvarsforsikring og godkjent kvalitetssystem.',
  },
]

const articles = [
  {
    href: '/artikler/pipebrann',
    image: '/images/article-pipebrann.jpg',
    title: 'Forebygg pipebrann med enkle grep',
    excerpt:
      'Er du i faresonen for å kunne få brann i skorsteinen? Les om hva som forårsaker pipebrann og enkle tiltak for å redusere risikoen.',
  },
  {
    href: '/artikler/brannslokker',
    image: '/images/article-brannslukker.jpg',
    title: 'Har du riktig brannslokkeapparat?',
    excerpt:
      'Vet du hvilken type brannslokker du trenger i hjemmet? Vi gjennomgår krav og forskjellen mellom pulver- og skumapparater.',
  },
  {
    href: '/artikler/roykvarsler',
    image: '/images/article-roykvarsler.jpg',
    title: 'Riktig røykvarsler redder liv',
    excerpt:
      'Er du godt nok sikret hvis det oppstår brann om natten? Vi forklarer krav til røykvarslere og riktig plassering.',
  },
]

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center">
        <Image
          src="/images/hero.avif"
          alt="Bergen by"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-black/80 via-brand-black/60 to-brand-black/30" />
        <div className="relative z-10 w-full max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <p className="hero-1 font-accent text-brand-orange text-xl lg:text-2xl mb-4">
            Brannrådgiver i Bergen — vi kjenner bygningsmassen
          </p>
          <h1 className="hero-2 text-brand-white text-4xl lg:text-5xl xl:text-6xl font-black leading-tight mb-6 max-w-2xl">
            Brannprosjektering i Bergen og Hordaland
          </h1>
          <p className="hero-3 text-brand-white/80 text-base lg:text-lg leading-relaxed mb-8 max-w-xl">
            Vi hjelper private, arkitekter og entreprenører med brannkonsept, brannprosjektering og branninspeksjon — fra eldre trehus i Sandviken til nybygg på Mindemyren. Sentralt godkjent, fastpris, levering 5–10 virkedager.
          </p>
          <div className="hero-4 flex flex-wrap gap-4 mb-10">
            <Link
              href="/kontakt-oss"
              className="bg-brand-orange text-brand-white font-bold px-8 py-3.5 rounded-[10px] hover:opacity-90 hover:scale-[1.03] transition-all duration-200"
            >
              Få gratis tilbud
            </Link>
            <Link
              href="/om-oss"
              className="border-2 border-brand-white text-brand-white font-bold px-8 py-3.5 rounded-[10px] hover:bg-brand-white hover:text-brand-black transition-all duration-200"
            >
              Om oss
            </Link>
          </div>
          <div className="hero-5 flex flex-wrap items-center gap-6 text-sm text-brand-white/70">
            <div className="flex items-center gap-2">
              <CheckCircle size={16} className="text-brand-orange shrink-0" />
              Sentralt godkjent TKL 1+2
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={16} className="text-brand-orange shrink-0" />
              Fast pris
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-16 lg:py-24 bg-brand-lightgray">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-12">
            <p className="font-accent text-brand-orange text-xl mb-2">Våre tjenester</p>
            <h2 className="text-brand-black text-3xl lg:text-4xl font-black">
              Hva kan vi hjelpe deg med?
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services.map((service, i) => (
              <ScrollReveal key={service.href} delay={i * 80}>
                <ServiceCard {...service} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-16 lg:py-24 bg-brand-white">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-12">
            <p className="font-accent text-brand-orange text-xl mb-2">Enkel prosess</p>
            <h2 className="text-brand-black text-3xl lg:text-4xl font-black">Slik jobber vi</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((s, i) => (
              <ScrollReveal key={i} delay={i * 120} className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-brand-orange flex items-center justify-center text-brand-white font-black text-xl mb-5 shadow-lg shadow-brand-orange/30">
                  {s.step}
                </div>
                <h3 className="font-bold text-brand-black text-xl mb-3">{s.title}</h3>
                <p className="text-brand-darkgray leading-relaxed">{s.description}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRUST STRIP ── */}
      <section className="bg-brand-dark py-12">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <ScrollReveal key={i} delay={i * 80} variant="scale" className="text-center">
                <div className="text-brand-orange font-black text-3xl lg:text-4xl mb-2">
                  {stat.number}
                </div>
                <div className="text-brand-white text-sm lg:text-base">{stat.label}</div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── HVORFOR VELGE OSS ── */}
      <section className="py-16 lg:py-24 bg-brand-lightgray">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-12">
            <p className="font-accent text-brand-orange text-xl mb-2">Hvorfor velge oss?</p>
            <h2 className="text-brand-black text-3xl lg:text-4xl font-black">Vi kjenner Bergen</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Lokalkunnskap',
                body: 'Vi kjenner Bergens bygningstype — trehusene i Sandviken og på Nordnes, de eldre bygårdene i sentrum, og de nye utviklingsprosjektene i Åsane og Fana. Det gir raskere og bedre løsninger for ditt prosjekt.',
              },
              {
                title: 'Bergen kommunes krav',
                body: 'Vi kjenner Bergen kommunes saksbehandlingspraksis og vet hva de forventer av dokumentasjonen. Brannkonseptet vi leverer er tilpasset kommunens krav og kan godkjennes direkte.',
              },
              {
                title: 'Nøytral rådgiver',
                body: 'Vi selger ingen produkter og har ingenting å tjene på valg av løsning. Rådgivningen er alltid i din interesse — vi gir deg den mest hensiktsmessige og kostnadseffektive brannsikringen.',
              },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="bg-brand-white rounded-[20px] p-7 h-full">
                  <h3 className="font-bold text-brand-black text-lg mb-3">{item.title}</h3>
                  <p className="text-brand-darkgray leading-relaxed text-sm">{item.body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-16 lg:py-24 bg-brand-white">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-brand-black text-3xl lg:text-4xl font-black mb-10">
              Ofte stilte spørsmål
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={80} variant="fade">
            <FAQAccordion items={faqItems} />
          </ScrollReveal>
        </div>
      </section>

      {/* ── ARTICLES ── */}
      <section className="py-16 lg:py-24 bg-brand-lightgray">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="flex items-end justify-between mb-10">
            <h2 className="text-brand-black text-3xl lg:text-4xl font-black">Nyttige artikler</h2>
            <Link
              href="/artikler"
              className="text-brand-orange font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all"
            >
              Se alle <ArrowRight size={16} />
            </Link>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {articles.map((a, i) => (
              <ScrollReveal key={a.href} delay={i * 80}>
                <Link
                  href={a.href}
                  className="group bg-brand-white rounded-[30px] overflow-hidden border border-brand-gray hover:-translate-y-1 hover:shadow-lg transition-all duration-300 flex flex-col h-full"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={a.image}
                      alt={a.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="font-bold text-brand-black text-lg mb-2 group-hover:text-brand-orange transition-colors duration-200">
                      {a.title}
                    </h3>
                    <p className="text-brand-darkgray text-sm leading-relaxed mb-4 flex-1">{a.excerpt}</p>
                    <span className="text-brand-orange font-bold text-sm flex items-center gap-1">
                      Les mer <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="bg-brand-orange py-16 lg:py-20">
        <ScrollReveal variant="fade" className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-brand-white text-3xl lg:text-4xl font-black mb-4">
            Klar for å komme i gang?
          </h2>
          <p className="text-brand-white/80 text-lg mb-8 max-w-xl mx-auto">
            Ta kontakt i dag for et uforpliktende tilbud på brannprosjektering i Bergen.
            Vi svarer innen 24 timer.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/kontakt-oss"
              className="bg-brand-white text-brand-black font-bold px-8 py-3.5 rounded-[10px] hover:opacity-90 hover:scale-[1.03] transition-all duration-200"
            >
              Få gratis tilbud
            </Link>
            <a
              href="tel:+4748481914"
              className="border-2 border-brand-white text-brand-white font-bold px-8 py-3.5 rounded-[10px] hover:bg-brand-white hover:text-brand-black transition-all duration-200 flex items-center gap-2"
            >
              <Phone size={16} /> Ring oss
            </a>
          </div>
        </ScrollReveal>
      </section>
    </>
  )
}
