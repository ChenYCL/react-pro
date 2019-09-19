const TOGGLE_TOP_MENU = 'TOGGLE_TOP_MENU';
const UPDATE_MENU_STATUS = 'UPDATE_MENU_STATUS';

/**
 * currentTopSelectedIndex 顶部导航 默认选中编号 '0'
 * NavLinkList 顶部和左侧菜单联动关系数据
 * @type {{currentTopSelectedIndex: number, NavLinkList: *[]}}
 */
const initialState = {
  openKey: '/Home1',
  selectedKey: '/Home1/a',
  currentTopSelectedIndex: 0,
  NavLinkList: [
    {
      to: '/',
      activeClassName: 'nav-selected',
      name: 'Home',
      routeType: 'Home',
      index: 0,
      // 左侧菜单表
      sideMenuList: [
        // 联动 顶部联动 左侧导航
        {
          title: 'Home-1',
          selectedKeys: 'sub1',
          to: '/Home1',
          iconType: 'user',
          options: [
            {
              openKeys: '1',
              name: 'option1',
              to: '/Home1/a',
            },
            {
              openKeys: '2',
              name: 'option2',
              to: '/Home1/b',
            },
          ],
        },
        {
          title: 'Home-2',
          selectedKeys: 'sub2',
          to: '/Home2',
          iconType: 'laptop',
          options: [
            {
              openKeys: '3',
              name: 'option1',
              to: '/Home2/c',
            },
            {
              openKeys: '4',
              name: 'option2',
              to: '/Home2/d',
            },
          ],
        },
      ],
    },
    {
      to: '/About',
      activeClassName: 'nav-selected',
      name: 'About',
      routeType: 'About',
      index: 1,
      sideMenuList: [
        // 联动 顶部联动 左侧导航
        {
          title: 'About-1',
          selectedKeys: 'sub1',
          to: '/About1',
          iconType: 'user',
          options: [
            {
              openKeys: '1',
              name: 'about-option1',
              to: '/About1/e',
            },
            {
              openKeys: '2',
              name: 'about-option2',
              to: '/About1/f',
            },
          ],
        },
        {
          title: 'About-2',
          selectedKeys: 'sub2',
          to: '/About2',
          iconType: 'laptop',
          options: [
            {
              openKeys: '3',
              name: 'about-option2-1',
              to: '/About1/g',
            },
            {
              openKeys: '4',
              name: 'about-option2-2',
              to: '/About1/h',
            },
          ],
        },
      ],
    },
    {
      to: '/Info',
      activeClassName: 'nav-selected',
      name: 'Info',
      routeType: 'Info',
      index: 2,
      sideMenuList: [
        // 联动 顶部联动 左侧导航
        {
          title: 'info-1',
          selectedKeys: '1',
          to: '/info1',
          iconType: 'user',
          options: null,
        },
        {
          title: 'info-2',
          selectedKeys: '2',
          to: '/info2',
          iconType: 'user',
          options: null,
        },
      ],
    },
  ],
};

// aciton

export const toggleTopMenu = currentTopSelectedIndex => {
  return {
    type: TOGGLE_TOP_MENU,
    payload: currentTopSelectedIndex,
  };
};

export const updateMenuStatus = ({ selectedKey, openKey }) => {
  return {
    type: UPDATE_MENU_STATUS,
    payload: {
      selectedKey,
      openKey,
    },
  };
};
// reducer
const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case TOGGLE_TOP_MENU:
      return { ...state, ...payload };
    case UPDATE_MENU_STATUS:
      return { ...state, ...payload };
    default:
      return state;
  }
};

export default reducer;
