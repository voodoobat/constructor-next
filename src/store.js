import thunk from 'redux-thunk'
import { compose, createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import { isClient } from '@src/util'
import reducer from '@store/reducers'

let enhancer

enhancer = compose(applyMiddleware(thunk))

if (isClient) {
  enhancer = compose(
    applyMiddleware(thunk)
  )
}

export default createStore(reducer, composeWithDevTools(enhancer))
