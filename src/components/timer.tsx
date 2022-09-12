import { connect } from 'react-redux';
import { useEffect } from 'react'
import * as I from '../store/storeInterfaces';
import {mapStateToPropsTimer as mapStateToProps} from '../store/mapStateToProps';
import {mapDispatchToProps} from '../store/mapDispatchToProps';

import 'antd/dist/antd.min.css'
import '../styles/index.css'


type P = I.PropsStateTimer & I.PropsDispaich;


function Timer_i(props:P) {

	useEffect(() => {
		console.log("Timer")	  
	})

	return (
        <>
			
        </>		        
	)
}

const Timer = connect(mapStateToProps(), mapDispatchToProps)(Timer_i);
export default Timer;