import { connect } from 'react-redux';
import * as I from '../store/storeInterfaces';
import {mapStateToPropsDices as mapStateToProps} from '../store/mapStateToProps';
import {mapDispatchToProps} from '../store/mapDispatchToProps';

import { Button, Row, Col } from 'antd';
import { CSSTransition } from 'react-transition-group';

import RenderDice from './renderDice'
import { useDices } from '../hooks/useDices';
import { DicesHistory } from './dicesHistory';

import 'antd/dist/antd.min.css'
import '../styles/index.css'
import '../styles/dices.css'



type P = I.PropsStateDices & I.PropsDispaich;
function Dices_i(props:P): JSX.Element {
	const [state, api] = useDices(props.dicesCount, props.dicesType)
	const leftRight = ["-left", "-right"]
	
	let sum:number = state.dicesArr.reduce((sum, value) => (sum+value))

	return (		
        <>
			<Button 
				type="primary" block
				onClick={() => (api.newDices())}>
				Бросить кости
			</Button>
			<Row>
				{state.dicesArr.map((valueFromArr, id) => (		
					<CSSTransition
						classNames={"animation-speed-" + state.animationsArr[id] + " dice" + leftRight[id % 2]}
						key={id}
						in={state.showed}
						timeout={{appear:100, enter:100, exit:500}	}					
						appear={true} >
							<Col span={12} className="dice-col">
								<RenderDice value={valueFromArr} type={props.dicesType} key={id}/>	
						</Col>
					</CSSTransition>	
				))}
			</Row>
			<Row>
				<Col span={24} className="sum">
					{(sum!==0)?"Сумма костей: "+sum:""}   
				</Col>
			</Row>    
			<Row>
				<Col span={24} className="sum">
					<DicesHistory history={state.history} />
				</Col>
			</Row> 			    
        </>
	)
}

const Dices = connect(mapStateToProps(), mapDispatchToProps)(Dices_i);
export default Dices;