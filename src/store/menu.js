const TOGGLE_TOP_MENU = 'TOGGLE_TOP_MENU';

const initialState = {
  currentTopSelectedIndex: 0,
  NavLinkList: [
    {
      to: '/',
      activeClassName: 'nav-selected',
      name: 'Home',
      index: 0,
      // 左侧菜单表
      sideMenuList: [
        // 联动 顶部联动 左侧导航
        {
          title: 'Home-1',
          key: 'sub1',
          to: '/sub1',
          iconType: 'user',
          options: [
            {
              key: '1',
              name: 'option1',
              to: '/sub1/1',
            },
            {
              key: '2',
              name: 'option2',
              to: '/sub1/2',
            },
          ],
        },
        {
          title: 'Home-2',
          key: 'sub2',
          to: '/sub2',
          iconType: 'laptop',
          options: [
            {
              key: '3',
              name: 'option1',
              to: '/sub2/1',
            },
            {
              key: '4',
              name: 'option2',
              to: '/sub2/2',
            },
          ],
        },
      ],
    },
    {
      to: '/About',
      activeClassName: 'nav-selected',
      name: 'About',
      index: 1,
      sideMenuList: [
        // 联动 顶部联动 左侧导航
        {
          title: 'About-1',
          key: 'sub1',
          to: '/sub1',
          iconType: 'user',
          options: [
            {
              key: '1',
              name: 'about-option1',
              to: '/sub1/1',
            },
            {
              key: '2',
              name: 'about-option2',
              to: '/sub1/2',
            },
          ],
        },
        {
          title: 'About-2',
          key: 'sub2',
          to: '/sub2',
          iconType: 'laptop',
          options: [
            {
              key: '3',
              name: 'about-option2-1',
              to: '/sub2/1',
            },
            {
              key: '4',
              name: 'aobut-option2-2',
              to: '/sub2/2',
            },
          ],
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

// reducer
const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case TOGGLE_TOP_MENU:
      return { ...state, ...payload };
    default:
      return state;
  }
};

export default reducer;
