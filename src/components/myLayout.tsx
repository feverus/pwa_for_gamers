import { connect } from 'react-redux';
import { useEffect } from 'react'
import * as I from '../store/storeInterfaces';
import {mapStateToPropsMain as mapStateToProps} from '../store/mapStateToProps';
import {mapDispatchToProps} from '../store/mapDispatchToProps';

import 'antd/dist/antd.min.css'
import '../styles/index.css'

import type { MenuProps } from 'antd';
import { Layout, Menu, Col, Row } from 'antd';
import { LauncherSettings20Regular, Timer20Regular, CubeQuick20Regular } from "@fluentui/react-icons";

interface PropsChild {
    children: JSX.Element
}
type P = I.PropsStateMain & I.PropsDispaich & PropsChild;
type MenuItem = Required<MenuProps>['items'][number];

function getItem(
	label: React.ReactNode,
	key: React.Key,
	icon?: React.ReactNode,
	children?: MenuItem[],
): MenuItem {
	return {
	  key,
	  icon,
	  children,
	  label,
	} as MenuItem;
}

function MyLayout_i(props:P) {
	const items = [
		getItem('Настройки', 'setup', <LauncherSettings20Regular/>),
		getItem('Таймер', 'timer', <Timer20Regular/>),
		getItem('Кости', 'dices', <CubeQuick20Regular/>),		
	];
	const { Header, Content } = Layout;
	
	useEffect(() => {
		console.log(props.page)	  
	})

	return (
		<Layout className="layout">
			<Header>
			<Menu
				theme="dark"
				mode="horizontal"
				style={{display:'flex'}}
				defaultSelectedKeys={['setup']}
				items={items}
				onClick={({key}) => props.onChangePage({page:key})}
			/>
			</Header>
			<Content
				style={{padding: '20px 5%',
						minHeight: '100%'}}>
				<Row
					align="middle"
					gutter={[16, 16]}>
					<Col span={24}>
						{props.children}
						</Col>
				</Row>
			</Content>
		</Layout>
	)
}

const MyLayout = connect(mapStateToProps(), mapDispatchToProps)(MyLayout_i);
export default MyLayout;