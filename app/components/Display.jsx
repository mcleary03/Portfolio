import 'aframe';
import 'aframe-animation-component';
import 'aframe-particle-system-component';
import 'babel-polyfill';
import { Entity, Scene } from 'aframe-react';
import React, { Component } from 'react'
import Projects from './Projects'
import About from './About'
import AFrame from './AFrame'

export default class Display extends Component {
  constructor() {
    super()
  }

  render() {
    console.log('state:')
    console.log(this.props)

    if (this.props.vr && this.props.display.type.name == 'AFrame') {
      return (
        <Scene id='VRScene' embedded>
          <a-assets>
            <img
              id="milkyWayTexture"
              src="https://cdn.glitch.com/342beffd-f89e-4737-b3a9-73216740a52d%2Fmilkywaypan_brunier_2048.jpg?1501293293814"
              crossOrigin="anonymous"
            />
          </a-assets>
          {this.props.display}
        </Scene>
      )
    } else {
      return (
        <div>
          <div className='sidebar col-md-2'></div>
          <div id='main-display' className='col-md-8 vcenter'>
            {this.props.display}
          </div>
          <div className='sidebar col-md-2'></div>
        </div>
      )
    }
  }
}
