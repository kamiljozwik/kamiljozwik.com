import Image from 'next/image'
import Link from 'next/link'
import { PageHeader } from '@/components/page-header'
import { Button } from '@/components/ui/button'
import { getPostBySlug } from '@/lib/posts'

const slugs = [
  'generative-ai',
  'llm',
  'llm-parameters',
  'prompt-engineering',
  'llm-benchmarks',
  'ai-agents',
]

const Page = () => {
  const articles = slugs.map((slug) => {
    return getPostBySlug(slug)
  })

  return (
    <main>
      <PageHeader>Generative AI 101</PageHeader>
      <p>Here is a select list of articles that you can follow to easily get started with the concept of generative AI.</p>
      <div className="container mx-auto flex flex-col md:flex-row items-start py-8">
        <section className="flex-grow md:pr-8 mb-8 md:mb-0">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-5 top-0 h-full w-0.5 bg-muted-foreground" />

            {articles.map((topic, index) => (
              <div key={index} className="mb-10 flex items-start">
                {/* Dot on the line */}
                <div className="absolute left-[9px] mt-[23px] flex h-6 w-6 items-center justify-center rounded-full bg-blue-500 ring-4 ring-background z-10 text-white">
                  {index + 1}
                </div>

                {/* Content card */}
                <div className="ml-12 w-full rounded-lg shadow-lg bg-gray-50 p-5  dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                  <h3 className="mb-1 text-lg font-semibold text-foreground">
                    {topic?.title}
                  </h3>
                  <p className="mb-3 text-sm text-muted-foreground">
                    {topic?.description}
                  </p>
                  <Button asChild variant="default">
                    <Link
                      href={`posts/${topic?.slug}`}
                    >
                      Learn more
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </section>
        <div className="w-full md:w-1/3 flex-shrink-0 flex justify-center">
          <Image
            src="/img/student.webp"
            alt="Young student looks like a robot"
            width={200}
            height={300}
          />
        </div>
      </div>
    </main>
  )
}

export default Page
