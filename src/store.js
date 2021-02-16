import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import reducer from '@src/reducers'

console.log(process.env)

const store = typeof window == 'undefined'
  ? createStore(reducer, applyMiddleware(thunk))
  : createStore(reducer, compose(
      applyMiddleware(thunk),
      process.env.NODE_ENV == 'development' &&
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__()
    ))

export default store
