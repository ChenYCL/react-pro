import React, { memo } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ReactContent from '../Content';
import { updateMenuStatus } from '../../store/menu';

const SideNav = memo(props => {
  const dispatch = useDispatch();
  const { history } = props;
  const { SubMenu } = Menu;
  const { Sider } = Layout;
  const {
    openKey,
    selectedKey,
    NavLinkList,
    currentTopSelectedIndex,
  } = useSelector(state => state.Menu);
  const { sideMenuList } = NavLinkList[currentTopSelectedIndex]; // 顶部菜单对应->左侧菜单数据

  // sideMenuList有二级可选菜单时
  const menuCreate = sideMenuList.map((opt, idx) => {
    const { title, iconType, to } = opt;
    return opt.options ? (
      <SubMenu
        key={to}
        title={
          <span>
            <Icon type={iconType} />
            {title}
          </span>
        }
        onTitleClick={() => {
          dispatch(
            updateMenuStatus({ openKey: to !== openKey ? to : [], selectedKey })
          );
        }}
      >
        {opt.options.map(item => {
          return (
            <Menu.Item
              onClick={() => {
                dispatch(
                  updateMenuStatus({ openKey: to, selectedKey: item.to })
                );
                history.push(item.to);
              }}
              key={item.to}
            >
              {item.name}
            </Menu.Item>
          );
        })}
      </SubMenu>
    ) : (
      <Menu.Item
        key={to}
        onClick={() => {
          dispatch(updateMenuStatus({ openKey: to, selectedKey: to }));
          history.push(to);
        }}
      >
        <Icon type={iconType} />
        <span>{title}</span>
      </Menu.Item>
    );
  });

  console.log(selectedKey, 'sideNav..............');
  return (
    <Layout>
      <Sider width={200} style={{ background: '#fff' }}>
        <Menu
          mode="inline"
          selectedKeys={[`${selectedKey}`]}
          openKeys={[`${openKey}`]}
          style={{ height: '100%', borderRight: 0 }}
          theme="light"
        >
          {menuCreate}
        </Menu>
      </Sider>
      {/* 内容区域 */}
      <ReactContent>{props.children}</ReactContent>
    </Layout>
  );
});

export default withRouter(SideNav);
