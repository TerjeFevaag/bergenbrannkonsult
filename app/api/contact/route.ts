import { NextRequest, NextResponse } from 'next/server'

const TO_EMAIL = 'post@bergenbrannkonsult.no'
const FROM_EMAIL = 'post@bergenbrannkonsult.no'
const FROM_NAME = 'Bergen Brannkonsult – Kontaktskjema'

export async function POST(req: NextRequest) {
  const apiKey = process.env.MAILERSEND_API_KEY
  if (!apiKey) {
    return NextResponse.json({ error: 'Konfigurasjonsfeil' }, { status: 500 })
  }

  const body = await req.json()
  const { navn, epost, telefon, prosjekttype, melding } = body

  if (!navn || !epost || !melding) {
    return NextResponse.json({ error: 'Mangler påkrevde felt' }, { status: 400 })
  }

  const prosjekttypeLabel: Record<string, string> = {
    brannkonsept: 'Brannkonsept',
    brannprosjektering: 'Brannprosjektering',
    branninspeksjon: 'Branninspeksjon',
    'uavhengig-kontroll': 'Uavhengig kontroll',
    annet: 'Annet',
  }

  const html = `
    <h2>Ny henvendelse fra bergenbrannkonsult.no</h2>
    <table cellpadding="6" style="border-collapse:collapse">
      <tr><td><strong>Navn:</strong></td><td>${navn}</td></tr>
      <tr><td><strong>E-post:</strong></td><td>${epost}</td></tr>
      ${telefon ? `<tr><td><strong>Telefon:</strong></td><td>${telefon}</td></tr>` : ''}
      ${prosjekttype ? `<tr><td><strong>Prosjekttype:</strong></td><td>${prosjekttypeLabel[prosjekttype] ?? prosjekttype}</td></tr>` : ''}
      <tr><td valign="top"><strong>Melding:</strong></td><td>${melding.replace(/\n/g, '<br>')}</td></tr>
    </table>
  `

  const text = [
    `Navn: ${navn}`,
    `E-post: ${epost}`,
    telefon ? `Telefon: ${telefon}` : null,
    prosjekttype ? `Prosjekttype: ${prosjekttypeLabel[prosjekttype] ?? prosjekttype}` : null,
    `Melding:\n${melding}`,
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
      subject: `Ny forespørsel fra ${navn}${prosjekttype ? ` – ${prosjekttypeLabel[prosjekttype] ?? prosjekttype}` : ''}`,
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
