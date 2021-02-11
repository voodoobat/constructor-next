import Head from 'next/head'

import Layout from '@components/layout/Layout/Layout'
import Constructor from '@components/constructor/Constructor/Constructor'
// import Canvas from '@components/constructor/CanvasBox/CanvasBox'
import LegendContainer from '@components/constructor/LegendContainer/LegendContainer'
import Legend from '@components/constructor/Legend/Legend'
import Group from '@components/canvas/Group/Group'

const style = {
  marginTop: '1em'
}

export default function index () {
  return <>
    <Head>
      <title>Создание холста</title>
    </Head>
    <Layout>
      <Constructor>
        {/* <Canvas /> */}
        <LegendContainer>
          <div>
            <Legend legend="">
              <Group matrix={[[3,3,3,7], [9,3,5,21]]}>
                {/* ... */}
              </Group>
            </Legend>
          </div>
          <div style={style}>
            <Legend legend="Стопицот колонок">
              <Group matrix={[[3,3,3,7,4,4,9,27,9,3,5,21,23,23,7,4,9,27,9,3,5,21]]}>
                {/* ... */}
              </Group>
            </Legend>
          </div>
          <div style={style}>
            <Legend legend="Стопицот рядов">
              <Group matrix={[[3], [9], [3], [27], [4], [9], [27], [33], [3]]}>
                {/* ... */}
              </Group>
            </Legend>
          </div>
          <div style={style}>
            <Legend legend="">
              <Group matrix={[[3,3,3,7,4,4,9,27], [9,3,5,21,23,23,7,4]]}>
                {/* ... */}
              </Group>
            </Legend>
          </div>
        </LegendContainer>
      </Constructor>
    </Layout>
  </>
}
