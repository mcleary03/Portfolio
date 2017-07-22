import { combineReducers } from 'redux'
import displayReducer from './displayReducer'
import projectsReducer from './projectsReducer'
import skillsReducer from './skillsReducer'

const reducers = combineReducers({
  displayReducer,
  projectsReducer,
  skillsReducer
})

export default reducers
