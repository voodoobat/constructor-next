import Head from 'next/head'

import Layout from '@components/layout/Layout/Layout'
import Hero from '@components/common/Hero/Hero';
import Welcome from '@src/components/common/Welcome/Welcome'

export default function index () {
  return <>
    <Head>
      <title>Бесплатная онлайн-программа по созданию схем для вязания</title>
    </Head>
    <Layout>
      <Hero />
      <Welcome />
    </Layout>
  </>
}
