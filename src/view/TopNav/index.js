import React from 'react';
import { Layout, Menu } from 'antd';
import { NavLink } from 'react-router-dom';
import './TopNav.scss';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTopMenu } from '../../store/menu';

const TopNav = () => {
  const { Header } = Layout;
  const NavLinkList = useSelector(state => state.Menu.NavLinkList);
  const dispatch = useDispatch();
  return (
    <Header className="header">
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['0']}
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

export default TopNav;
