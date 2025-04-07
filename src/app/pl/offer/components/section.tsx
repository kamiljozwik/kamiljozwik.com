import { cn } from '@/lib/utils'
import React, { PropsWithChildren } from 'react'

type Props = {
  id: string
  muted?: boolean
  className?: string
}

export const Section = ({ id, muted, className, children }: PropsWithChildren<Props>) => {
  return (
    <section
      id={id}
      className={cn(
        "w-full py-16 md:py-24 lg:py-32 rounded-3xl",
        { 'bg-muted/60': muted },
        className
      )}
    >
      <div className="container px-4 md:px-6 mx-auto">
        {children}
      </div>
    </section>
  )
}
