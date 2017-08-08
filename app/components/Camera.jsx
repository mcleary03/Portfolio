import { Entity } from 'aframe-react';
import React from 'react';

export default props => (
  <Entity
    id='Camera'
    position='-12 10 58'
    rotation='-20 -127 0'
  >
    <Entity
      camera
      kinematic-body
      look-controls
      wasd-controls
      gearvr-controls />
    <Entity laser-controls="hand: right" />
  </Entity>
)
