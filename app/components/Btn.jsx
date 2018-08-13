import React, { Component } from 'react'
import colors from '../colors'

export default class Btn extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      hover: props.hover || false,
      focus: props.focus || false,
      click: props.click || false
    }

    // pull out color variables        from         an inline style custom color scheme object  -OR-  chosen scheme  -OR-  default scheme
    const { background, border, shadow, inset, text } = typeof props.color==='object' ? props.color : colors[props.color || 'default']

    // optional props
    const { style, bold, caps } = props
    // any of these defaults can be overridden by passing an inline style object as a prop
    this.defaultStyle = {
      position: 'relative',
      top: '0',
      right: '0',
      bottom: '0',
      left: '0',
      border: 'none',
      outline: 'none',
      cursor: 'pointer',
      margin: '2px',
      padding: '8px',
      borderBottom: `5px solid ${border}`,
      borderRadius: '16px',
      backgroundColor: `${background}`,
      color: `${text}`,
      boxShadow: `inset 0 0 5px ${inset}`,
      filter: `drop-shadow(0 7px 3px ${shadow})`,
      lineHeight: '1.8',
      fontFamily: 'Arial',
      fontWeight: bold ? 'bold' : 'normal',
      textShadow: bold ? '0 1px 1px rgba(30,30,30,0.5)' : 'none',
      textTransform: caps ? 'uppercase' : 'none', // `caps` is an optional boolean prop
      transition: '0.3s',
      ...style // override defaults with inline style object
    }

    this.hoverStyle = {
      ...this.defaultStyle,
      color: `${text}`,
      borderBottom: `3px solid ${border}`,
      filter: `drop-shadow(0 5px 2px  ${shadow})`,
      top: '2px',
      marginBottom: '2px'
    }

    this.clickStyle = {
      ...this.hoverStyle,
      borderBottom: `0 ${border}`,
      filter: `drop-shadow(0 0 0 ${shadow})`,
      boxShadow: `1px 2px 2px ${shadow} inset`,
      top: '5px',
      marginBottom: '3px'
    }

    this.handleEvent = e => {
      this[`handle${e.type}`](e)
      if (this.props[`on${e.type}`]) this.props[`on${e.type}`](e)
    }

    this.handlemouseenter = e => {
      this.setState( (state, props) => ({ hover: true }))
    }

    this.handlemouseleave = e => {
      this.setState( () => ({ click: false, hover: false }))
    }

    this.handlefocus = e => {
      this.setState( () => ({ focus: true }))
    }

    this.handleblur = e => {
      this.setState( () => ({ focus: false }))
    }

    this.handlemousedown = e => {
      this.setState( () => ({ click: true }))
    }

    this.handlemouseup = e => {
      this.setState( () => ({ click: false }))
      if (this.props.onclick) this.props.onclick(e)
    }

    this.handlekeydown = e => {
      if (this.isClick(e)) this.handlemousedown(e)
    }

    this.handlekeyup = e => {
      if (this.isClick(e)) this.handlemouseup(e)
    }

    // return true if button is focused and space or enter key is pressed
    this.isClick = e => this.state.focus && (e.keyCode === 32 || e.keyCode === 13)

  } // end constructor
  
  render() {
    const { 
      state: { hover, focus, click },
      props: { children },
      defaultStyle,
      hoverStyle,
      clickStyle,
      handleEvent
    } = this

    const style = (hover || focus) ? (click ? clickStyle : hoverStyle) : defaultStyle

    return (
      <button
        style={ style }
        onMouseEnter={ handleEvent }
        onMouseLeave={ handleEvent }
        onFocus={ handleEvent }
        onBlur={ handleEvent }
        onMouseDown={ handleEvent }
        onMouseUp={ handleEvent }
        onKeyDown={ handleEvent }
        onKeyUp={ handleEvent }
      >
        { children }
      </button>
    )
  }
} 
