import React, { useCallback } from 'react';
import { Layout, Menu } from 'antd';
import { NavLink, withRouter } from 'react-router-dom';
import './TopNav.scss';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTopMenu } from '../../store/menu';

const TopNav = props => {
  let selectedKey = '0';
  const { location, history } = props;
  const { Header } = Layout;
  const NavLinkList = useSelector(state => state.Menu.NavLinkList);
  const dispatch = useDispatch();
  const NavClick = useCallback(
    idx => {
      dispatch(toggleTopMenu({ currentTopSelectedIndex: idx }));
      if (NavLinkList[idx].sideMenuList[0].options) {
        const { to } = NavLinkList[idx].sideMenuList[0].options[0];
        console.log(to);
        history.push(to);
      } else {
        // 无3级菜单
        history.push(NavLinkList[idx].sideMenuList[0].to);
        console.log(NavLinkList[idx].sideMenuList[0].to);
      }
    },
    [NavLinkList, dispatch, history]
  );
  // eslint-disable-next-line array-callback-return
  NavLinkList.map(item => {
    // 直接跳地址校验选中状态顶部
    if (
      location.pathname
        .toLowerCase()
        .includes(item.routeType.toLocaleLowerCase())
    ) {
      selectedKey = item.index;
    }
  });
  return (
    <Header className="header">
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={[`${selectedKey}`]}
        style={{ lineHeight: '64px' }}
      >
        {NavLinkList.map(nav => {
          const { to, activeClassName, name, index } = nav;
          return (
            <Menu.Item
              key={index}
              to={to}
              activeClassName={activeClassName}
              onClick={() => NavClick(index)}
            >
              {name}
            </Menu.Item>
          );
        })}
      </Menu>
    </Header>
  );
};

export default withRouter(TopNav);
