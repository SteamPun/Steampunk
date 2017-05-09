import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import './styles/town-main.css'

class TownMain extends Component {
  render() {
    return (
      <div className="town-main">
        <h2>Town Main</h2>
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

export default connect(mapStateToProps, mapDispatchToProps)(TownMain)
