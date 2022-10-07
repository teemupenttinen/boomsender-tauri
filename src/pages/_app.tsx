import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'

import ViewTransition from '../components/animations/ViewTransition'
import { Footer } from '../components/Footer'
import { backButtonStyle } from '../styles/app.css'
import { useViews } from '../utils/useViews'

export default function MyApp({ Component, pageProps }: AppProps) {
  const { relativePath } = useViews()
  const { back } = useRouter()

  return (
    <>
      {relativePath && (
        <button className={backButtonStyle} onClick={back}>
          Back
        </button>
      )}
      <ViewTransition>
        <Component {...pageProps} />
      </ViewTransition>
      <Footer />
    </>
  )
}
