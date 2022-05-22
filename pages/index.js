import Head from 'next/head'
import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>IP_App</title>
        <meta name="description" content="This is our IP-App" />
        <link rel="shortcut icon" href="/assets/favicon.png" />
      </Head>
      <Header />
      <Main />
      <Footer />

    </>
  )
}
