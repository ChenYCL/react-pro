import React, { useEffect } from 'react';
import { Layout, Menu } from 'antd';
import { NavLink, withRouter } from 'react-router-dom';
import './TopNav.scss';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTopMenu } from '../../store/menu';

const TopNav = props => {
  let selectedKey = '0';
  const { location } = props;
  const { Header } = Layout;
  const NavLinkList = useSelector(state => state.Menu.NavLinkList);
  const currentTopMenuIndex = useSelector(
    state => state.Menu.currentTopSelectedIndex
  );
  const dispatch = useDispatch();
  switch (location.pathname) {
    case '/':
      document.title = '客群系统';
      break;
    case '/About':
      document.title = '关于';
      break;
    case '/Info':
      document.title = '信息';
      break;
    default:
      break;
  }
  // eslint-disable-next-line array-callback-return
  NavLinkList.map(item => {
    if (item.to === location.pathname && item.index !== currentTopMenuIndex) {
      selectedKey = item.index;
      dispatch(
        toggleTopMenu({
          currentTopSelectedIndex: item.index,
        })
      );
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
            <Menu.Item key={index}>
              <NavLink
                to={to}
                key={index}
                activeClassName={activeClassName}
                onClick={() =>
                  dispatch(
                    toggleTopMenu({
                      currentTopSelectedIndex: index,
                    })
                  )
                }
              >
                {name}
              </NavLink>
            </Menu.Item>
          );
        })}
      </Menu>
    </Header>
  );
};

export default withRouter(TopNav);
