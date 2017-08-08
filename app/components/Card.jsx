import React, { Component } from 'react'

export default class Card extends Component {
  constructor(props) {
    super(props)

    this.click = this.click.bind(this)
  }

  click(event) {
    // event.preventDefault()
    console.log(`Clicked ${this.name}`)
  }

  render() {
    const { name, img, description, github } = this.props.project

    return(
      <div id='Card' className='text-center' onClick={this.click}>
        <div className='container-fluid'>
          <div>
            <img src={img}/>
          </div>
          <div>
            <h2>{name}</h2>
          </div>
          <p className='main-text'>
            {description}
          </p>
          <a href={github}>
            <i className='fa fa-3x fa-github-alt'/>
            Github
          </a>
        </div>
      </div>
    )
  }
}
