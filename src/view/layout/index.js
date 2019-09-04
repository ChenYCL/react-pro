import React, {Component} from 'react'
import {Layout} from 'antd'
import {connect} from 'react-redux'

import TopNav from '../TopNav' // 顶部
import SideNav from '../SideNav' // 左侧

class View extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        // console.log(this.props)
        const {NavLinkList, SideMenuList} = this.props;  // 获取顶部和左侧导航信息
        return (
            <Layout style={{height: '100vh'}}>
                <TopNav NavLinkList={NavLinkList}/>
                <SideNav SideMenuList={SideMenuList}>
                    {this.props.children}
                </SideNav>
            </Layout>
        )
    }
}


export default connect(state => state.Menu)(View);