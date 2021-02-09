import Head from 'next/head'

import Layout from '@components/layout/Layout/Layout'
import Constructor from '@components/constructor/Constructor/Constructor'

export default function index () {
  return <>
    <Head>
      <title>Создание холста</title>
    </Head>
    <Layout>
      <Constructor />
    </Layout>
  </>
}
