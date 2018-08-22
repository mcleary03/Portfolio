import React, { Component } from 'react'
import { skillsReducer } from '../reducers'
import { setSkills } from '../actions'
import { connect } from 'react-redux'

class Skills extends Component {
  constructor() {
    super()
  }

  renderList() {
    return (
      this.props.skills.map( skill =>
        <li key={skill} className=''>{skill}</li>
      )
    )
  }

  rand() {
    return Math.floor(Math.random()*window.innerWidth)
  }

  animateList() {
    return (
      this.props.skills.map( skill => {
        <span key={skill} 
          className='skill' 
          style={`left: ${this.rand()}`}>
          {skill}
        </span>
      })
    )
  }

  render() {
    return (
      <div className="list">
        {this.animateList()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {skills: state.skillsReducer.skills}
}

const mapDispatchToProps = dispatch => ({
  setSkills: skills => dispatch(setProjects(skills))
})

export default connect(mapStateToProps, mapDispatchToProps)(Skills)



{/* <ul className="">
{this.renderList()}
</ul> */}