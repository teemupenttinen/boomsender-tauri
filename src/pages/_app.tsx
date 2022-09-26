import type { AppProps } from 'next/app'
import ViewTransition from '../components/animations/ViewTransition'

import '../styles/app.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ViewTransition>
      <Component {...pageProps} />
    </ViewTransition>
  )
}
