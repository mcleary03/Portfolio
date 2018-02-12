import { Entity } from 'aframe-react';
import React from 'react';

export default props => (
  <Entity
    position={'0 0 -1'}
    cursor={{fuse: true, fuseTimeout: '500'}}
    geometry={{
      primitive: 'ring',
      radiusInner: '0.005',
      radiusOuter: '0.008'}}
    material={{
      color: '#57C3F9',
      shader: 'flat',
      opacity: '0.3'}}
  />
)
