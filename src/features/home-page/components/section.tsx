import React, { PropsWithChildren } from 'react'

type Props = {
  title?: string
}

export const Section = ({ children, title = '' }: PropsWithChildren<Props>) => {
  return (
    <section className='mb-12'>
      <h2 className="text-muted-foreground mb-4">{title}</h2>
      {children}
    </section>
  )
}
