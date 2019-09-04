import React from 'react'
import {Layout, Menu, Icon} from 'antd'
import {NavLink} from "react-router-dom";
import ReactContent from "../Content";
import {useDispatch, useSelector} from "react-redux";

const SideNav = (props) => {
    const {SubMenu} = Menu;
    const {Sider} = Layout;
    const {NavLinkList} = useSelector(state => state.Menu)
    console.log(NavLinkList)
    return (
        <Layout>
            <Sider width={200} style={{background: '#fff'}}>
                <Menu
                    mode="inline"
                    defaultSelectedKeys={['1']}  // 选中子项
                    defaultOpenKeys={['sub1']}  // 选中左侧首项
                    style={{height: '100%', borderRight: 0}}
                >
                    {/*<SubMenu*/}
                    {/*    key="sub1"*/}
                    {/*    title={*/}
                    {/*        <span>*/}
                    {/*        <Icon type="user"/>*/}
                    {/*        subnav 1*/}
                    {/*        </span>*/}
                    {/*    }*/}
                    {/*>*/}
                    {/*    <Menu.Item key="1">option1</Menu.Item>*/}
                    {/*    <Menu.Item key="2">option2</Menu.Item>*/}
                    {/*    <Menu.Item key="3">option3</Menu.Item>*/}
                    {/*    <Menu.Item key="4">option4</Menu.Item>*/}
                    {/*</SubMenu>*/}

                    {/*{*/}

                    {/*    NavLinkList.map((menu, idx) => {*/}
                    {/*        const {title, key, to, iconType, options} = menu.sideMenuList;*/}
                    {/*        return (*/}
                    {/*            <SubMenu*/}
                    {/*                key={key}*/}
                    {/*                title={*/}
                    {/*                    <span>*/}
                    {/*                        <Icon type={iconType}/>*/}
                    {/*                        {title}*/}
                    {/*                    </span>*/}
                    {/*                }*/}
                    {/*            >*/}
                    {/*                {*/}
                    {/*                    options.map((opt, idx) => {*/}
                    {/*                        const {key, name, to} = opt;*/}
                    {/*                        return (*/}
                    {/*                            <Menu.Item key={key}>*/}
                    {/*                                <NavLink to={to}>{name}</NavLink>*/}
                    {/*                            </Menu.Item>*/}
                    {/*                        )*/}
                    {/*                    })*/}
                    {/*                }*/}
                    {/*            </SubMenu>*/}
                    {/*        )*/}
                    {/*    })*/}

                    {/*}*/}
                    <SubMenu
                        key="sub2"
                        title={
                            <span>
                            <Icon type="laptop"/>
                            subnav 2
                            </span>
                        }
                    >
                        <Menu.Item key="5">option5</Menu.Item>
                        <Menu.Item key="6">option6</Menu.Item>
                        <Menu.Item key="7">option7</Menu.Item>
                        <Menu.Item key="8">option8</Menu.Item>
                    </SubMenu>
                    <SubMenu
                        key="sub3"
                        title={
                            <span>
                                <Icon type="notification"/>
                                subnav 3
                            </span>
                        }
                    >
                        <Menu.Item key="9">option9</Menu.Item>
                        <Menu.Item key="10">option10</Menu.Item>
                        <Menu.Item key="11">option11</Menu.Item>
                        <Menu.Item key="12">option12</Menu.Item>
                    </SubMenu>
                </Menu>
            </Sider>
            {/*内容区域*/}
            <ReactContent>
                {props.children}
            </ReactContent>
        </Layout>
    )
}

export default SideNav;