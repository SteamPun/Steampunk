export function setShipActive(gameState) {
	return {
		type: 'SET_SHIP_ACTIVE',
		payload: {
			gameState: gameState,
		}
	}
}
export function setTownActive(gameState) {
	return {
		type: 'SET_TOWN_ACTIVE',
		payload: {
			gameState: gameState,
		}
	}
}
export function setTravelActive(gameState) {
	return {
		type: 'SET_TRAVEL_ACTIVE',
		payload: {
			gameState: gameState,
		}
	}
}
export function clearRoom(room) {
	return {
		type: 'CLEAR_THIS_ROOM',
		payload: {
			room: room,
		}
	}
}
