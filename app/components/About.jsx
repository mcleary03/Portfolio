import React, { Component } from 'react'
import { setSkills } from '../reducers'
import Skills from './Skills'

export default class About extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className='about text-center'>

        <div className='row'>
          <h1>Michael Cleary</h1>
          <h2>Full-Stack Developer</h2>
        </div>

        <div className='row'>
          <div className='col-md-6 col-sm-12'>
            <img className='img-circle' src='./app/images/profile_pic_color.jpg'/>
          </div>
          <div className='col-md-6 col-sm-12'>
            <div className='row'>
              <a href='https://github.com/mcleary03'>Github<i className='link fa fa-github' /></a>
            </div>
            <div className='row'>
              <a href='https://www.linkedin.com/in/michaelgcleary/'>Linkedin<i className='link fa fa-linkedin-square' /></a>
            </div>
          </div>
        </div>

        <div className='row'>
          <h2>Skills</h2>
          <Skills />
        </div>
      </div>
    )
  }
}
