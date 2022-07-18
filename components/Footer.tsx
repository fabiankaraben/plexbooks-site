import Link from './Link'
import siteMetadata from '@/data/config/siteMetadata'
// import SocialIcon from '@/components/social-icons'

export default function Footer() {
  return (
    <footer>
      <div className="mt-16 flex flex-col items-center">
        {/* <div className="mb-3 flex space-x-4">
          <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={6} />
          <SocialIcon kind="github" href={siteMetadata.github} size={6} />
          <SocialIcon kind="facebook" href={siteMetadata.facebook} size={6} />
          <SocialIcon kind="youtube" href={siteMetadata.youtube} size={6} />
          <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={6} />
          <SocialIcon kind="twitter" href={siteMetadata.twitter} size={6} />
        </div> */}
        {/* <div className="mb-4 text-sm text-gray-500 dark:text-gray-400">
          <Link href="/politica-de-cookies">Política de Cookies</Link>
          <span className="mx-2">|</span>
          <Link href="/politica-de-privacidad">Política de Privacidad</Link>
          <span className="mx-2">|</span>
          <Link href="/aviso-legal">Aviso Legal</Link>
        </div> */}
        <div className="mb-8 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>{siteMetadata.author}</div>
          <div>{` • `}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>{` • `}</div>
          <Link href="/">{siteMetadata.title}</Link>
        </div>
      </div>
    </footer>
  )
}
