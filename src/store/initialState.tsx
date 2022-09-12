import * as I from './storeInterfaces';

const initialState: I.StateAll = {
	set: {
		page: 'setup',
		dicesType: 6,
		dicesCount: 1,
		timerMinutes: 3,
		timerSeconds: 30,
	},
}

export default initialState;