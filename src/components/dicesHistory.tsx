import { CaretRightOutlined } from '@ant-design/icons';
import { Collapse, Row, Col } from 'antd';

import '../styles/dicesHistory.css'

type P = {history: Array<Array<number>>}
const { Panel } = Collapse;
export function DicesHistory({history}:P): JSX.Element {
	return <Collapse
		bordered={false}
		expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
		ghost={true}
		style={{width: "100%"}}
	>
		<Panel header="История выпаданий" key="1">
			{(history !== undefined) ? history.map(
				(v, id) => (
					<Row key={"step-" + id} justify="center"
						className='historyRow'>
						{v.map((n, id) => (
							<Col span={2} key={"dice-" + id}>
								{n}
							</Col>
						))}
						<Col span={2} key={"dice-" + id}>
							{"Сумма: " + v.reduce((sum, value) => (sum+value))}
						</Col>
					</Row>
				)
			) : ''}
		</Panel>
	</Collapse>;
}
