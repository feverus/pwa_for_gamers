import { connect } from 'react-redux';
import * as I from '../store/storeInterfaces';
import {mapStateToPropsMain as mapStateToProps} from '../store/mapStateToProps';
import {mapDispatchToProps} from '../store/mapDispatchToProps';

import MyLayout from './myLayout'
import Setup from './setup'
import Timer from './timer'
import Dices from './dices'
import 'antd/dist/antd.min.css'
import '../styles/index.css'

type P = I.PropsStateMain & I.PropsDispaich;

function Main_i(props:P) {
	let activeComponent:JSX.Element
	switch(props.page) {
		case "setup": {
			activeComponent = <Setup/>
			break;
		} 
		case "timer": {
			activeComponent = <Timer/>  
			break;
		} 
		case "dices": {
			activeComponent = <Dices/>
			break;
		} 
		default: 
			activeComponent = <Setup/>
			break;
	}

	return (
		<MyLayout>
			{activeComponent}
		</MyLayout>
	)  
}



const Main = connect(mapStateToProps(), mapDispatchToProps)(Main_i);
export default Main;