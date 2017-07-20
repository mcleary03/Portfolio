import React, { Component } from 'react'
import { connect } from 'react-redux'
import { projectsReducer } from '../reducers'
import { setProjects } from '../actions/actions'
import Card from './Card'

class ProjectList extends Component {
  constructor() {
    super()
  }

  renderList() {
    return (
      this.props.projects.map( project =>
        <Card key={project.name} project={project} />
      )
    )
  }

  render() {
    return (
      <div className="container">
        <h1 className="text-center">Recent Projects</h1>
        {this.renderList()}
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


export default connect(mapStateToProps, mapDispatchToProps)(ProjectList)
