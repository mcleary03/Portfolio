import 'aframe';
import 'aframe-animation-component';
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
    if (this.props.vr && this.props.display.type.name == 'AFrame') {
      return (
        <div>
          <Scene
            id='VRScene'
            embedded
            light="defaultLightsEnabled: false"
          >
            {this.props.display}
          </Scene>
        </div>
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
