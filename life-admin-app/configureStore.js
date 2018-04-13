import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import rootReducer from './reducers/reducer.js'

const loggerMiddleware = createLogger({
  timestamp: false,
  colors : {
    title: false,
    prevState: false,
    action: false,
    nextState: false,
    error: false
  }
})

export default function configureStore(preloadedState) {
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware
    )
  )
}
