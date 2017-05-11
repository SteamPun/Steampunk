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
		type: 'CLEAR_ROOM_CONFIRMATION',
		payload: {
			room: room,
		}
	}
}
export function confirmationCancel() {
	return {
		type: 'CONFIRMATION_CANCELED',
		payload: {
		}
	}
}
