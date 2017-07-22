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
      <div className='card text-center container' onClick={this.click}>
        <div className='col-md-6'>
          <div>
            <img src={this.img}/>
          </div>
          <div>
            <h2>{this.name}</h2>
          </div>
        </div>
        <div className='col-md-6'>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dol</p>
        </div>
      </div>
    )
  }
}
