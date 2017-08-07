import 'aframe'
import 'aframe-animation-component'
import 'babel-polyfill';
import {Entity, Scene} from 'aframe-react'
import React, { Component } from 'react'
import Planets from './Planets'
import Camera from './Camera'
import Sky from './Sky'
import Sun from './Sun'
import Card3D from './Card3D'
import Button3D from './Button3D'

export default class AFrame extends Component {
  constructor() {
    super()
  }

  render () {
    return (
      <Entity>
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
          <Button3D />
          <Sun/>
          <Planets/>
        </Entity>
      </Entity>
    )
  }
}
