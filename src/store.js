import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import reducer from '@src/reducers'

const isDev = (
  typeof window != 'undefined' &&
  typeof window.__REDUX_DEVTOOLS_EXTENSION__ != 'undefined'
)

let store = createStore(reducer, applyMiddleware(thunk))

if (isDev) {
  store = createStore(reducer, compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__()
  ))
}

export default store
