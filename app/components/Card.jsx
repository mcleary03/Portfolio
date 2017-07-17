import React, { Component } from 'react'

export default class Card extends Component {
  constructor(props) {
    super(props)

    this.click = this.click.bind(this)
    this.name = this.props.project.name
    this.img = this.props.project.img
  }

  click(event) {
    event.preventDefault()
    console.log(`Clicked ${this.name}`)
  }

  render() {

    return(
      <div className="card col-sm-12 col-md-6 text-center" >
        <img src={this.img}
          onClick={this.click} />
        <p>{this.name}</p>
      </div>
    )
  }
}
