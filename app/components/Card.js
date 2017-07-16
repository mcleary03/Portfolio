import React, { Component } from 'react'

export default class Card extends Component {
  constructor(props) {
    super(props)
    name: this.props.project.name
  }

  click(event) {
    event.preventDefault()
    console.log(`Clicked ${this.props.project.name}`)
  }

  render() {
    let name = this.props.project.name
    let img = this.props.project.img

    return(
      <div className="col-sm-12 col-md-6 text-center"
        onClick={this.click.bind(this)} >
        <img src={img} style={{height: '30vh', margin: '8vh 0'}} />
        <p style={{fontSize: '3vh'}}>{name}</p>
      </div>
    )
  }
}
