import Head from 'next/head'

import Layout from '@components/layout/Layout/Layout'
import Welcome from '@components/common/Welcome/Welcome'

export default function index () {
  return <>
    <Head>
      <title>Welcome</title>
    </Head>
    <Layout>
      <Welcome />
    </Layout>
  </>
}
