import { lazy } from 'react';
// import {withRouter, Route, Redirect, BrowserRouter as Router} from 'react-router-dom'

// AuthRouter Component
// import About from "./pages/About";
// import Home from "./pages/Home";

const Home = lazy(() => import('./pages/Home/index'));
const About = lazy(() => import('./pages/About/index'));
const Info = lazy(() => import('./pages/Info/index'));
const routerConfig = [
  {
    path: '/',
    auth: true,
    title: '主页',
    component: Home,
  },
  {
    path: '/About',
    auth: true, // 当前是否拥有路由现实权限 否 则显示没有权限
    title: '关于',
    component: About,
  },
  {
    path: '/Info',
    auth: false,
    title: '信息',
    component: Info,
  },
  // demo路由

  {
    path: '/Home1/a',
    auth: true,
    title: '主页',
    component: Home,
  },
  {
    path: '/About1/e',
    auth: true,
    title: '主页',
    component: About,
  },
  {
    path: '/info1',
    auth: true,
    title: '主页',
    component: Info,
  },
];

export default routerConfig;
