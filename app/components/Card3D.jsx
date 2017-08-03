import React, { Component } from 'react'
import { Entity } from 'aframe-react';
import '../scripts'

export default class Card3D extends Component {
  constructor(props) {
    super(props)

  }

  render() {
    return(
      <Entity id='Card3D'  position='-16 10 60'>
        <Entity
          geometry='
            primitive: plane;
            radius: 1'
          animation='
            dur: 10000;
            property: rotation;
            to: 0 360 0;
            easing: linear;
            loop: true'
          material='
            src: https://cdn.glitch.com/342beffd-f89e-4737-b3a9-73216740a52d%2Fprofile_pic.png?1501790286811;
            shader: flat;
            side: double'
          change-scale-on-hover={{scale: altScale}}
        >

        </Entity>
      </Entity>
    )
  }

}
