import '@scss/bootstrap.scss'
import '@scss/app.scss'

import { Provider } from 'react-redux'

import store from '@src/store'

export default function App ({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}
