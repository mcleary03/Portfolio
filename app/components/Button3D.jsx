import React, { Component } from 'react'
import { connect } from 'react-redux'
import displayReducer from '../reducers'
import { setDisplay } from '../actions'
import 'aframe'
import {Entity, Scene} from 'aframe-react'
import 'aframe-orbit-controls-component'
import '../scripts'
import About from './About'

class Button3D extends Component {
  constructor() {
    super()

    this.changeDisplay = this.changeDisplay.bind(this)
  }

  changeDisplay(event) {
    event.preventDefault()
    this.props.setDisplay('About')
  }

  render() {
    return (
      <Entity
        position='0 2 1'
        geometry='
          primitive: box;
          width: 1;
          height: 0.5;
          depth: 0.2'
        material='
          color: #CCF;
          opacity: 0.5'
        change-scale-on-hover='scale: 1.1 1.1 1.1'
        orbit-controls
        target="#Camera"
        distance="2"
        events={{click: this.changeDisplay}}
      >
      </Entity>
    )
  }
}

const mapDispatchToProps = dispatch => (
  { setDisplay: display => dispatch(setDisplay(display)) }
)

export default connect(null, mapDispatchToProps)(Button3D)
