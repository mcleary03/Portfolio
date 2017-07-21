import { combineReducers } from 'redux'
import displayReducer from './displayReducer'
import projectsReducer from './projectsReducer'

const reducers = combineReducers({
  displayReducer,
  projectsReducer,
})

export default reducers
