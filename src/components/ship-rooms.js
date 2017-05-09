import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { clearRoom } from '../actions/index'
import './styles/ship-room.css'

class Room extends Component {
  constructor() {
    super();
    this.state = {
      room: null
    }
  }
  componentWillMount() {
    this.setState({room: this.props.room})
  }
  onClearRoomClick() {
    this.props.clearRoom(this.state.room)
  }
  render() {
    const room = this.state.room
    return (
      <div className="ship-room">
        <h4>{room.name}</h4>
        <p>{room.cleared ? 'Room cleared' : <button onClick={() => this.onClearRoomClick()}>Clear Room</button>}</p>
        <p>{room.cleaned ? 'Room cleaned' : <button>Clean Room</button>}</p>
        <p>{room.inUse ? 'Room in use' : <button>Assign Room</button>}</p>
        <p>Appearance: {room.appearance}</p>
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
    clearRoom,
	}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Room)
