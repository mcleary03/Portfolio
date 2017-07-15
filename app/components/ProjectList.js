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
      <div className="container">
        {projects.map(project =>
          <Card />
        )}
      </div>
    )
  }
}
