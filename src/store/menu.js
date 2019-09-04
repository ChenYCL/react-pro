const UPDATE_MENU = "UPDATE_MENU"

const initialState = {
    NavLinkList: [
        {
            to: '/',
            activeClassName: 'nav-selected',
            name: 'Home',
            index: '1',
            // 左侧菜单表
            sideMenuList: [
                // 联动 顶部联动 左侧导航
                {
                    title: 'sidenav1',
                    key: 'sub1',
                    to: '/sub1',
                    iconType: 'user',
                    options: [
                        {
                            key: '1',
                            name: 'option1',
                            to: '/sub1/1'
                        },
                        {
                            key: '2',
                            name: 'option2',
                            to: '/sub1/2'
                        }
                    ]
                },
                {
                    title: 'sidenav2',
                    key: 'sub2',
                    to: '/sub2',
                    iconType: 'laptop',
                    options: [
                        {
                            key: '3',
                            name: 'option1',
                            to: '/sub2/1'
                        },
                        {
                            key: '4',
                            name: 'option2',
                            to: '/sub2/2'
                        }
                    ]
                }
            ]
        },
        {
            to: '/About',
            activeClassName: 'nav-selected',
            name: 'About',
            index: '2',
            sideMenuList: [
                // 联动 顶部联动 左侧导航
                {
                    title: 'sidenav1',
                    key: 'sub1',
                    to: '/sub1',
                    iconType: 'user',
                    options: [
                        {
                            key: '1',
                            name: 'option1',
                            to: '/sub1/1'
                        },
                        {
                            key: '2',
                            name: 'option2',
                            to: '/sub1/2'
                        }
                    ]
                },
                {
                    title: 'sidenav2',
                    key: 'sub2',
                    to: '/sub2',
                    iconType: 'laptop',
                    options: [
                        {
                            key: '3',
                            name: 'option1',
                            to: '/sub2/1'
                        },
                        {
                            key: '4',
                            name: 'option2',
                            to: '/sub2/2'
                        }
                    ]
                }
            ]
        },
    ]

}

// aciton
export const updateMenu = (menu) => {
    return {
        type: UPDATE_MENU,
        payload: menu
    }
}


// reducer
const reducer = (state = initialState, action) => {
    const {type, payload} = action;
    switch (type) {
        case UPDATE_MENU:
            let menu = JSON.parse(JSON.stringify(payload))
            return {
                ...menu,
                ...payload
            }
        default:
            return state
    }
}

export default reducer