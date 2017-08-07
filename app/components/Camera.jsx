import { Entity } from 'aframe-react';
import React from 'react';
import Cursor from './Cursor'

export default props => (
  <Entity
    id='Camera'
    position='-12 10 58'
    rotation='-20 -127 0'>
    <Entity
      camera
      fov='100'
      kinematic-body
      look-controls
      wasd-controls
      universal-controls/>
    <Entity laser-controls="hand: right" />
  </Entity>
)
