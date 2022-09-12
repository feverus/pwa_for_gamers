import { connect } from 'react-redux';
import { useEffect } from 'react'
import * as I from '../store/storeInterfaces';
import {mapStateToPropsDices as mapStateToProps} from '../store/mapStateToProps';
import {mapDispatchToProps} from '../store/mapDispatchToProps';

import 'antd/dist/antd.min.css'
import '../styles/index.css'

type P = I.PropsStateDices & I.PropsDispaich;


function Dices_i(props:P) {

	useEffect(() => {
		console.log("Dices")	  
	})

	return (
        <>
                "Dices"
        </>
	)
}

const Dices = connect(mapStateToProps(), mapDispatchToProps)(Dices_i);
export default Dices;