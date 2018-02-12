import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Entity } from 'aframe-react'
import { planetsReducer } from '../../reducers'
import { setPlanets } from '../../actions'
import Planet from './Planet'

class Planets extends Component {
  constructor() {
    super()

  }

  renderPlanets() {
    return (
      this.props.planets.map( planet =>
        <Planet
          key={planet.id}
          planet={planet}
        />
      )
    )
  }

  render() {
    return (
      <Entity position='0 0 0'>
        {this.renderPlanets()}
      </Entity>
    )
  }
}

const mapStateToProps = (state) => {
  return {planets: state.planetsReducer.planets}
}

const mapDispatchToProps = dispatch => ({
  setPlanets: planets => dispatch(setPlanets(planets))
})

export default connect(mapStateToProps, mapDispatchToProps)(Planets)
