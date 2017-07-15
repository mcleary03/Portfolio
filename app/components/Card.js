import React, { Component } from 'react'

export default class Card extends Component {

  render() {
    let projects = []

    this.props.projects.forEach( project => {
      let name = project.name
      let img = project.img
      projects.push(
        <div
          key={project.name}
          className="card col-sm-12 col-md-6 col-lg-4 text-center" >
          <img
            src={img}
            style={{height: '30vw'}} />
          <p style={{fontSize: '3vw'}}>{name}</p>
        </div>
      )
    })

    return (
      <div>
        <h1 className="text-center">Recent Projects</h1>
        {projects}
      </div>
    )
  }

}
