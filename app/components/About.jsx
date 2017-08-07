import React, { Component } from 'react'
import { setSkills } from '../reducers'
import Skills from './Skills'
import Button3D from './Button3D'

export default class About extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className='about row text-center'>
        <div className='col-md-6 col-sm-12'>
          <h1>Michael Cleary</h1>
          <h2>Full-Stack Developer</h2>
          <img className='img-circle' src='./app/images/profile_pic.png'/>
        </div>
        <div className='col-md-6 col-sm-12'>
          <h2>Skills</h2>
            <Skills />
        </div>
      </div>
    )
  }
}
