import { Entity } from 'aframe-react';
import React from 'react';
import Cursor from './Cursor'

export default props => (
  <Entity
    position={'-12 10 58'}
    rotation={'-20 -127 0'}>
    <Entity
      camera
      wasd-controls
      gearvr-controls
    >
    </Entity>
  </Entity>
)
