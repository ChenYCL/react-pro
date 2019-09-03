import React from "react";
import {Layout, Menu} from 'antd'
import './TopNav.scss'

class TopNav extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {Header} = Layout;
        return (
            <Header className="header">
                <div className="logo"/>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    style={{lineHeight: '64px'}}
                >
                    <Menu.Item key="1">nav 1</Menu.Item>
                    <Menu.Item key="2">nav 2</Menu.Item>
                    <Menu.Item key="3">nav 3</Menu.Item>
                </Menu>
            </Header>
        );
    }
}

export default TopNav