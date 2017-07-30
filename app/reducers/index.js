import { combineReducers } from 'redux'
import displayReducer from './displayReducer'
import projectsReducer from './projectsReducer'
import skillsReducer from './skillsReducer'
import planetsReducer from './planetsReducer'

const reducers = combineReducers({
  displayReducer,
  projectsReducer,
  skillsReducer,
  planetsReducer,
})

export default reducers
