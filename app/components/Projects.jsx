import React, { Component } from 'react'
import { connect } from 'react-redux'
import { projectsReducer } from '../reducers'
import { setProjects } from '../actions'
import Card from './Card'

class Projects extends Component {
  constructor() {
    super()

    this.listIndex = 0
    this.changeProject = this.changeProject.bind(this)
  }

  renderList() {
    return (
      this.props.projects.map( project =>
        <Card key={project.name} project={project} />
      )
    )
  }

  changeProject(event) {
    let length = this.props.projects.length
    if (event.target.id === 'next') {
      this.listIndex = (this.listIndex + 1) % length
    } else {
      this.listIndex = this.listIndex > 0 ? this.listIndex - 1 : length - 1
    }
    console.log(this.listIndex)
    this.forceUpdate()
  }

  render() {
    console.log(this.renderList())
    return (
      <div className=''>
        <button id='prev' onClick={this.changeProject}>PREV</button>
        <button id='next' onClick={this.changeProject}>NEXT</button>
        <h1 className='text-center'>Recent Projects</h1>
        {this.renderList()[this.listIndex]}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  // CAN I ACCESS PROJECTS THROUGH PROPS FROM STORE INSTEAD?
  return {projects: state.projectsReducer.projects}
}

const mapDispatchToProps = dispatch => ({
  setProjects: projects => dispatch(setProjects(projects))
})


export default connect(mapStateToProps, mapDispatchToProps)(Projects)
