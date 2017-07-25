import 'aframe';
import 'babel-polyfill';
import React, { Component } from 'react'
import { Entity, Scene } from 'aframe-react';

export default class Planet extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { id, radius, material } = this.props
    const { x, y, z } = this.props.position

    return (
      <Entity position={`${x} ${y} ${z}`}>
        <Entity
          id={id}
          geometry={{
            primitive: 'sphere',
            radius: radius}}
          material={{
            src: material,
            shader: 'flat'}} />
      </Entity>
    )
  }
}
