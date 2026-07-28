'use client'

import { useState, useRef } from 'react'
import { upload } from '@vercel/blob/client'
import { Paperclip, X } from 'lucide-react'

type Status = 'idle' | 'uploading' | 'sending' | 'success' | 'error'

interface AttachedFile {
  file: File
  url?: string
  error?: string
}

const MAX_FILES = 4
const MAX_SIZE_MB = 20
const ALLOWED_EXTENSIONS = ['pdf', 'jpg', 'jpeg', 'png', 'gif', 'webp', 'dwg', 'dxf', 'doc', 'docx']

function formatSize(bytes: number) {
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KB`
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
}

function getExt(name: string) {
  return name.split('.').pop()?.toLowerCase() ?? ''
}

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [uploadProgress, setUploadProgress] = useState<string>('')
  const [attachments, setAttachments] = useState<AttachedFile[]>([])
  const [fileError, setFileError] = useState<string>('')
  const fileInputRef = useRef<HTMLInputElement>(null)

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const picked = Array.from(e.target.files ?? [])
    e.target.value = ''
    setFileError('')

    const remaining = MAX_FILES - attachments.length
    if (remaining <= 0) {
      setFileError(`Maks ${MAX_FILES} filer.`)
      return
    }

    const toAdd: AttachedFile[] = []
    for (const file of picked.slice(0, remaining)) {
      const ext = getExt(file.name)
      if (!ALLOWED_EXTENSIONS.includes(ext)) {
        setFileError(`Filtypen .${ext} er ikke tillatt.`)
        continue
      }
      if (file.size > MAX_SIZE_MB * 1024 * 1024) {
        setFileError(`${file.name} er større enn ${MAX_SIZE_MB} MB.`)
        continue
      }
      toAdd.push({ file })
    }
    setAttachments(prev => [...prev, ...toAdd])
  }

  function removeFile(index: number) {
    setAttachments(prev => prev.filter((_, i) => i !== index))
    setFileError('')
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setFileError('')

    const form = e.currentTarget
    const data = {
      navn: (form.elements.namedItem('navn') as HTMLInputElement).value,
      epost: (form.elements.namedItem('epost') as HTMLInputElement).value,
      telefon: (form.elements.namedItem('telefon') as HTMLInputElement).value,
      prosjekttype: (form.elements.namedItem('prosjekttype') as HTMLSelectElement).value,
      melding: (form.elements.namedItem('melding') as HTMLTextAreaElement).value,
    }

    // Upload files
    const uploaded: { name: string; url: string; size: number }[] = []
    if (attachments.length > 0) {
      setStatus('uploading')
      for (let i = 0; i < attachments.length; i++) {
        setUploadProgress(`Laster opp fil ${i + 1} av ${attachments.length}…`)
        try {
          const blob = await upload(attachments[i].file.name, attachments[i].file, {
            access: 'public',
            handleUploadUrl: '/api/upload',
          })
          uploaded.push({ name: attachments[i].file.name, url: blob.url, size: attachments[i].file.size })
        } catch {
          setStatus('error')
          setUploadProgress('')
          return
        }
      }
    }

    setStatus('sending')
    setUploadProgress('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, vedlegg: uploaded }),
      })
      if (res.ok) {
        setStatus('success')
        form.reset()
        setAttachments([])
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const isBusy = status === 'uploading' || status === 'sending'

  if (status === 'success') {
    return (
      <div className="bg-brand-lightgray rounded-[20px] p-10 text-center">
        <div className="text-4xl mb-4">✓</div>
        <h3 className="font-bold text-brand-black text-xl mb-2">Takk for henvendelsen!</h3>
        <p className="text-brand-darkgray">Vi svarer deg innen 24 timer.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="navn" className="block text-sm font-bold text-brand-black mb-1.5">
          Navn *
        </label>
        <input
          type="text"
          id="navn"
          name="navn"
          required
          className="w-full px-4 py-3 border border-brand-gray rounded-[10px] text-brand-black placeholder:text-brand-darkgray focus:outline-none focus:border-brand-orange transition-colors"
          placeholder="Ditt fulle navn"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="epost" className="block text-sm font-bold text-brand-black mb-1.5">
            E-post *
          </label>
          <input
            type="email"
            id="epost"
            name="epost"
            required
            className="w-full px-4 py-3 border border-brand-gray rounded-[10px] text-brand-black placeholder:text-brand-darkgray focus:outline-none focus:border-brand-orange transition-colors"
            placeholder="din@epost.no"
          />
        </div>
        <div>
          <label htmlFor="telefon" className="block text-sm font-bold text-brand-black mb-1.5">
            Telefon
          </label>
          <input
            type="tel"
            id="telefon"
            name="telefon"
            className="w-full px-4 py-3 border border-brand-gray rounded-[10px] text-brand-black placeholder:text-brand-darkgray focus:outline-none focus:border-brand-orange transition-colors"
            placeholder="+47 000 00 000"
          />
        </div>
      </div>

      <div>
        <label htmlFor="prosjekttype" className="block text-sm font-bold text-brand-black mb-1.5">
          Prosjekttype
        </label>
        <select
          id="prosjekttype"
          name="prosjekttype"
          className="w-full px-4 py-3 border border-brand-gray rounded-[10px] text-brand-black focus:outline-none focus:border-brand-orange transition-colors bg-brand-white"
        >
          <option value="">Velg type</option>
          <option value="brannkonsept">Brannkonsept</option>
          <option value="brannprosjektering">Brannprosjektering</option>
          <option value="branninspeksjon">Branninspeksjon</option>
          <option value="uavhengig-kontroll">Uavhengig kontroll</option>
          <option value="annet">Annet</option>
        </select>
      </div>

      <div>
        <label htmlFor="melding" className="block text-sm font-bold text-brand-black mb-1.5">
          Melding *
        </label>
        <textarea
          id="melding"
          name="melding"
          required
          rows={5}
          className="w-full px-4 py-3 border border-brand-gray rounded-[10px] text-brand-black placeholder:text-brand-darkgray focus:outline-none focus:border-brand-orange transition-colors resize-none"
          placeholder="Beskriv prosjektet ditt kort..."
        />
      </div>

      {/* File attachment */}
      <div>
        <label className="block text-sm font-bold text-brand-black mb-1.5">
          Vedlegg
        </label>

        {attachments.length > 0 && (
          <ul className="mb-3 space-y-2">
            {attachments.map((a, i) => (
              <li key={i} className="flex items-center justify-between bg-brand-lightgray rounded-[10px] px-4 py-2.5">
                <div className="flex items-center gap-2 min-w-0">
                  <Paperclip size={14} className="text-brand-orange shrink-0" />
                  <span className="text-sm text-brand-black truncate">{a.file.name}</span>
                  <span className="text-xs text-brand-darkgray shrink-0">{formatSize(a.file.size)}</span>
                </div>
                <button
                  type="button"
                  onClick={() => removeFile(i)}
                  className="ml-3 text-brand-darkgray hover:text-brand-black transition-colors shrink-0"
                  aria-label="Fjern fil"
                >
                  <X size={16} />
                </button>
              </li>
            ))}
          </ul>
        )}

        {attachments.length < MAX_FILES && (
          <>
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="w-full border-2 border-dashed border-brand-gray rounded-[10px] py-4 px-4 text-sm text-brand-darkgray hover:border-brand-orange hover:text-brand-orange transition-colors flex items-center justify-center gap-2"
            >
              <Paperclip size={16} />
              Legg til fil
            </button>
            <input
              ref={fileInputRef}
              type="file"
              multiple
              accept=".pdf,.jpg,.jpeg,.png,.gif,.webp,.dwg,.dxf,.doc,.docx"
              onChange={handleFileChange}
              className="hidden"
            />
          </>
        )}

        <p className="mt-1.5 text-xs text-brand-darkgray">
          PDF, JPG, PNG, DWG, DXF, DOC, DOCX — maks 20 MB per fil, opptil 4 filer
        </p>

        {fileError && (
          <p className="mt-1 text-sm text-red-600">{fileError}</p>
        )}
      </div>

      {status === 'error' && (
        <p className="text-red-600 text-sm">
          Noe gikk galt. Prøv igjen eller send e-post direkte til post@bergenbrannkonsult.no
        </p>
      )}

      {uploadProgress && (
        <p className="text-sm text-brand-darkgray">{uploadProgress}</p>
      )}

      <button
        type="submit"
        disabled={isBusy}
        className="w-full bg-brand-orange text-brand-white font-bold px-8 py-4 rounded-[10px] hover:opacity-90 transition-opacity text-base disabled:opacity-60"
      >
        {status === 'uploading' ? uploadProgress : status === 'sending' ? 'Sender…' : 'Send forespørsel'}
      </button>
    </form>
  )
}
