import { createStore } from 'redux'
import reducer from '../reducers'

export default function configureStore(initialState, isServer) {
  if (isServer && typeof window === 'undefined') {
    return createStore(reducer, initialState)
  } else {
    if (!window.store) {
      window.store = createStore(reducer, initialState,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 
      )
    }
    return window.store
  }
}
