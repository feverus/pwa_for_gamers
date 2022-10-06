import { connect } from 'react-redux';
import { useState, useEffect, useMemo, useCallback } from 'react'
import * as I from '../store/storeInterfaces';
import {mapStateToPropsDices as mapStateToProps} from '../store/mapStateToProps';
import {mapDispatchToProps} from '../store/mapDispatchToProps';

import { Button, Row, Col } from 'antd';
import { CSSTransition } from 'react-transition-group';
import RenderDice from './renderDice'

import 'antd/dist/antd.min.css'
import '../styles/index.css'
import '../styles/dices.css'

type P = I.PropsStateDices & I.PropsDispaich;
type ControlCallback = () => void;
type UseDices = (
					count:number, 
					type:number
				) => [
					state: {
						dicesArr:Array<number>, 
						animationsArr:Array<number>, 
						showed:boolean,
						history:Array<Array<number>>|undefined
					},
					api: {
						newDices:ControlCallback
					}
				]

function Dices_i(props:P) {

	const useDices:UseDices = (count, type) => {
		const [dicesArr, cast] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
		const [animationsArr, shake] = useState([0])
		const [showed, show] = useState(true)
		const [history, addToHistory] = useState([[0]])


		useEffect(() => {
			generate()
		},
		[])

		const generate = useCallback(() => {
			let arrDices:Array<number> = []
			for (let i=0; i<count; i++) {
				arrDices.push(Math.round(Math.random() * (type-1) +1))
			}
			let arrAnim:Array<number> = []
			for (let i=0; i<count; i++) {
				arrAnim.push(Math.round(Math.random()*9+1))
			}
			cast(arrDices)
			console.dir(history)
			console.dir(history[0][0])
			if (history[0][0]===0) {	
				console.dir("history - 0")			
				addToHistory([arrDices])
			} else {
				console.dir("history - 1")		
				addToHistory((h) => h.splice(1,0,arrDices))
			}
			shake(arrAnim)
			show(true)
		}, [])

		const newDices = useCallback(() => {
			console.log("newDices")
			show(false)

			setTimeout(generate, 1000)
		}, [])

		const state = {
			dicesArr,
			animationsArr,
			showed,
			history
		}
		
		const api = useMemo(
			() => ({
				newDices,
			}),
			[]
		)

		return [state, api]
	}

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
					{(sum!==0)?"Сумма костей "+sum:""}   
				</Col>
			</Row>    
			<Row>
				<Col span={24} className="sum">
				{(state.history!==undefined)?state.history.map(
				(v, id) => (		
						<>
							{v.map((n) => (<div>{n}</div>))}
						</>
					)
				):''}
				</Col>
			</Row> 			    
        </>
	)
}

const Dices = connect(mapStateToProps(), mapDispatchToProps)(Dices_i);
export default Dices;