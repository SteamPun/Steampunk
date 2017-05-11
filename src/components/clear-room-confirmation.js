import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { confirmationCancel } from '../actions/index'
import './styles/clear-room-confirmation.css'

class ClearRoomConfirmation extends Component {
  handleAssignGirlClick() {

  }
  handleHireWorkersClick() {

  }
  handleCancelClick() {
    this.props.confirmationCancel()
  }

  render() {
    // console.log(this.props.ship.activeRoom)
    return (
      <div className="clear-room-confirmation">
        <h3>Clearing room: {this.props.ship.activeRoom.name}</h3>
        <p>Clearing this room can either be done by one of your girls</p>
        <p>or you can contract a group of workers in town.</p>
        <p>Either way, it will take 2 days to clear. Should you leave port,</p>
        <p>clearing the room will be ended either way.</p>
        <button>Assign a girl</button>
        <button>Hire workers</button>
        <button onClick={() => this.handleCancelClick()}>Nah, rather not</button>
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
    confirmationCancel: confirmationCancel
	}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ClearRoomConfirmation)
