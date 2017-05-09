const girls = {
  'Libby': {
    appearance: 62,
    beauty: 62,
    dress: 0,
    shoes: 0,
    emberstone: 0,
    sick: 0,
    pregnant: 0,
    active: true,
    busyFor: 0,
  },
  'Hanna': {
    appearance: 0,
    beauty: 71,
    dress: 0,
    shoes: 0,
    emberstone: 0,
    sick: 0,
    pregnant: 0,
    active: false,
    busyFor: 0,
  },
  'Mari': {
    appearance: 0,
    beauty: 71,
    dress: 0,
    shoes: 0,
    emberstone: 0,
    sick: 0,
    pregnant: 0,
    active: false,
    busyFor: 0,
  },
  'Happy': {
    appearance: 0,
    beauty: 71,
    dress: 0,
    shoes: 0,
    emberstone: 0,
    sick: 0,
    pregnant: 0,
    active: false,
    busyFor: 0,
  },
  'Emma': {
    appearance: 0,
    beauty: 71,
    dress: 0,
    shoes: 0,
    emberstone: 0,
    sick: 0,
    pregnant: 0,
    active: false,
    busyFor: 0,
  },
  'Inky': {
    appearance: 0,
    beauty: 71,
    dress: 0,
    shoes: 0,
    emberstone: 0,
    sick: 0,
    pregnant: 0,
    active: false,
    busyFor: 0,
  },
  'Cora': {
    appearance: 0,
    beauty: 71,
    dress: 0,
    shoes: 0,
    emberstone: 0,
    sick: 0,
    pregnant: 0,
    active: false,
    busyFor: 0,
  },
}

export default function(state = girls, action) {
	const cloned = Object.assign({}, action.payload)
	switch (action.type) {
		default:
			return state
	}
}
