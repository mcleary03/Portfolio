import 'aframe';
import 'babel-polyfill';
import React, { Component } from 'react'
import { Entity, Scene } from 'aframe-react';

export default class Planet extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { id, radius, src } = this.props.planet
    const { x, y, z } = this.props.planet.position

    return (
      <Entity position={ `${x} ${y} ${z}` }>
        <Entity
          id={id}
          geometry={{
            primitive: 'sphere',
            segmentsWidth: 64,
            segmentsHeight: 128,
            radius
          }}
          material={{ src }} />
      </Entity>
    )
  }
}
