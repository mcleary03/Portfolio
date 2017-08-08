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
    )
  }
}
