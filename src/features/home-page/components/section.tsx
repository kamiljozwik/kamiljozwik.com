import React, { PropsWithChildren } from 'react'

type Props = {
  title?: string
}

export const Section = ({ children, title = '' }: PropsWithChildren<Props>) => {
  return (
    <section className='mb-24'>
      <h2 className='font-bold text-3xl gradient-text mb-4'>{title}</h2>
      {children}
    </section>
  )
}
