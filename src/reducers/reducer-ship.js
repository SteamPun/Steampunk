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
}

export default function(state = ship, action) {
	console.log(action, 'here')
	switch(action.type) {
    default:
      return state
  }
}
