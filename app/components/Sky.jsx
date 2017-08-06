import { Entity } from 'aframe-react';
import React from 'react';

export default props => (
  <Entity
    id="sky"
    geometry="
    primitive: sphere;
    radius: 1000"
    material="
    src: https://cdn.glitch.com/342beffd-f89e-4737-b3a9-73216740a52d%2Fmilkywaypan_brunier_2048.jpg?1501293293814;
    shader: flat;
    side: back"
  />
)
