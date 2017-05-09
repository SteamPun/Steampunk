import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import './styles/overview.css'

class Overview extends Component {
  render() {
    return (
      <div className="overview-bar">
        <div className="bar-item">Date: {this.props.gameState.day}/{this.props.gameState.month}/{this.props.gameState.year}</div>
        <div className="bar-item">Money: {this.props.gameState.money}</div>
        <div className="bar-item">Girls: {this.props.gameState.girls}</div>
        <div className="bar-item">Guards: {this.props.gameState.guards}</div>
        <div className="bar-item">Reputation: {this.props.gameState.reputation}</div>
        <div className="bar-item">Ship Appearance: {this.props.ship.appearance}</div>
      </div>
    )
  }
}

function mapStateToProps(state) {
	return {
    gameState: state.gameState,
		ship: state.ship,
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
	}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Overview)
