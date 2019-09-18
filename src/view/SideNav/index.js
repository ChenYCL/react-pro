import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import { useSelector } from 'react-redux';
import ReactContent from '../Content';

const SideNav = props => {
  const { SubMenu } = Menu;
  const { Sider } = Layout;
  const { NavLinkList, currentTopSelectedIndex } = useSelector(
    state => state.Menu
  );
  // console.log(NavLinkList[0])
  const { sideMenuList } = NavLinkList[currentTopSelectedIndex]; // 顶部菜单对应->左侧菜单数据
  // console.log(sideMenuList);

  // sideMenuList有二级可选菜单时
  const menuCreate = sideMenuList.map((opt, idx) => {
    // console.log(opt, idx);
    const { title, key, iconType, to } = opt;
    // console.log(title, key, iconType);
    return opt.options ? (
      <SubMenu
        key={key}
        title={
          <span>
            <Icon type={iconType} />
            {title}
          </span>
        }
      >
        {opt.options.map(item => {
          return <Menu.Item key={item.key}>{item.name}</Menu.Item>;
        })}
      </SubMenu>
    ) : (
      <Menu.Item key={key}>
        <Icon type={iconType} />
        <span>{title}</span>
      </Menu.Item>
    );
  });

  return (
    <Layout>
      <Sider width={200} style={{ background: '#fff' }}>
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']} // 选中子项
          defaultOpenKeys={['sub1']} // 选中左侧首项
          style={{ height: '100%', borderRight: 0 }}
          theme="dark"
        >
          {menuCreate}
        </Menu>
      </Sider>
      {/* 内容区域 */}
      <ReactContent>{props.children}</ReactContent>
    </Layout>
  );
};

export default SideNav;
