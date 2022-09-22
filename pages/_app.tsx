import '../styles/globals.css'
import Layout from '../components/Layout'
// import {ReactElement,ReactNode} from 'react'
// import {NextPage} from 'next'
 
import type { AppProps } from 'next/app'

// type NextPageWithLayout = AppProps & {
//   getLayout?: (page: ReactElement) => ReactNode
// }

// type AppPropsWithoutLayout = AppProps & {
//   Component: NextPageWithLayout
// }
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
