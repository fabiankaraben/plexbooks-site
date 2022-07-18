import '../styles/globals.css'
import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'
import Head from 'next/head'

import siteMetadata from '@/data/config/siteMetadata'
// import Analytics from '@/components/analytics'
import LayoutWrapper from '@/components/LayoutWrapper'

import CookieConsent from 'react-cookie-consent'

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme}>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      {/* <Analytics /> */}
      <LayoutWrapper>
        <Component {...pageProps} />
      </LayoutWrapper>
      <CookieConsent debug={false}>
        This website uses cookies to improve the user experience.
      </CookieConsent>
    </ThemeProvider>
  )
}

export default App
