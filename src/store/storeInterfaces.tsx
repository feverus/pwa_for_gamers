// типы данных для хранилища


export interface StateSet {
	page: string;
	dicesType: number;
	dicesCount: number;
	timerMinutes: number;
	timerSeconds: number;
}



export interface StateAll {
    set:StateSet;
}



// экшены

export interface ActionSet {
	type: string;
	payload: StateSet;
}


//props для mapStateToProps

export interface PropsStateMain {
	page: string;
}
export interface PropsStateSetup {
	dicesType: number;
	dicesCount: number;
	timerMinutes: number;
	timerSeconds: number;
}
export interface PropsStateTimer {
	timerMinutes: number;
	timerSeconds: number;
}
export interface PropsStateDices {
	dicesType: number;
	dicesCount: number;
}

//функции для mapDispatchToProps

export interface PropsDispaich {
	onChangePage: Function; 
	onChangeDicesType: Function; 
	onChangeDicesCount: Function; 
	onChangeTimerMinutes: Function; 
	onChangeTimerSeconds: Function; 
}