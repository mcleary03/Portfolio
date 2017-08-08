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
    const { name, img, description, github, live } = this.props.project

    let liveDemo = live !== undefined ? (
      <div className='row'>
        <a href={live}>
          <i className='fa fa-3x fa-play-circle'/>
          Live Demo
        </a>
      </div>
    ) : <div/>

    return(
      <div id='Card' className='text-center' onClick={this.click}>
        <div className='container-fluid'>
          <div>
            <img src={img}/>
          </div>
          <div>
            <h1>{name}</h1>
          </div>
          <p className='main-text'>
            {description}
          </p>
          <a href={github}>
            <i className='fa fa-3x fa-github-alt'/>
            Github
          </a>
          { liveDemo }
        </div>
      </div>
    )
  }
}
