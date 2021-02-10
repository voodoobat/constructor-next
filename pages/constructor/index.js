import Head from 'next/head'

import Layout from '@components/layout/Layout/Layout'
import Constructor from '@components/constructor/Constructor/Constructor'
// import Canvas from '@components/constructor/CanvasBox/CanvasBox'
import Group from '@components/canvas/Group/Group'

export default function index () {
  return <>
    <Head>
      <title>Создание холста</title>
    </Head>
    <Layout>
      <Constructor>
        <Group matrix={[[3,3,3, 7], [9,3,5, 21]]}>
          {/* ... */}
        </Group>
        {/* <Canvas /> */}
      </Constructor>
    </Layout>
  </>
}
