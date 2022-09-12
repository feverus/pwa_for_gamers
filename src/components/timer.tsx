import { connect } from 'react-redux';
import { useEffect, useState, useRef } from 'react'
import * as I from '../store/storeInterfaces';
import {mapStateToPropsTimer as mapStateToProps} from '../store/mapStateToProps';
import {mapDispatchToProps} from '../store/mapDispatchToProps';

import 'antd/dist/antd.min.css'
import '../styles/index.css'
import '../styles/timer.css'

import { Col, Row, Button } from 'antd';
import $ from 'jquery'

type P = I.PropsStateTimer & I.PropsDispaich;


function Timer_i(props:P) {
	const [countDone, setCountDone] = useState(false)	
	const [endtime, setEndtime] = useState(0)	
	const [minutes, setMinutes] = useState(0)	
	const [seconds, setSeconds] = useState(0)	
	const timeinterval: { current: NodeJS.Timeout | null } = useRef(null);

	const stopTimer = () => {
		clearInterval(timeinterval.current as NodeJS.Timeout)
		console.log('stopped')
	}

	const getTimeRemaining = () => {
		if (endtime > 0) {
			let milliseconds = endtime - Date.parse(new Date().toString())
			let minutes = Math.floor((milliseconds / 1000 / 60) % 60)
			let seconds = Math.floor((milliseconds / 1000) % 60)
			return {
				'total': milliseconds, 'minutes': minutes, 'seconds': seconds
			}
		} else {
			return {
				'total': 99, 'minutes': 0, 'seconds': 0
			}
		}
	}

	const updateClock = () => {		
		let t = getTimeRemaining()
		console.log("updateClock")
		console.log(t)
		setMinutes(t.minutes)
		setSeconds(t.seconds)
		if (t.total <= 0) {
			stopTimer()
			setCountDone(true)
		}
	}

	const  initializeClock = () => {
		setEndtime(Date.parse(new Date().toString()) + props.timerMinutes * 60 * 1000 + props.timerSeconds * 1000)
		setCountDone(false)
	}

	const stop = () => {
		stopTimer()
		setMinutes(0)
		setSeconds(0)
		setEndtime(0)
		setCountDone(true)
	}

	useEffect(() => {
		console.log("Timer")	
		initializeClock()  
	},[])

	useEffect(() => {
		if (endtime!==0) {
			console.log(endtime)
			updateClock()
			timeinterval.current = setInterval(updateClock, 1000)
		}
	},[endtime])

	let styleEnd = (countDone === true) ? " end" : ''
	let styleM = ""
	let styleS = ""
	if (minutes === 0) {
		styleM = " m"
		styleS = " s"
	}
	//для скрытия таймера при запуске
	let minutesTextSize:number | undefined = $('#minutesText').width()
	let fontSize:number = (minutesTextSize===undefined) ? 20 : minutesTextSize / 2
	fontSize = (minutes !== 0) ? (fontSize * 0.9) : fontSize			
	let styleFontSize:string = fontSize.toString() + 'px';

	let topButton = (countDone === false) 
		? <Button 
			type="primary" block
			onClick={() => (stop())}>
			Остановить таймер
		</Button>
		: <Button 
			type="default" block
			onClick={() => (initializeClock())}>
			Запустить заново
		</Button>

	return (
        <>
			<Row
				align="top"
				className="countdownpopup">
				<Col span={24}>
					{topButton}
					<div className={"countdown" + styleEnd}>
						<div className="countdown-minutes-circle" style={{ backgroundImage: "conic-gradient(#00294080 "+(Math.floor(minutes * 360 / props.timerMinutes))+"deg, transparent 0)" }}>
							<div className="countdown-seconds-circle" style={{ backgroundImage: "conic-gradient(#002940 "+(seconds * 6)+"deg, transparent 0)" }}>
								<div className={"countdown-number"+styleM}>
									<span className="minutes countdown-time" id="minutesText" style={{ fontSize: styleFontSize }}>{minutes}</span>
									<span className="countdown-text">Минут</span>
								</div>
								<div className={"countdown-number"+styleS}>
									<span className="seconds countdown-time" id="secondsText" style={{ fontSize: styleFontSize }}>{seconds}</span>
									<span className="countdown-text">Секунд</span>
								</div>
							</div>
						</div>
					</div>
					<div className={"countdown-message" + styleEnd}>
						Время вышло!
					</div>					
				</Col>
			</Row>			
        </>		        
	)
}

const Timer = connect(mapStateToProps(), mapDispatchToProps)(Timer_i);
export default Timer;