import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export const GenAi = () => {
  return (
    <div className='mt-8 md:mt-0 rounded-lg p-6 bg-gray-50 dark:bg-gray-800 inset-shadow-sm inset-shadow-muted-foreground/20'>
      <h3 className='text-2xl font-bold text-center mb-6'>Generative AI 101</h3>
      <p className='pb-4 text-muted-foreground'>
        Get started with generative AI by reading the beginner-friendly articles recommended for any newcomer to the subject.
      </p>
      <div className='flex items-center justify-evenly flex-wrap py-6'>
        <Image src="/img/student.webp" alt="Young student looks like a robot" width={150} height={225} />
        <div className='flex justify-center'>
          <Button asChild variant="default">
            <Link href="/generative-ai-101">Get started</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
