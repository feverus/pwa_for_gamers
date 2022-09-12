import { connect } from 'react-redux';
import { useEffect } from 'react'
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
	switch(props.page) {
		case "setup": {
			return (
				<MyLayout>
					<Setup/>
				</MyLayout>
			)      
		} 
		case "timer": {
			return (
				<MyLayout>
					<Timer/>
				</MyLayout>
			)      
		} 
		case "dices": {
			return (
				<MyLayout>
					<Dices/>
				</MyLayout>
			)      
		} 
		default: return (
			<MyLayout>
				<Setup/>
			</MyLayout>
		) 
	}
}

const Main = connect(mapStateToProps(), mapDispatchToProps)(Main_i);
export default Main;