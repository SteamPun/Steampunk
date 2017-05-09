import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { setShipActive, setTownActive, setTravelActive } from '../actions/index'
import './styles/townShipSelect.css'

class TownShipSelect extends Component {
  constructor() {
    super();
    this.state = {
      activeTown: null
    }
  }
  componentDidMount() {
    const townList = Object.keys(this.props.town)
    const active = townList.find(town => this.props.town[town].active)
    this.setState({ activeTown: active})
  }
  getText() {
    if (this.state.activeTown) {
      return `You are currently docked in ${this.state.activeTown}.`
    } else {
      return `You are currently not docked in any town.`
    }
  }

  render() {
    return (
      <div className="select-frame">
        <p>{this.getText()}</p>
        <button onClick={() => this.props.setShipActive(this.props.gameState)}>Enter Ship</button>
        <button onClick={() => this.props.setTownActive(this.props.gameState)}>Enter Town</button>
        <button onClick={() => this.props.setTravelActive(this.props.gameState)}>Undock (Travel)</button>
        <button>Next Day</button>
      </div>
    )
  }
}

function mapStateToProps(state) {
	return {
    gameState: state.gameState,
    town: state.town,
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
    setShipActive,
    setTownActive,
    setTravelActive,
	}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TownShipSelect)
