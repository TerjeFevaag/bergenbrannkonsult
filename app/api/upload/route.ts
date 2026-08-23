import { handleUpload, type HandleUploadBody } from '@vercel/blob/client'
import { NextRequest, NextResponse } from 'next/server'

const ALLOWED_ORIGINS = [
  'https://www.bergenbrannkonsult.no',
  'https://bergenbrannkonsult.no',
]

export async function POST(req: NextRequest): Promise<NextResponse> {
  const origin = req.headers.get('origin') ?? ''
  if (!ALLOWED_ORIGINS.includes(origin) && process.env.NODE_ENV !== 'development') {
    return NextResponse.json({ error: 'Ikke tillatt' }, { status: 403 })
  }

  const body = (await req.json()) as HandleUploadBody

  try {
    const result = await handleUpload({
      body,
      request: req,
      onBeforeGenerateToken: async () => ({
        allowedContentTypes: [
          'application/pdf',
          'image/jpeg',
          'image/png',
          'image/gif',
          'image/webp',
          'application/msword',
          'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        ],
        maximumSizeInBytes: 20 * 1024 * 1024,
      }),
      onUploadCompleted: async () => {},
    })

    return NextResponse.json(result)
  } catch (err) {
    return NextResponse.json({ error: (err as Error).message }, { status: 400 })
  }
}
