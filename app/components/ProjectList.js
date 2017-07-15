import React, { Component } from 'react'

export defualt class ProjectList extends Component {
  constructor() {
    super()
    this.state = {projects: []}
  }
  componentWillMount(){

  }

  render(){
    let projects = this.state.projects
    return (
      <div id="projectList">
        {projects.map(project =>
          <Card />
        )}
      </div>
    )
  }
}
