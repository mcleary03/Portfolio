import React, { Component } from 'react'
import { connect } from 'react-redux'
import displayReducer from '../reducers'
import { setDisplay } from '../actions'

class Header extends Component {
  constructor(props) {
    super(props)

    this.changeDisplay = (e) => {
      props.setDisplay(e.target.textContent)
    }
  }

  render() {
    return (
      <nav id="navbar" className="" onClick={this.changeDisplay}>
        <div className='logo'>
          <a className="link">Michael Cleary</a>
        </div>
        <div className="nav-links">
            <a className='link'>About</a>
            <a className='link'>Projects</a>
            <a className='link'>Contact</a>
            <a className='link'>A-Frame</a>
        </div>
      </nav>
    )
  }
}

const mapStateToProps = state => (
  { display: state.displayReducer.display }
)

const mapDispatchToProps = dispatch => (
  { setDisplay: display => dispatch(setDisplay(display)) }
)

export default connect(mapStateToProps, mapDispatchToProps)(Header)
