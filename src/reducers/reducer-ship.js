const ship = {
	value: 100,
	appearance: 7,
	hull: 20,
	rooms: [
		{
			name:'Living Room 1',
			cleared: false,
			cleaned: false,
			inUse: false,
			appearance: 0,
		},
		{
			name:'Living Room 2',
			cleared: false,
			cleaned: false,
			inUse: false,
			appearance: 0,
		},
		{
			name:'Living Room 3',
			cleared: false,
			cleaned: false,
			inUse: false,
			appearance: 0,
		},
		{
			name:'Living Room 4',
			cleared: false,
			cleaned: false,
			inUse: false,
			appearance: 0,
		},
		{
			name:'Living Room 5',
			cleared: false,
			cleaned: false,
			inUse: false,
			appearance: 0,
		},
		{
			name:'Living Room 6',
			cleared: false,
			cleaned: false,
			inUse: false,
			appearance: 0,
		},
		{
			name: 'Work Room 1',
			cleared: false,
			cleaned: false,
			inUse: false,
			appearance: 0,
		},
		{
			name: 'Work Room 2',
			cleared: false,
			cleaned: false,
			inUse: false,
			appearance: 0,
		},
		{
			name: 'Work Room 3',
			cleared: false,
			cleaned: false,
			inUse: false,
			appearance: 0,
		},
		{
			name: 'Work Room 4',
			cleared: false,
			cleaned: false,
			inUse: false,
			appearance: 0,
		},
		{
			name: 'Work Room 5',
			cleared: false,
			cleaned: false,
			inUse: false,
			appearance: 0,
		},
		{
			name: 'Work Room 6',
			cleared: false,
			cleaned: false,
			inUse: false,
			appearance: 0,
		},
		{
			name: 'Captain\'s Room',
			cleared: true,
			cleaned: false,
			inUse: false,
			appearance: 20,
		},
		{
			name: 'Greeting Room',
			cleared:false,
			cleaned: false,
			inUse: false,
			appearance: 0,
		},
		{
			name:'Deck',
			cleared: true,
			cleaned: false,
			inUse: false,
			appearance: 20,
		},
	],
	activeRoom: {},
}

export default function(state = ship, action) {
	let cloned
	switch(action.type) {
		case 'CLEAR_ROOM_CONFIRMATION':
			cloned = Object.assign({}, state)
			cloned.activeRoom = action.payload.room
			return cloned
			break
		case 'CONFIRMATION_CANCELED':
			cloned = Object.assign({}, state)
			cloned.activeRoom = {}
			return cloned
			break
    default:
      return state
  }
}
