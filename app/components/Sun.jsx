import { Entity } from 'aframe-react';
import React, { Component } from 'react';
import Planet from './Planet'

export default class Sun extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Planet planet={sun} />
    )
  }
}

const sun = {
  id: 'Sun',
  radius: 54.5,
  material: {
    src: 'https://cdn.glitch.com/342beffd-f89e-4737-b3a9-73216740a52d%2Ftexture_sun.jpg?1493694732340',
    shader: 'flat'
  },
  position: {x: 0, y: 0, z: 0},
  animation: {
    dur: 576000,
    property: 'rotation',
    to: '0 360 0',
    easing: 'linear'
  }
}
