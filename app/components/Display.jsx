import 'aframe';
import 'babel-polyfill';
import { Entity, Scene } from 'aframe-react';
import React, { Component } from 'react'
import Projects from './Projects'
import About from './About'
import AFrame from './AFrameComponents/AFrame'

export default class Display extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div id='main-display'>
        <div className='container'>
          {this.props.display}
        </div>
      </div>
    )
  }
}
