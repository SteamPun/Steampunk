import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import './styles/interaction-frame.css'

import ShipMain from './ship-main'
import TownMain from './town-main'
import ClearRoomConfirmation from './clear-room-confirmation'

class InteractionFrame extends Component {
  render() {
    console.log(this.props.gameState.activeScreen)
    const activeScreen = this.props.gameState.activeScreen
    return (
      <div className="interaction-frame">
        {activeScreen.ship && <ShipMain />}
        {activeScreen.town && <TownMain />}
        {activeScreen.clearRoomConfirmation && <ClearRoomConfirmation />}
      </div>
    )
  }
}

function mapStateToProps(state) {
	return {
    gameState: state.gameState,
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
	}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(InteractionFrame)
