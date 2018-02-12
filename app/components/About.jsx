import React, { Component } from 'react'
import { setSkills } from '../reducers'
import Skills from './Skills'

export default class About extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div id='About'>

        <div className=''>
          <h1>Michael Cleary</h1>
          <h2>Full-Stack Developer</h2>
        </div>

        <div className=''>
          <div className=''>
            <img className='headshot' src='./app/images/headshot_med.jpg'/>
          </div>

          <div className='aboutLinks'>
            <div className='link'>
              <a href='https://github.com/mcleary03'>Github<i className='fa fa-github' /></a>
            </div>
            <div className='link'>
              <a href='https://www.linkedin.com/in/michaelgcleary/'>Linkedin<i className='fa fa-linkedin-square' /></a>
            </div>
          </div>
        </div>

        <Skills />

      </div>
    )
  }
}
