import { Linkedin, Github } from 'lucide-react'
import { ExternalLink } from './ui/external-link'
import { Xlogo } from './logos/x'

export const Footer = () => {
  return (
    <footer className="flex flex-col pb-12 pt-24 mt-12 items-center justify-center gap-2">
      <div className='flex gap-3'>
        <ExternalLink
          href="https://x.com/jozwikk"
        >
          <Xlogo size={20} />
        </ExternalLink>
        <ExternalLink
          href="https://www.linkedin.com/in/kamiljozwik/"
        >
          <Linkedin size={20} />
        </ExternalLink>
        <ExternalLink
          href="https://github.com/kamiljozwik"
        >
          <Github size={20} />
        </ExternalLink>
      </div>
      <p className='text-muted-foreground'>kamiljozwik.com</p>
    </footer>
  )
}
