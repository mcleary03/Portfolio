import { Entity } from 'aframe-react';
import React from 'react';
import Cursor from './Cursor'

export default props => (
  <Entity
    id='Camera'
    position={'-12 10 58'}
    rotation={'-20 -127 0'}>
    <Entity
      camera
      look-controls
      wasd-controls
      gearvr-controls/>
    <Entity
      laser-controls="hand: right"
      position="0.1 -0.6 -0.5" />
  </Entity>
)
