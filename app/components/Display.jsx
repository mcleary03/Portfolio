import 'babel-polyfill';
import React, { Component } from 'react'
import Projects from './Projects'
import About from './About'

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
