import Head from 'next/head'

import Layout from '@components/layout/Layout/Layout'
import Constructor from '@components/constructor/Constructor/Constructor'
import CreateForm from '@components/form/CreateForm/CreateForm'

export default function index () {
  return <>
    <Head>
      <title>Создание холста</title>
    </Head>
    <Layout>
      <Constructor inactive={true}>
        <CreateForm />
        <br />
      </Constructor>
    </Layout>
  </>
}
