import * as I from './storeInterfaces';

export function mapStateToPropsMain() {
	return function (state: I.StateAll):I.PropsStateMain {
		return {
			page: state.set.page,
		}
	}
}
export function mapStateToPropsSetup() {
	return function (state: I.StateAll):I.PropsStateSetup {
		return {
			dicesType: state.set.dicesType,
			dicesCount: state.set.dicesCount,
			timerMinutes: state.set.timerMinutes,
			timerSeconds: state.set.timerSeconds,
		}
	}
}
export function mapStateToPropsTimer() {
	return function (state: I.StateAll):I.PropsStateTimer {
		return {
			timerMinutes: state.set.timerMinutes,
			timerSeconds: state.set.timerSeconds,
		}
	}
}
export function mapStateToPropsDices() {
	return function (state: I.StateAll):I.PropsStateDices {
		return {
			dicesType: state.set.dicesType,
			dicesCount: state.set.dicesCount,
		}
	}
}
