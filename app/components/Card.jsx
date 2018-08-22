import React, { Component } from 'react'

export default class Card extends Component {
  constructor(props) {
    super(props)

    this.click = this.click.bind(this)
  }

  click(event) {
    // event.preventDefault()
    // TODO add other functionality to projects when clicked
  }

  render() {
    const { name, img, description, github, live } = this.props.project

    let liveDemo = live !== undefined ? (
      <div className=''>
        <a href={ live }>
          <i className='fa fa-3x fa-play-circle'/>
          Live Demo
        </a>
      </div>
    ) : <div/>

    return(
      <div id='Card' className='' onClick={ this.click }>
        <div>
          <div className='projectImg'>
            <a href={ live || github }><img src={ img }/></a>
          </div>
          <div>
            <a className='link' href={ live || github }><h1>{ name }</h1></a>
          </div>
          <p className='main-text'>
            { description }
          </p>
          <div className='link'>
            { liveDemo }
            <a className='' href={ github }>
              <i className='fa fa-3x fa-github'/>
              Github
            </a>
          </div>
        </div>
      </div>
    )
  }
}
