import merge from 'lodash/merge'

const planetsReducer = (state = {planets: PLANETS}, action) => {
  console.log('planets state:')
  console.log(state)
  Object.freeze(state)

  switch(action.type) {
    case 'SET_PLANETS' :
      let newState = merge({}, state)
      newState.planets = action.planets
      return newState
    default :
      return state
  }
}

export default planetsReducer

const PLANETS = [
  {
    id: 'Mercury',
    radius: 0.9,
    src: 'https://cdn.glitch.com/342beffd-f89e-4737-b3a9-73216740a52d%2Ftexture_mercury.jpg?1493695081322',
    position: {x: 0, y: 0, z: 60}
  },
  {
    id: 'Venus',
    radius: 0.19,
    src: 'https://cdn.glitch.com/342beffd-f89e-4737-b3a9-73216740a52d%2Ftexture_mercury.jpg?1493695081322',
    position: {x: 0, y: 10, z: 60}
  },
  {
    id: 'Earth',
    radius: 0.5,
    src: 'https://cdn.glitch.com/342beffd-f89e-4737-b3a9-73216740a52d%2Ftexture_mercury.jpg?1493695081322',
    position: {x: 0, y: -10, z: 60}
  }
]
