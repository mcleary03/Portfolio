import React from 'react'
import merge from 'lodash/merge'

const locationReducer = (state = {lat: 37.7749, lon: 122.4194}, action) => {
  Object.freeze(state)
  switch(action.type) {
    case 'UNWATCH_GEOLOCATION' :
      // Don't change state so we still have most recent location
      navigator.geolocation.clearWatch(watchID)
      return state
    case 'UPDATE_GEOLOCATION' :
      let newState = merge({}, state)
      let watchID = navigator.geolocation.watchPosition( position => {
        newState.position = position
        newState.lat = position.coords.latitude
        newState.lon = position.coords.longitude
      })
      return newState
    default :
      return state
  }
}

export default locationReducer
