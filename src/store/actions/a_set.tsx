import * as I from '../storeInterfaces';

export function onChangePage(value: I.StateSet):I.ActionSet {
	return {
		type: "ON_CHANGE_PAGE",
		payload: value
	}
}
export function onChangeDicesType(value: I.StateSet):I.ActionSet {
	return {
		type: "ON_CHANGE_DICES_TYPE",
		payload: value
	}
}
export function onChangeDicesCount(value: I.StateSet):I.ActionSet {
	return {
		type: "ON_CHANGE_DICE_COUNT",
		payload: value
	}
}
export function onChangeTimerMinutes(value: I.StateSet):I.ActionSet {
	return {
		type: "ON_CHANGE_TIMER_MINUTES",
		payload: value
	}
}
export function onChangeTimerSeconds(value: I.StateSet):I.ActionSet {
	return {
		type: "ON_CHANGE_TIMER_Seconds",
		payload: value
	}
}