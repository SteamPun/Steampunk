const town = {
	'Crater Peak': {
		active: true,
		demand: 10,
		repRequired: 0,
		fees: 10,
	},
	'Happy Valley': {
		active: false,
		demand: 20,
		repRequired: 50,
		fees: 20,
	},
	'Oceanside': {
		active: false,
		demand: 30,
		repRequired: 200,
		fees: 30,
	},
	'Greenfields': {
		active: false,
		demand: 40,
		repRequired: 500,
		fees: 40,
	},
	'Bordercrossing': {
		active: false,
		demand: 50,
		repRequired: 1000,
		fees: 50,
	},
	'Capital City': {
		active: false,
		demand: 80,
		repRequired: 2500,
		fees: 120,
	},
}


export default function(state = town, action) {
	const cloned = Object.assign({}, action.payload)
	switch (action.type) {
		default:
			return state
	}
}
