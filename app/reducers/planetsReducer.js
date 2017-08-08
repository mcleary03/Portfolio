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
    radius: 0.19,
    autoRotateSpeed: 4.787,
    material: {
      src: 'https://cdn.glitch.com/342beffd-f89e-4737-b3a9-73216740a52d%2Ftexture_mercury.jpg?1493695081322',
      shader: 'standard'
    },
    position: {x: 0, y: 0, z: 56.3},
    animation: {
      dur: 1407600,
      property: 'rotation',
      to: '0 360 0',
      easing: 'linear'
    },
    altScale: '2 2 2'
  },
  {
    id: 'Venus',
    radius: 0.475,
    autoRotateSpeed: 3.502,
    material: {
      src: 'https://cdn.glitch.com/342beffd-f89e-4737-b3a9-73216740a52d%2Ftexture_venus_atmosphere.jpg?1493695304768',
      shader: 'standard'
    },
    position: {x: 0, y: 0, z: 57.5},
    animation: {
      dur: 5832500,
      property: 'rotation',
      to: '0 -360 0',
      easing: 'linear'
    },
    altScale: '2 2 2'
  },
  {
    id: 'Earth',
    radius: 0.5,
    autoRotateSpeed: 2.978,
    material: {
      src: 'https://cdn.glitch.com/342beffd-f89e-4737-b3a9-73216740a52d%2Ftexture_earth_clouds.jpg?1493695248913',
      shader: 'standard'
    },
    position: {x: 0, y: 0, z: 59},
    animation: {
      dur: 23900,
      property: 'rotation',
      to: '0 360 0',
      easing: 'linear'
    },
    altScale: '2 2 2'
  },
  {
    id: 'Mars',
    radius: 0.265,
    autoRotateSpeed: 2.408,
    material: {
      src: 'https://cdn.glitch.com/342beffd-f89e-4737-b3a9-73216740a52d%2Ftexture_mars.jpg?1493695397580',
      shader: 'standard'
    },
    position: {x: 0, y: 0, z: 60.75},
    animation: {
      dur: 24600,
      property: 'rotation',
      to: '0 360 0',
      easing: 'linear'
    },
    altScale: '2 2 2'
  },
  {
    id: 'Jupiter',
    radius: 5.595,
    autoRotateSpeed: 1.307,
    material: {
      src: 'https://cdn.glitch.com/342beffd-f89e-4737-b3a9-73216740a52d%2Ftexture_jupiter.jpg?1493695529355',
      shader: 'standard'
    },
    position: {x: 0, y: 0, z: 77.9},
    animation: {
      dur: 9900,
      property: 'rotation',
      to: '0 360 0',
      easing: 'linear'
    },
    altScale: '2 2 2'
  },
  {
    id: 'Saturn',
    radius: 4.7,
    autoRotateSpeed: 0.969,
    material: {
      src: 'https://cdn.glitch.com/342beffd-f89e-4737-b3a9-73216740a52d%2Ftexture_saturn.jpg?1493695550676',
      shader: 'standard'
    },
    position: {x: 0, y: 0, z: 97.25},
    animation: {
      dur: 10700,
      property: 'rotation',
      to: '0 360 0',
      easing: 'linear'
    },
    altScale: '2 2 2'
  },
  {
    id: 'Uranus',
    radius: 2.02,
    autoRotateSpeed: 0.681,
    material: {
      src: 'https://cdn.glitch.com/342beffd-f89e-4737-b3a9-73216740a52d%2Ftexture_uranus.jpg?1493695576218',
      shader: 'standard'
    },
    position: {x: 0, y: 0, z: 133.3},
    animation: {
      dur: 17200,
      property: 'rotation',
      to: '0 -360 0',
      easing: 'linear'
    },
    altScale: '2 2 2'
  },
  {
    id: 'Neptune',
    radius: 1.94,
    autoRotateSpeed: 0.543,
    material: {
      src: 'https://cdn.glitch.com/342beffd-f89e-4737-b3a9-73216740a52d%2Ftexture_neptune.jpg?1493695599570',
      shader: 'standard'
    },
    position: {x: 0, y: 0, z: 176.4},
    animation: {
      dur: 16100,
      property: 'rotation',
      to: '0 360 0',
      easing: 'linear'
    },
    altScale: '2 2 2'
  }
]
