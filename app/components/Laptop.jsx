import React, { Component } from 'react'

class Laptop extends Component {
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
      printLines(lines, 1000, 2400)
    }

    const closeLid = () => {
      screen.classList.add('close')
      screen.classList.remove('open')
      keyboard.classList.add('glow')
    }

    const screenClosed = () => screen.classList.contains('close')

    laptop.addEventListener('click', () => {
      screenClosed() ? openLid() : closeLid()
    })
    
    const lines = [
      "Hi, I'm a full stack web developer.",
      "I build user interfaces like this",
      "This one was made with pure CSS and JavaScript",
      "and games like this one using D3.js",
      "I can turn a UI from this",
      "into this, with useful features like multi-line queries and responsive design"
    ]

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
      <div id='laptop'>
        <div id="screen" className='close'>
          <div className="text"></div>
        </div>
        <div id="keyboard" className='glow'></div>
      </div>
    )
  }
}

export default Laptop