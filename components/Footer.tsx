import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-brand-white">
      <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Col 1: Logo + tagline */}
          <div>
            <div className="mb-5">
              <Image src="/images/logo-white.png" alt="Bergen Brannkonsult" width={234} height={72} className="object-contain" />
            </div>
            <p className="text-brand-white/60 text-sm leading-relaxed">
              Sentralt godkjent foretak for brannprosjektering i tiltaksklasse 1 og 2. Vi hjelper
              deg med brannkonsept, brannprosjektering og branninspeksjon i Bergen og Hordaland.
            </p>
          </div>

          {/* Col 2: Snarveier */}
          <div>
            <h3 className="font-bold text-brand-white mb-5 text-sm uppercase tracking-widest">
              Snarveier
            </h3>
            <ul className="space-y-3">
              {[
                { href: '/', label: 'Hjem' },
                { href: '/om-oss', label: 'Om oss' },
                { href: '/artikler/pipebrann', label: 'Artikler' },
                { href: '/kontakt-oss', label: 'Kontakt oss' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-brand-white/60 hover:text-brand-orange transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Tjenester */}
          <div>
            <h3 className="font-bold text-brand-white mb-5 text-sm uppercase tracking-widest">
              Tjenester
            </h3>
            <ul className="space-y-3">
              {[
                { href: '/brannkonsept', label: 'Brannkonsept' },
                { href: '/brannprosjektering', label: 'Brannprosjektering' },
                { href: '/branninspeksjon', label: 'Branninspeksjon' },
                { href: '/uavhengig-kontroll', label: 'Uavhengig kontroll' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-brand-white/60 hover:text-brand-orange transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-6 space-y-2 text-sm text-brand-white/60">
              <a href="tel:+4748481914" className="flex items-center gap-2 hover:text-brand-orange transition-colors">
                <Phone size={13} /> +47 484 81 914
              </a>
              <a href="mailto:post@bergenbrannkonsult.no" className="flex items-center gap-2 hover:text-brand-orange transition-colors">
                <Mail size={13} /> post@bergenbrannkonsult.no
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-brand-darkgray/30">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-brand-white/40 text-sm">
            © {new Date().getFullYear()} Brannkonsult AS. Alle rettigheter forbeholdt.
          </p>
          <Image
            src="/images/sentralt-godkjent.png"
            alt="Sentralt godkjent"
            width={100}
            height={40}
            className="object-contain"
          />
        </div>
      </div>
    </footer>
  )
}
