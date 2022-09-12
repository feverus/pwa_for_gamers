import initialState from '../initialState';
import * as I from '../storeInterfaces';

export default function r_set(state: I.StateSet = initialState.set, action: I.ActionSet): I.StateSet {
	switch(action.type) {
		case "ON_CHANGE_PAGE": {
			return {...state,
				page: action.payload.page
			}        
		} 
		case "ON_CHANGE_DICES_TYPE": {
			return {...state,
				dicesType: action.payload.dicesType
			}        
		} 
		case "ON_CHANGE_DICE_COUNT": {
			return {...state,
				dicesCount: action.payload.dicesCount
			}        
		} 
		case "ON_CHANGE_TIMER_MINUTES": {
			return {...state,
				timerMinutes: action.payload.timerMinutes
			}        
		} 
		case "ON_CHANGE_TIMER_Seconds": {
			return {...state,
				timerSeconds: action.payload.timerSeconds
			}        
		} 
		default: return state;
	}
}