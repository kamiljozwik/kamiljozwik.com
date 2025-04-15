import { PageHeader } from '@/components/page-header'
import { News } from '@/features/news/news'
import React from 'react'

export async function generateStaticParams() {
  return [
    { topic: 'webdev' },
  ]
}

const Page = () => {
  return (
    <main>
      <PageHeader>Web development news</PageHeader>
      <News limit={50} />
    </main>
  )
}

export default Page