import { ImageResponse } from 'next/og'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { ModelsOgImage } from './_components/models-og-image'

export const alt = 'LLM Model Families'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default async function Image() {
  const geistRegular = await readFile(
    join(process.cwd(), 'assets/font/geist-regular.ttf')
  )
  const geistBold = await readFile(
    join(process.cwd(), 'assets/font/geist-bold.ttf')
  )

  return new ImageResponse(
    (<ModelsOgImage />),
    {
      ...size,
      fonts: [
        {
          name: 'Geist',
          data: geistRegular,
          style: 'normal',
          weight: 400,
        },
        {
          name: 'Geist',
          data: geistBold,
          style: 'normal',
          weight: 700,
        },
      ],
    }
  )
}
