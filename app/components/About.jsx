import React, { Component } from 'react'
import { setSkills } from '../reducers'
import Skills from './Skills'

export default class About extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div id='About' className='grid'>

        <div className=''>
          <h2>Full-Stack Developer</h2>
        </div>

        <div className=''>
          <div className=''>
            <img className='headshot' src='./app/images/headshot_med.jpg'/>
          </div>

          <div className='aboutLinks'>
            <span className='link'>
              <a href='https://github.com/mcleary03'>Github<i className='fa fa-github' /></a>
            </span>
            <span className='link'>
              <a href='https://www.linkedin.com/in/michaelgcleary/'>Linkedin<i className='fa fa-linkedin-square' /></a>
            </span>
          </div>
        </div>

        <Skills />

      </div>
    )
  }
}
