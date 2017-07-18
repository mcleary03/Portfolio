import merge from 'lodash/merge'

const displayReducer = (state = {display: 'projects'}, action) => {
  Object.freeze(state)
  switch(action.type) {
    case 'CHANGE_DISPLAY' :
      let newState = merge({}, state)
      newState.display = action.display
      console.log(newState)
      return newState
    default :
      return state
  }
}

export default displayReducer

// NEED TO FIX THIS TO ACTUALLY RETURN SOMETHING THAT CAN
//  CHANGE THE DISPLAY, NOT JUST THE LIST OF PROJECTS
