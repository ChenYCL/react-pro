import React, { memo, useState } from 'react';
import { Layout, Menu } from 'antd';
import { withRouter } from 'react-router-dom';
import './TopNav.scss';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTopMenu, updateMenuStatus } from '../../store/menu';

const TopNav = memo(props => {
  const [topMenuIndex, setTopMenuIndex] = useState(0);
  const { history, location } = props;
  const { Header } = Layout;
  const { NavLinkList, currentTopSelectedIndex, selectedKey } = useSelector(
    state => state.Menu
  );
  const dispatch = useDispatch();
  if (location.pathname !== selectedKey) {
    // eslint-disable-next-line array-callback-return
    NavLinkList.map(item => {
      if (
        location.pathname.toLowerCase().includes(item.routeType.toLowerCase())
      ) {
        setTopMenuIndex(item.index);
        dispatch(
          toggleTopMenu({
            currentTopSelectedIndex: item.index,
          })
        );
        dispatch(
          updateMenuStatus({
            openKey: `/${location.pathname.split('/')[1]}`,
            selectedKey: location.pathname,
          })
        );
      }
    });
  }

  /**
   * idx  顶部菜单选中 0-1-2
   * @param idx
   * @constructor
   */
  const NavClick = idx => {
    dispatch(toggleTopMenu({ currentTopSelectedIndex: idx }));
    // 初始化选中
    const sKey = NavLinkList[idx].sideMenuList[0].options
      ? NavLinkList[idx].sideMenuList[0].options[0].to
      : NavLinkList[idx].sideMenuList[0].to;
    const oKey = NavLinkList[idx].sideMenuList[0].to;
    // 左侧菜单状态伴随修改
    dispatch(
      updateMenuStatus({
        selectedKey: sKey,
        openKey: oKey,
      })
    );
    // 点击顶部导航跳转默认路由逻辑
    if (NavLinkList[idx].sideMenuList[0].options) {
      const { to } = NavLinkList[idx].sideMenuList[0].options[0];
      history.push(to);
    } else {
      // 无3级菜单
      history.push(NavLinkList[idx].sideMenuList[0].to);
    }
  };

  console.log(currentTopSelectedIndex, 'topNav.............');

  return (
    <Header className="header">
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={[`${topMenuIndex}`]}
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
});

export default withRouter(TopNav);
