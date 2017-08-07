import React, { Component } from 'react'
import { Entity } from 'aframe-react';
import 'aframe-orbit-controls-component'
import '../scripts'

export default class Card3D extends Component {
  constructor(props) {
    super(props)

  }

  render() {
    return(
      <Entity
        id='Card3D'
        position='-16 10 60'
        change-scale-on-hover='scale: 2 2 2'
        orbit-controls
        target="#Camera"
        distance="2"
      >
        <Entity
          geometry='
            primitive: plane;
            width: 1;
            height: 1'
          material='
            src: https://cdn.glitch.com/342beffd-f89e-4737-b3a9-73216740a52d%2Fprofile_pic.png?1501790286811;
            shader: flat;
            side: double'
        >
        </Entity>
      </Entity>
    )
  }

}
