import React, { Component } from 'react'

export default class Card extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let projects = []

    this.props.projects.forEach( project => {
      let name = project.name
      let img = project.img
      projects.push(
        <div key={name}
             className="col-sm-12 col-md-6 text-center" >
          <img src={img}
               style={{height: '30vh', margin: '8vh 0'}} />
          <p style={{fontSize: '3vh'}}>{name}</p>
        </div>
      )
    })

    return (
      <div className="container">
        <h1 className="text-center">Recent Projects</h1>
        {projects}
      </div>
    )
  }

}
