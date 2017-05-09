import { combineReducers } from 'redux'
import GameStateReducer from './reducer-gameState'
import ShipReducer from './reducer-ship'
import TownReducer from './reducer-town'
import GirlsReducer from './reducer-girls'

const rootReducer = combineReducers({
	ship: ShipReducer,
	gameState: GameStateReducer,
	town: TownReducer,
	girls: GirlsReducer,
})

export default rootReducer
