import React, { Component } from 'react'
import style from './Laptop.scss'

export default class Laptop extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }

  }

  componentDidMount() {
    const laptop = document.querySelector('#laptop')
    const screen = document.querySelector('#screen')
    const keyboard = document.querySelector('#keyboard')
    const text = document.querySelector('.text')
    
    const openLid = () => {
      screen.classList.add('open')
      screen.classList.remove('close')
      keyboard.classList.remove('glow')
      if (!screen.classList.contains('power')) screen.classList.add('power')
      printLines(this.props.display, 1000, 2000)
    }

    const closeLid = () => {
      screen.classList.remove('power')
      screen.classList.add('close')
      screen.classList.remove('open')
      keyboard.classList.add('glow')
    }

    const lidClosed = () => screen.classList.contains('close')

    laptop.addEventListener('click', () => {
      lidClosed() ? openLid() : closeLid()
    })

    const printLines = (lines, interval, delay) => {
      clearText(text)
      setTimeout( () => {
        lines.forEach( (line, i) => {
          const len = line.length
          setTimeout( printString(line, interval/len, i*interval+i*delay), interval)
        }) 
      }, delay)  
    }
    
    const printString = (string, interval, delay=0) => {
      setTimeout( () => {
        const p = document.createElement('p')
        text.appendChild(p)
        p.innerHTML+=`> `
        string.split('').forEach( (word, i) => {
          setTimeout( () => p.innerHTML+=word, i*interval)
        })
      }, delay)
    }
    
    const clearText = el => {
      el.innerHTML = ''
    }
    
    clearText(text)
  }

  render() {
    return (
      <div id='laptop' onClick={ this.props.init }>
        <div id="screen" className='close'>
          <div className="text"></div>
        </div>
        <div id="keyboard" className='glow'></div>
      </div>
    )
  }
}
