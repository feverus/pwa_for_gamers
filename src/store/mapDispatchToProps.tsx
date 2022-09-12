import { bindActionCreators, Dispatch } from 'redux';
import * as Set from './actions/a_set';

export function mapDispatchToProps() {
	return function (dispatch: Dispatch) {
		return {
			onChangePage: bindActionCreators(Set.onChangePage, dispatch),
			onChangeDicesType: bindActionCreators(Set.onChangeDicesType, dispatch),
			onChangeDicesCount: bindActionCreators(Set.onChangeDicesCount, dispatch),
			onChangeTimerMinutes: bindActionCreators(Set.onChangeTimerMinutes, dispatch),
			onChangeTimerSeconds: bindActionCreators(Set.onChangeTimerSeconds, dispatch),
		}
	}
}