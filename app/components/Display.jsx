import React, { Component } from 'react'
import Projects from './Projects'
import About from './About'

export default class Display extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <div className='sidebar col-md-2'></div>
        <div id='main-display' className='col-md-8 vcenter'>
          {this.props.display}
        </div>
        <div className='sidebar col-md-2'></div>
      </div>
    )
  }
}
