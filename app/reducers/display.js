import merge from 'lodash/merge'

export default const changeView = (state = {display: 'about'}, action) => {
  Object.freeze(state)
  switch(action.type) {
    case 'CHANGE_DISPLAY' :
      let newState = merge({}, state)
      newState.display = action.display
      return newState
    default :
      return state
  }
}
