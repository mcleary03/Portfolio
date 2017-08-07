import React, { Component } from 'react'
import { connect } from 'react-redux'
import displayReducer from '../reducers'
import { setDisplay } from '../actions'
import 'aframe'
import { Entity, Scene } from 'aframe-react'
import 'aframe-orbit-controls-component'
import '../scripts'

class Button3D extends Component {
  constructor() {
    super()

    this.changeDisplay = this.changeDisplay.bind(this)
  }

  changeDisplay(event) {
    event.preventDefault()
    let scene = document.querySelector('Scene');
    scene.setAttribute('exit-vr')
    this.props.setDisplay('About')
  }

  render() {
    return (
      <Entity
        geometry='
          primitive: box;
          width: 0.5;
          height: 0.3;
          depth: 0.15'
        material='
          color: #CCF;
          opacity: 0.5'
        change-scale-on-hover='scale: 1.1 1.1 1.1'
        orbit-controls
        target='#Camera'
        distance='2'
        events={{buttondown: this.changeDisplay}}
      >
      <Entity
        text='
          value: Go Home;
          align: center;
          zOffset: 0.001;
          side: double'
        rotation='0 180 0'
      />
      </Entity>
    )
  }
}


const mapDispatchToProps = dispatch => (
  { setDisplay: display => dispatch(setDisplay(display)) }
)

export default connect(null, mapDispatchToProps)(Button3D)
