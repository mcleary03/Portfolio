import 'aframe';
import 'aframe-animation-component';
import 'babel-polyfill';
import {Entity, Scene} from 'aframe-react';
import React, { Component } from 'react';
import Planets from './Planets'
import Camera from './Camera'
import Cursor from './Cursor'
import Sky from './Sky'
import Sun from './Sun'

export default class AFrame extends Component {
  constructor(props) {
    super(props)
    // this.state = {};
  }

  changeFocus() {
    this.setState({

    })
  }

  distance(rPlanet, dSun) {
    return `0, 0, ${54.5 + rPlanet + (dSun * 4)}`
  }

  render () {
    return (
      <Entity>
        <Entity id="solarSystem">
          <Sky/>
          <Camera>
            <Cursor/>
          </Camera>
          <Entity
            light="type: point;
            cast-shadow: true;
            distance: 900"
            position='0 0 0'
          />
          <Sun/>
          <Planets/>
        </Entity>
      </Entity>
    )
  }
}

// <Entity position="5 5 60">
//   <Entity
//     camera="active"
//     look-controls
//     wasd-controls>
//     <Entity
//       cursor="fuse: true; fuseTimeout: 1000"
//       position="0 0 -1"
//       geometry="primitive: ring; radiusInner: 0.02; radiusOuter: 0.03"
//       material="color: #57c3f9; shader: flat; transparent: true; opacity: 0.5">
//     </Entity>
//   </Entity>
// </Entity>
