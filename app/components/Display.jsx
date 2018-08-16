import React, { Component } from 'react'
import Laptop from './Laptop'
import Popup from './Popup'
import Btns from './Btns'

export default class Display extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div id='main'>
        <Laptop />
          <Popup pos='1' url="https://mcleary03.github.io/dotty/"/>
          <Popup pos='2'>
            <Btns />
          </Popup>
      </div>
    )
  }
}
