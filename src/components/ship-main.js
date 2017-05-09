import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import './styles/ship-main.css'

import Room from './ship-rooms'

class ShipMain extends Component {
  render() {
    return (
      <div className="ship-main">
        <div className="ship-interactions">
          {this.props.ship.rooms.map(room => <Room room={room} className="{room.name}" key={room.name} />)}
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(ShipMain)
