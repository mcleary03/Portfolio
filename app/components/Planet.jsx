import 'aframe'
import 'babel-polyfill';
import React, { Component } from 'react'
import { Entity } from 'aframe-react';
import 'aframe-physics-system'
import 'aframe-orbit-controls-component-2'
import '../scripts'

export default class Planet extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { id, radius, material, altScale, autoRotateSpeed } = this.props.planet
    const { x, y, z } = this.props.planet.position
    const { dur, loop, property, to, easing } = this.props.planet.animation


    return (
      <Entity
        orbit-controls={{
          autoRotate: true,
          target: '#Sun',
          autoRotateSpeed,
          distance: 54.5 + x
        }}
        position={ `${x} ${y} ${z}` }
        static-body
        change-scale-on-hover={{scale: altScale}}
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
          animation={{
            loop: true,
            dur,
            property,
            to,
            easing
          }}
        />
      </Entity>
    )
  }
}
