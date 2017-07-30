import React from 'react'
import merge from 'lodash/merge'
import About from '../components/About'
import AFrame from '../components/AFrame'
import Projects from '../components/Projects'

const displayReducer = (state = {display: <About/>}, action) => {
  Object.freeze(state)
  switch(action.type) {
    case 'SET_DISPLAY' :
      let newState = merge({}, state)
      newState.display = newDisplay(action)
      return newState
    default :
      return state
  }
}

const newDisplay = (action) => {
  switch(action.display) {
    case 'About' :
      return <About/>
    case 'Projects' :
      return <Projects/>
    case 'AFrame' :
      return <AFrame/>
    default :
      return <About/>
  }
}

export default displayReducer
