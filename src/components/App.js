import React, { Component } from 'react';
import { connect } from 'react-redux'
import './styles/App.css';

import Overview from './overview'
import TownShipSelect from './townShipSelect'
import InteractionFrame from './interaction-frame'


class App extends Component {
  render() {
    return (
      <div className="App-game-frame">
      	<Overview />
        <TownShipSelect />
        <InteractionFrame />
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

export default connect(mapStateToProps)(App)
