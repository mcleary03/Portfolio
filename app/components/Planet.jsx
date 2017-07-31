import 'aframe';
import 'babel-polyfill';
import React, { Component } from 'react'
import { Entity, Scene } from 'aframe-react';

export default class Planet extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { id, radius, material } = this.props.planet
    const { x, y, z } = this.props.planet.position
    const { dur, loop, property, to, easing } = this.props.planet.animation

    return (
      <Entity
        position={ `${x} ${y} ${z}` }
        animation={{
          loop: true,
          dur,
          property,
          to,
          easing
        }}
      >
        <Entity
          id={id}
          geometry={{
            primitive: 'sphere',
            segmentsWidth: 64,
            segmentsHeight: 128,
            radius
          }}
          material={{
            src: material.src,
            shader: material.shader
          }}
        />
      </Entity>
    )
  }
}
