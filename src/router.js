import {lazy } from 'react'
// import {withRouter, Route, Redirect, BrowserRouter as Router} from 'react-router-dom'

// AuthRouter Component
// import About from "./pages/About";
// import Home from "./pages/Home";

const Home = lazy(() => import('./pages/Home/index'));
const About = lazy(() => import('./pages/About/index'));

const routerConfig = [
    {
        path: '/About',
        auth: false,  // 当前是否拥有路由现实权限 否 则显示没有权限
        title: '关于',
        component: About
    },
    {
        path: '/',
        auth: true,
        title: '主页',
        component: Home
    }
]

export default routerConfig