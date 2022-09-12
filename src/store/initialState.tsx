import * as I from './storeInterfaces';

const initialState: I.StateAll = {
	set: {
		page: 'setup',
		dicesType: 6,
		dicesCount: 1,
		timerMinutes: 1,
		timerSeconds: 1,
	},
}

export default initialState;