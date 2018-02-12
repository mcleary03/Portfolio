import 'aframe'
import 'aframe-animation-component'
import 'babel-polyfill';
import {Entity, Scene} from 'aframe-react'
import React, { Component } from 'react'
import Planets from './Planets'
import Camera from './Camera'
import Sky from './Sky'
import Sun from './Sun'

export default class AFrame extends Component {
  constructor() {
    super()
  }

  render () {
    return (
      <div>
        <Scene
          id='VRScene'
          embedded
          light="defaultLightsEnabled: false"
        >
          <Entity id="solarSystem">
            <Sky/>
            <Camera/>
            <Entity
              light="
                type: point;
                cast-shadow: true;
                distance: 900"
              position='0 0 0'
            />
            <Sun/>
            <Planets/>
          </Entity>
        </Scene>

        <hr/>
        <p>My first attempt at WebVR</p>
        <p>Click and drag to look around or hit the headset icon to enter VR</p>
        <p>The <code>escape</code> key will exit VR</p>
      </div>
    )
  }
}
