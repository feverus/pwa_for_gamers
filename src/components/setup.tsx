import { connect } from 'react-redux';
import { useEffect, useState } from 'react'
import * as I from '../store/storeInterfaces';
import {mapStateToPropsSetup as mapStateToProps} from '../store/mapStateToProps';
import {mapDispatchToProps} from '../store/mapDispatchToProps';

import 'antd/dist/antd.min.css'
import '../styles/index.css'

import {Radio , InputNumber, Card, Space, TimePicker, Col, Row} from 'antd';
import moment from 'moment';

type P = I.PropsStateSetup & I.PropsDispaich;

const format = 'mm:ss';

function Setup_i(props:P) {
	useEffect(() => {
		console.log("настройки")	  
	})
    const onChangeTimerSettings = (e:moment.Moment | null) => {
        if (e!==null) {
            props.onChangeTimerMinutes({timerMinutes:e.minutes()})
            props.onChangeTimerSeconds({timerSeconds:e.seconds()})
        }
    }
	return (        
        <>
        <Space
            direction="vertical"
            style={{ display: 'flex', padding: '20px 5%'}}>
            <Card
                title="Тип костей"
                size="small">
                <Radio.Group 
                    onChange={(e) => props.onChangeDicesType({dicesType:e.target.value})}
                    value={props.dicesType}
                    name="w2we2">
                    <Radio value={2}>2</Radio>
                    <Radio value={6}>6</Radio>
                    <Radio value={12}>12</Radio>
                </Radio.Group>
            </Card>
            <Card
                title="Количество костей"
                size="small">
                <InputNumber
                    onChange={(e) => props.onChangeDicesCount({dicesCount:Math.floor(e)})}
                    value={props.dicesCount}
                    max={10}
                    min={1}
                    step={1}
                    />                
            </Card>           
            <Card
                title="Время на таймере"
                size="small">
                <TimePicker
                    onChange={(e) => onChangeTimerSettings(e)}
                    value={moment(props.timerMinutes+':'+props.timerSeconds, format)}
                    format={format} 
                    allowClear={false}
                    showNow={false}
                />             
            </Card> 

            
        </Space>
        </>
	)
}

const Setup = connect(mapStateToProps(), mapDispatchToProps)(Setup_i);
export default Setup;