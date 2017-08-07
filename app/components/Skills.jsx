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
        <li key={skill} className='col-xs-6 text-info'>{skill}</li>
      )
    )
  }

  render() {
    return (
      <div className="container col-xs-12">
        <ul className="main-text">
          {this.renderList()}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {skills: state.skillsReducer.skills}
}

const mapDispatchToProps = dispatch => ({
  setSkills: skills => dispatch(setProjects(skills))
})

export default connect(mapStateToProps, mapDispatchToProps)(Skills)
