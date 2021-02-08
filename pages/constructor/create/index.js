import Head from 'next/head'

import Layout from '@components/layout/Layout/Layout'
import Container from '@components/layout/Container/Container'
import CreateForm from '@components/constructor/CreateForm/CreateForm'

export default function index () {
  return <>
    <Head>
      <title>Создание холста</title>
    </Head>
    <Layout>
     <Container>
       <CreateForm />
     </Container>
    </Layout>
  </>
}
