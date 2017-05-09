const gameState = {
  day: 1,
  month: 1,
  year: 375,
  money: 120,
  girls: 1,
  guards: 0,
  reputation: 0,
  activeScreen: {
    ship: false,
    town: false,
    travel: false,
  },
  shipInTown: true,
}

export default function(state = gameState, action) {
  let cloned
  switch(action.type) {
    case 'SET_SHIP_ACTIVE':
      cloned = Object.assign({}, action.payload.gameState)
      for (let key in cloned.activeScreen) {
        cloned.activeScreen[key] = false
      }
      cloned.activeScreen.ship = true
      return cloned
      break
    case 'SET_TOWN_ACTIVE':
      cloned = Object.assign({}, action.payload.gameState)
      for (let key in cloned.activeScreen) {
        cloned.activeScreen[key] = false
      }
      cloned.activeScreen.town = true
      return cloned
      break
    case 'SET_TRAVEL_ACTIVE':
      cloned = Object.assign({}, action.payload.gameState)
      for (let key in cloned.activeScreen) {
        cloned.activeScreen[key] = false
      }
      cloned.activeScreen.travel = true
      return cloned
      break
    default:
      return state
  }
}
