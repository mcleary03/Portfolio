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
// THIS IS JUST TO TEST A-FRAME COMPONENT
    if (this.props.vr) {
      return (
          <Scene id='VRScene' embedded>
            <AFrame />
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
