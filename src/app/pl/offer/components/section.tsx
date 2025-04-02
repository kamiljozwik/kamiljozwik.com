import { cn } from '@/lib/utils'
import React, { PropsWithChildren } from 'react'

type Props = {
  id: string
  muted?: boolean
}

export const Section = ({ id, muted, children }: PropsWithChildren<Props>) => {
  return (
    <section id={id} className={cn("w-full py-12 md:py-24", { 'bg-muted/60': muted })}>
      <div className="container px-4 md:px-6">
        {children}

      </div>
    </section>
  )
}
