import { combineReducers } from 'redux'
import displayReducer from './displayReducer'
import projectsReducer from './projectsReducer'
import skillsReducer from './skillsReducer'
import planetsReducer from './planetsReducer'
import locationReducer from './locationReducer'

const reducers = combineReducers({
  displayReducer,
  projectsReducer,
  skillsReducer,
  planetsReducer,
  locationReducer,
})

export default reducers
