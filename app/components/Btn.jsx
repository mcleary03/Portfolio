var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React, { Component } from 'react';

const colors = {
  default: { background: '#38E4F7', border: '#09c5da', shadow: '#04565f', inset: '#69ebf9', text: '#ffffff' },
  white: { background: '#dadada', border: '#b4b4b4', shadow: '#747474', inset: '#f4f4f4', text: '#111111' },
  glass: { background: 'transparent', border: 'rgba(120,120,120,0.08)', shadow: '#666666', inset: '#dddddd', text: 'rgba(100,100,100,0.4)' },
  red: { background: '#f76642', border: '#e3350a', shadow: '#691804', inset: '#f98e73', text: '#ffffff' },
  green: { background: '#42f453', border: '#0ddd21', shadow: '#06640f', inset: '#72f77f', text: '#ffffff' },
  blue: { background: '#4286f4', border: '#0d5cdd', shadow: '#062a64', inset: '#72a5f7', text: '#ffffff' },
  yellow: { background: '#f4f441', border: '#dcdc0d', shadow: '#636306', inset: '#f7f771', text: '#ffffff' },
  orange: { background: '#eaad3a', border: '#c38615', shadow: '#503708', inset: '#efc068', text: '#ffffff' },
  pink: { background: '#f4429b', border: '#dd0d75', shadow: '#640635', inset: '#f772b5', text: '#ffffff' }
};
export default class Btn extends Component {
  constructor(props) {
    super(props);

    this.handlemouseenter = e => {
      this.setState((state, props) => ({ hover: true }));
    };

    this.handlemouseleave = e => {
      this.setState(() => ({ click: false, hover: false }));
    };

    this.handlefocus = e => {
      this.setState(() => ({ focus: true }));
    };

    this.handleblur = e => {
      this.setState(() => ({ focus: false }));
    };

    this.handlemousedown = e => {
      this.setState(() => ({ click: true }));
    };

    this.handlemouseup = e => {
      this.setState(() => ({ click: false }));
      if (this.props.onclick) this.props.onclick(e);
    };

    this.handlekeydown = e => {
      if (this.isClick(e)) this.handlemousedown(e);
    };

    this.handlekeyup = e => {
      if (this.isClick(e)) this.handlemouseup(e);
    };

    this.isClick = e => this.state.focus && (e.keyCode === 32 || e.keyCode === 13);

    this.handleEvent = e => {
      this[`handle${e.type}`](e); // handle animations
      if (this.props[`on${e.type}`]) this.props[`on${e.type}`](e); // handle actions
    };

    this.handleResize = () => {
      this.setState(this.state);
    };

    this.getContentHeight = () => {
      // after first render, we change the span height to match the contents
      return this.state.hasHeight ? this.content.clientHeight : `auto`;
    };

    this.state = {
      hasHeight: false,
      hover: props.hover || false,
      focus: props.fade ? true : props.focus || false,
      click: props.fade ? true : props.click || false

      // pull out color variables from                   an inline style custom color scheme object  -OR-  chosen scheme  -OR-  default scheme
    };const { background, border, shadow, inset, text } = typeof props.color === `object` ? props.color : colors[props.color || `default`];

    // optional props
    const { style, bold, caps } = props;

    this.btnContainerStyle = {
      position: `relative`,
      boxSizing: `border-box`,
      margin: `0 0 5px 0`

    };this.defaultStyle = _extends({
      boxSizing: `border-box`,
      touchAction: `manipulation`,
      userSelect: `none`,
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
      transition: `0.3s ease-in-out`,
      willChange: `transform, filter, border-bottom, box-shadow`
    }, style);

    this.hoverStyle = _extends({}, this.defaultStyle, {
      borderBottom: `3px solid ${border}`,
      filter: `drop-shadow(0 5px 3px ${shadow})`,
      transform: `translateY(2px)`
    });

    this.clickStyle = _extends({}, this.hoverStyle, {
      borderBottom: `0 solid ${border}`,
      filter: `drop-shadow(0 0 0 ${shadow})`,
      boxShadow: `1px 2px 2px ${shadow} inset`,
      transform: `translateY(5px)`
    });
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
    } = this;

    const style = hover || focus ? click ? clickStyle : hoverStyle : defaultStyle;

    return React.createElement(
      'div',
      { 
        style: _extends({}, btnContainerStyle, {height: getContentHeight()}),
        className: fade ? 'fadeIn' : ''
      },
      React.createElement(
        'button',
        {
          ref: el => this.content = el,
          style: style,
          onMouseEnter: handleEvent,
          onMouseLeave: handleEvent,
          onFocus: handleEvent,
          onBlur: handleEvent,
          onMouseDown: handleEvent,
          onMouseUp: handleEvent,
          onKeyDown: handleEvent,
          onKeyUp: handleEvent,
        },
        children
      )
    );
  }
}