import { Entity } from 'aframe-react';
import React from 'react';

export default props => (
  <Entity
    id="sky"
    geometry="
    primitive: sphere;
    radius: 1000"
    material="
    src: #milkyWayTexture;
    shader: flat;
    side: back"
  />
)
