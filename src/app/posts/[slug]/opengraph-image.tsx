import { getPostBySlug } from '@/lib/posts'
import { ImageResponse } from 'next/og'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { OgImage } from './components/og-image'

// Image metadata
export const alt = 'About Acme'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

// Image generation
export default async function Image({ params }: { params: { slug: string } }) {
  // Font loading, process.cwd() is Next.js project directory
  const geistRegular = await readFile(
    join(process.cwd(), 'assets/font/geist-regular.ttf')
  )
  const geistBold = await readFile(
    join(process.cwd(), 'assets/font/geist-bold.ttf')
  )

  const meta = getPostBySlug(params.slug);


  return new ImageResponse(
    (
      // ImageResponse JSX element
      <OgImage meta={meta} />
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported opengraph-image
      // size config to also set the ImageResponse's width and height.
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