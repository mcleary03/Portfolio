import React, { Component } from 'react'
import colors from './colors'

export default class Btn extends Component {
  constructor(props) {
    super(props)

    this.handlemouseenter = e => this.setState((state, props) => ({ hover: true }))

    this.handlemouseleave = e => this.setState(() => ({ click: false, hover: false }))

    this.handlefocus = e => this.setState(() => ({ focus: true }))

    this.handleblur = e => this.setState(() => ({ focus: false }))

    this.handlemousedown = e => this.setState(() => ({ click: true }))

    this.handlemouseup = e => {
      this.setState(() => ({ click: false }));
      if (this.props.onclick) this.props.onclick(e)
    }

    this.handlekeydown = e => { if (this.isClick(e)) this.handlemousedown(e) }

    this.handlekeyup = e => { if (this.isClick(e)) this.handlemouseup(e) }

    this.isClick = e => this.state.focus && (e.keyCode === 32 || e.keyCode === 13)

    this.handleEvent = e => {
      this[`handle${e.type}`](e); // handle animations
      if (this.props[`on${e.type}`]) this.props[`on${e.type}`](e); // handle actions
    }

    this.handleResize = () => this.setState(this.state)

    this.getContentHeight = () => {
      // after first render, we change the span height to match the contents
      return this.state.hasHeight ? this.content.clientHeight : `auto`
    }

    this.state = {
      hasHeight: false,
      hover: props.hover || false,
      focus: props.fade ? true : props.focus || false,
      click: props.fade ? true : props.click || false

    }
    // pull out color variables from an inline style custom color scheme object, chosen scheme, or default scheme
    const { background, border, shadow, inset, text } = typeof props.color === `object` ? props.color : colors[props.color || `default`]

    // optional props
    const { style, bold, caps } = props;
    const animate = props.animate || true

    this.btnContainerStyle = {
      position: `relative`,
      boxSizing: `border-box`,
      margin: `0 0 5px 0`
      
    }
    this.defaultStyle = {
      ...style,
      boxSizing: `border-box`,
      touchAction: `manipulation`,
      userSelect: `none`,
      WebkitTapHighlightColor:  `rgba(255, 255, 255, 0)`,
      border: `none`,
      outline: `none`,
      cursor: `pointer`,
      margin: `0`,
      padding: `8px`,
      borderBottom: `5px solid ${border}`,
      borderRadius: `15px`,
      backgroundColor: `${background}`,
      color: text,
      boxShadow: `inset 0 0 5px ${inset}`,
      filter: `drop-shadow(0 7px 6px ${shadow})`,
      lineHeight: `1.8`,
      fontSize: `1.2em`,
      fontFamily: `Arial`,
      fontWeight: bold ? `bold` : `normal`,
      textShadow: bold ? `0 1px 1px rgba(30,30,30,0.5)` : `none`,
      textTransform: caps ? `uppercase` : `none`,
      transition: !animate ? `border-bottom 0.3s ease-in-out,
                              filter 0.3s ease-in-out,
                              transform 0.3s ease-in-out,
                              box-shadow 0.3s ease-in-out`
                  : ``
    }

    this.hoverStyle =  {
      ...this.defaultStyle,
      borderBottom: `3px solid ${border}`,
      filter: `drop-shadow(0 5px 3px ${shadow})`,
      transform: `translateY(2px)`
    }

    this.clickStyle = {
      ...this.hoverStyle,
      borderBottom: `0 solid ${border}`,
      filter: `drop-shadow(0 0 0 ${shadow})`,
      boxShadow: `1px 2px 2px ${shadow} inset`,
      transform: `translateY(5px)`
    }
  }

  componentDidMount() {
    window.addEventListener(`resize`, this.handleResize);
    this.setState((state, props) => ({ hasHeight: true }));
    if (this.props.fade) {
      this.fadeTimer = setTimeout( () => {
        this.setState({ click: false, focus: false })
      }, 900)
    }
  }

  componentWillUnmount() {
    window.removeEventListener(`resize`, this.handleResize);
    if (this.fadeTimer) clearTimeout(this.fadeTimer)
  }

  render() {
    const {
      state: { hover, focus, click },
      props: { children, fade },
      btnContainerStyle,
      defaultStyle,
      hoverStyle,
      clickStyle,
      handleEvent,
      getContentHeight
    } = this

    const style = (hover || focus) ? (click ? clickStyle : hoverStyle) : defaultStyle
    const className = fade ? 'fadeIn' : ''

    return (
      <div 
        style={{ ...btnContainerStyle, height: getContentHeight() }} 
        className={ className }>
        <button
          ref={ el => this.content = el }
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
      </div>
    )
  }
} 