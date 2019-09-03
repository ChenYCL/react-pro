import React, {Component} from 'react'
import {Layout} from 'antd'

import TopNav from '../TopNav' // 顶部
import SideNav from '../SideNav' // 左侧

class View extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Layout style={{height:'100vh'}}>
                <TopNav/>
                <SideNav>
                    {this.props.children}
                </SideNav>
            </Layout>
        )
    }
}

export default View;