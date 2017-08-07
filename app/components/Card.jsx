import React, { Component } from 'react'

export default class Card extends Component {
  constructor(props) {
    super(props)

    this.click = this.click.bind(this)
    this.name = this.props.project.name
    this.img = this.props.project.img
    this.description = this.props.project.description
  }

  click(event) {
    event.preventDefault()
    console.log(`Clicked ${this.name}`)
  }

  render() {
    return(
      <div id='Card' className='text-center vcenter' onClick={this.click}>
        <div className='col-xs-6'>
          <div>
            <img src={this.img}/>
          </div>
          <div>
            <h2>{this.name}</h2>
          </div>
        </div>
        <div className='col-xs-6'>
          <p className='main-text justify-content-space-between'>
            {this.description}
          </p>
        </div>
      </div>
    )
  }
}
