import { createStore } from 'redux'
import reducers from './reducers'

const store = createStore(reducers, [getState()])

export default store
