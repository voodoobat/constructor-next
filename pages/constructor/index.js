import Head from 'next/head'

import Layout from '@components/layout/Layout/Layout'
import Container from '@components/layout/Container/Container'

export default function index () {
  return <>
    <Head>
      <title>Создание холста</title>
    </Head>
    <Layout>
      <Container>
        <h1>Конструктор</h1>
      </Container>
    </Layout>
  </>
}
