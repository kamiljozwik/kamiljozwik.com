import React, { PropsWithChildren } from 'react'

export const Section = ({ children }: PropsWithChildren) => {
  return (
    <section>
      {children}
    </section>
  )
}
