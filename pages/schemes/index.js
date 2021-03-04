import Head from 'next/head'

import Layout from '@components/layout/Layout/Layout'
import Hero from '@components/common/Hero/Hero'
import Schemes from '@components/schemes/Schemes/Schemes'

export const getStaticProps = async () => {
  const res = await fetch('http://localhost:3000/api/schemes/')
  const schemes = await res.json()

  return {
    props: { schemes }
  }
}

export default function index ({ schemes }) {
  return <>
    <Head>
      <title>Мои схемы</title>
    </Head>
    <Layout>
      <Hero />
      <Schemes schemes={schemes} />
    </Layout>
  </>
}
