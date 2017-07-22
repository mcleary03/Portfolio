import React, { Component } from 'react'
import { setSkills } from '../reducers'
import Skills from './Skills'

export default class About extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className='about row text-center'>
        <div className='col-md-6 col-sm-12'>
          <h1 className='text-primary'>Michael Cleary</h1>
          <h2 className='text-info'>Full-Stack Developer</h2>
          <img className='img-circle' src='../app/images/profile_pic.png'/>
        </div>
        <div className='col-md-6 col-sm-12'>
          <h2 className='text-primary'>Skills</h2>
            <Skills />
        </div>
      </div>
    )
  }
}
