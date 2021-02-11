import Head from 'next/head'

import Layout from '@components/layout/Layout/Layout'
import Constructor from '@components/constructor/Constructor/Constructor'
// import Canvas from '@components/constructor/CanvasBox/CanvasBox'
import LegendContainer from '@components/constructor/LegendContainer/LegendContainer'

export default function index () {
  return <>
    <Head>
      <title>Создание холста</title>
    </Head>
    <Layout>
      <Constructor>
        {/* <Canvas /> */}
        <LegendContainer />
      </Constructor>
    </Layout>
  </>
}
