import type { NextPage } from 'next'

import siteMetadata from '@/data/config/siteMetadata'
import { PageSEO } from '@/components/SEO'
import Link from '@/components/Link'

const Home: NextPage = () => {
  return (
    <>
      <PageSEO
        title={`Free tech ebooks - ${siteMetadata.author}`}
        description={siteMetadata.description}
      />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
            What is Plexbooks?
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Plexbooks is a Creative Common licensed book sharing website.
          </p>
        </div>
      </div>
    </>
  )
}

export default Home
