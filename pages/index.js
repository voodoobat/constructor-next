import Head from 'next/head'

import Layout from '@components/layout/Layout/Layout'
import Hero from '@components/common/Hero/Hero';
import Welcome from '@components/common/Welcome/Welcome'

export default function index () {
  return <>
    <Head>
      <title>Welcome</title>
    </Head>
    <Layout>
      <Hero />
      <Welcome />
    </Layout>
  </>
}
