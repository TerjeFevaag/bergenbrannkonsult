import { NextRequest, NextResponse } from 'next/server'

const TO_EMAIL = 'post@bergenbrannkonsult.no'
const FROM_EMAIL = 'post@bergenbrannkonsult.no'
const FROM_NAME = 'Bergen Brannkonsult – Kontaktskjema'

function escapeHtml(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;')
}

const BLOB_HOST = /^https:\/\/[a-z0-9]+\.public\.blob\.vercel-storage\.com\//

export async function POST(req: NextRequest) {
  const apiKey = process.env.MAILERSEND_API_KEY
  if (!apiKey) {
    return NextResponse.json({ error: 'Konfigurasjonsfeil' }, { status: 500 })
  }

  const body = await req.json()
  const { navn, epost, telefon, prosjekttype, melding, vedlegg } = body

  if (!navn || !epost || !melding) {
    return NextResponse.json({ error: 'Mangler påkrevde felt' }, { status: 400 })
  }

  if (navn.length > 200 || epost.length > 200 || melding.length > 10000) {
    return NextResponse.json({ error: 'Felt er for langt' }, { status: 400 })
  }

  const prosjekttypeLabel: Record<string, string> = {
    brannkonsept: 'Brannkonsept',
    brannprosjektering: 'Brannprosjektering',
    branninspeksjon: 'Branninspeksjon',
    'uavhengig-kontroll': 'Uavhengig kontroll',
    annet: 'Annet',
  }

  type Vedlegg = { name: string; url: string; size: number }
  const vedleggListe: Vedlegg[] = (Array.isArray(vedlegg) ? vedlegg : []).slice(0, 4)
  for (const v of vedleggListe) {
    if (!BLOB_HOST.test(v.url)) {
      return NextResponse.json({ error: 'Ugyldig vedlegg-URL' }, { status: 400 })
    }
  }

  const eNavn = escapeHtml(navn)
  const eEpost = escapeHtml(epost)
  const eTelefon = escapeHtml(telefon || '')
  const eMelding = escapeHtml(melding)
  const eProsjekt = escapeHtml(prosjekttypeLabel[prosjekttype] ?? prosjekttype ?? '')

  const vedleggHtml = vedleggListe.length
    ? `<tr><td valign="top"><strong>Vedlegg:</strong></td><td>${vedleggListe.map(v => `<a href="${escapeHtml(v.url)}">${escapeHtml(v.name)}</a>`).join('<br>')}</td></tr>`
    : ''

  const vedleggText = vedleggListe.length
    ? `\nVedlegg:\n${vedleggListe.map(v => `- ${v.name}: ${v.url}`).join('\n')}`
    : ''

  const html = `
    <h2>Ny henvendelse fra bergenbrannkonsult.no</h2>
    <table cellpadding="6" style="border-collapse:collapse">
      <tr><td><strong>Navn:</strong></td><td>${eNavn}</td></tr>
      <tr><td><strong>E-post:</strong></td><td>${eEpost}</td></tr>
      ${telefon ? `<tr><td><strong>Telefon:</strong></td><td>${eTelefon}</td></tr>` : ''}
      ${prosjekttype ? `<tr><td><strong>Prosjekttype:</strong></td><td>${eProsjekt}</td></tr>` : ''}
      <tr><td valign="top"><strong>Melding:</strong></td><td>${eMelding.replace(/\n/g, '<br>')}</td></tr>
      ${vedleggHtml}
    </table>
  `

  const text = [
    `Navn: ${navn}`,
    `E-post: ${epost}`,
    telefon ? `Telefon: ${telefon}` : null,
    prosjekttype ? `Prosjekttype: ${prosjekttypeLabel[prosjekttype] ?? prosjekttype}` : null,
    `Melding:\n${melding}`,
    vedleggText || null,
  ].filter(Boolean).join('\n')

  const res = await fetch('https://api.mailersend.com/v1/email', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      from: { email: FROM_EMAIL, name: FROM_NAME },
      to: [{ email: TO_EMAIL, name: 'Bergen Brannkonsult' }],
      reply_to: { email: epost, name: navn },
      subject: `Ny forespørsel fra ${navn.slice(0, 80)}${prosjekttype ? ` – ${prosjekttypeLabel[prosjekttype] ?? prosjekttype}` : ''}`,
      html,
      text,
    }),
  })

  if (!res.ok) {
    const err = await res.text()
    console.error('MailerSend error:', err)
    return NextResponse.json({ error: 'Kunne ikke sende e-post' }, { status: 500 })
  }

  return NextResponse.json({ ok: true })
}
