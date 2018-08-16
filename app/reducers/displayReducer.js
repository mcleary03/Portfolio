import React from 'react'
import Popup from '../components/Popup'

const displayReducer = (state = {display: <Popup/>}, action) => {
  Object.freeze(state)
  switch(action.type) {
    case 'SET_DISPLAY' :
      let newState = { ...state }
      newState.display = newDisplay(action)
      return newState
    default :
      return state
  }
}

const newDisplay = action => {
  switch(action.display) {
    case 'Portfolio' :
      return <Popup/>
    default :
      return <Popup/>
  }
}

export default displayReducer
