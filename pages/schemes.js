import Head from 'next/head'

import Layout from '@components/layout/Layout/Layout'
import Hero from '@components/common/Hero/Hero';

export default function index () {
  return <>
    <Head>
      <title>Твои схемы</title>
    </Head>
    <Layout>
      <Hero />
    </Layout>
  </>
}
