import React, { Component } from 'react'
import Btn from './Btn'

export default () => {
  const btns = []

  for (let color of ['default','white','red','glass','green','blue','yellow','orange','pink']) {
    btns.push(<Btn key={ color } color={ color } caps bold fade>{ color }</Btn>)
  }

  return (
    <div id='btns'>
      { btns }
    </div>
  )
}