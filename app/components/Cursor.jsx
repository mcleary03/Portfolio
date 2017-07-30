import { Entity } from 'aframe-react';
import React from 'react';

export default props => (
  <Entity position={'0 0 -1'}>
    <Entity
      cursor={{fuse: 'true', fuseTimeout: '1000'}}
      geometry={{
        primitive: 'ring',
        radiusInner: '0.02',
        radiusOuter: '0.03'}}
      material={{
        color: '#57C3F9',
        shader: 'flat',
        opacity: '0.5'}} />
  </Entity>
)
