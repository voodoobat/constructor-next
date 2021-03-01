import Head from 'next/head'

import Layout from '@components/layout/Layout/Layout'
import CanvasContainer from '@components/canvas/CanvasContainer/CanvasContainer'
import LegendContainer from '@components/constructor/LegendContainer/LegendContainer'
import Constructor from '@components/constructor/Constructor/Constructor'

export default function index () {

  return <>
    <Head>
      <title>Создание холста</title>
    </Head>
    <Layout smallHeader>
      <Constructor>
        <CanvasContainer />
        <LegendContainer />
      </Constructor>
    </Layout>
  </>
}
