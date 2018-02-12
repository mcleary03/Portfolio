import React, { Component } from 'react'

const colors = {
  default: { background: '#dadada', border: '#b4b4b4', shadow: '#747474', inset: '#f4f4f4', text: '#111111' },
  red: { background: '#f76642', border: '#e3350a', shadow: '#691804', inset: '#f98e73', text: '#ffffff' },
  green: { background: '#42f453', border: '#0ddd21', shadow: '#06640f', inset: '#72f77f', text: '#ffffff' },
  lightBlue: { background: '#38E4F7', border: '#09c5da', shadow: '#04565f', inset: '#69ebf9', text: '#ffffff' },
  blue: { background: '#4286f4', border: '#0d5cdd', shadow: '#062a64', inset: '#72a5f7', text: '#ffffff' },
  yellow: { background: '#f4f441', border: '#dcdc0d', shadow: '#636306', inset: '#f7f771', text: '#ffffff' },
  orange: { background: '#eaad3a', border: '#c38615', shadow: '#503708', inset: '#efc068', text: '#ffffff' }
}

export default class Btn extends Component {
  constructor({ hover=false, focus=false, click=false, color='default', ...props }) {
    super(hover, focus, click, color, ...props)
    console.log(props)
    
    this.state = {
      hover,
      focus,
      click
    }
    this.colorScheme = colors[color]

    this.defaultStyle = {
      position: 'relative',
      top: '0', /* anchors button during transitions */
      bottom: '0',
      display: 'inline',
      border: 'none',
      userSelect: 'none',
      outline: 'none',
      cursor: 'pointer',
      padding: '10px',
      borderBottom: `5px solid ${this.colorScheme.border}`,
      borderRadius: '15px',
      backgroundColor: `${this.colorScheme.background}`,
      color: `${this.colorScheme.text}`,
      boxShadow: `inset 0 0 5px ${this.colorScheme.inset}`,
      filter: `drop-shadow(0 7px 3px ${this.colorScheme.shadow})`,
      textAlign: 'center',
      lineHeight: '1.8',
      fontWeight: 'bolder',
      textTransform: 'uppercase',
      transition: '0.3s',
    }
    this.hoverStyle = {
      ...this.defaultStyle,
      color: `${this.colorScheme.text}`,
      borderBottom: `3px solid ${this.colorScheme.border}`,
      filter: `drop-shadow(0 5px 2px  ${this.colorScheme.shadow})`,
      cursor: 'pointer',
      top: '2px'
    }
    this.clickStyle = {
      ...this.hoverStyle,
      borderBottom: `0 ${this.colorScheme.border}`,
      filter: `drop-shadow(0 0 0 ${this.colorScheme.shadow})`,
      boxShadow: `1px 2px 2px ${this.colorScheme.shadow} inset`,
      top: '5px'
    }
    
    // this.togglehover = () => {
    //   this.setState({ hover: !this.state.hover })
    // }
    // this.toggleFocused = () => {
    //   this.setState({ focused: !this.state.focused })
    // }
    // this.toggleClicked = () => {
    //   this.setState({ clicked: !this.state.clicked })
    // }

    if (this.props.onclick) {

    }

    this.handleEvent = () => {
      
    }

    this.hoverOn = () => {
      this.setState({ hover: true })
    }
    this.hoverOff = () => {
      this.setState({ click: false })
      this.setState({ hover: false })
    }
    this.focusOn = () => {
      this.setState({ focus: true })
    }
    this.focusOff = () => {
      this.setState({ focus: false })
    }
    this.clickOn = () => {
      console.log('clickOn working!')
      if (!this.state.hover) this.hoverOn()
      this.setState({ click: true })
    }
    this.clickOff = () => {
      if (!this.state.hover) this.hoverOn()
      this.setState({ click: false })
    }

    this.keyDown = (e) => {
      if (this.state.focus) {
        console.log(e.keyCode)
        if (e.keyCode == 32 || e.keyCode == 13) {
          this.clickOn()
        }
      }
    }
    this.keyUp = (e) => {
      if (this.state.focus) {
        console.log(e.keyCode)
        if (e.keyCode == 32 || e.keyCode == 13) {
          this.clickOff()
        }
      }
    }
  } // end constructor
  
  render() {
    const { 
      state: { hover, focus, click },
      props: { children, color },
      defaultStyle,
      hoverStyle,
      clickStyle,
      hoverOn,
      hoverOff,
      focusOn,
      focusOff,
      clickOn,
      clickOff,
      keyDown,
      keyUp
    } = this
    let style = this.defaultStyle

    if (hover || focus) {
      if (click) {
        style = clickStyle
      } else {
        style = hoverStyle
      }
    }

    return (
      <button
        style={ style }
        onMouseEnter={ hoverOn }
        onMouseLeave={ hoverOff }
        onFocus={ focusOn }
        onBlur={ focusOff }
        onMouseDown={ clickOn }
        onMouseUp={ clickOff }
        onKeyDown={ keyDown }
        onKeyUp={ keyUp }
      >
        { children }
      </button>
    )
  }
} 
