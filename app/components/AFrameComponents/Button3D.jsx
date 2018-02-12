import React, { Component } from 'react'
import { connect } from 'react-redux'
import displayReducer from '../reducers'
import { setDisplay } from '../actions'
import 'aframe'
import { Entity, Scene } from 'aframe-react'
import '../scripts'

class Button3D extends Component {
  constructor() {
    super()

    this.changeDisplay = this.changeDisplay.bind(this)
  }

  changeDisplay(event) {
    event.preventDefault()
    const scene = document.querySelector('#VRScene');
    scene.setAttribute('exit-vr')
    this.props.setDisplay('About')
  }

  render() {
    return (
      <Entity
        position='0 -0.6 -1'
      >
        <Entity
          events={{ click: this.changeDisplay }}
          text='
            value: Go Home;
            align: center;
            zOffset: 0.001;
            side: double'
          geometry='
            primitive: box;
            width: 0.5;
            height: 0.3;
            depth: 0.15'
          material='
            color: #CCF;
            opacity: 0.5'
          change-scale-on-hover='scale: 1.1 1.1 1.1'
          rotation='-70 0 0'
        />
      </Entity>
    )
  }
}


const mapDispatchToProps = dispatch => (
  { setDisplay: display => dispatch(setDisplay(display)) }
)

export default connect(null, mapDispatchToProps)(Button3D)
