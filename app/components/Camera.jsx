import { Entity } from 'aframe-react';
import React from 'react';

export default props => (
  <Entity
    position={'-12 10 58'}
    rotation={'-20 -127 0'}>
    <Entity
      camera
      look-controls
      wasd-controls
    />
  </Entity>
)
