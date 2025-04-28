import { PageHeader } from '@/components/page-header'
import { News } from '@/features/news/news'
import { NewsFeeds } from '@/features/news/types'
import React from 'react'

export async function generateStaticParams() {
  return [
    { topic: 'webdev' },
    { topic: 'ai' },
  ]
}

type Props = {
  params: Promise<{ topic: string }>
}

const Page = async ({ params }: Props) => {
  const { topic } = await params; // "webdev" or "ai"

  const allowedTopics = ['webdev', 'ai'];
  const headerTitle = topic === 'webdev' ? 'Web development news' : 'AI news';

  if (!allowedTopics.includes(topic)) {
    return <div className='text-center'>Invalid news feed</div>
  }

  return (
    <main>
      <PageHeader>{headerTitle}</PageHeader>
      <News limit={50} feed={topic as NewsFeeds} />
    </main>
  )
}

export default Page