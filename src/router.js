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
        auth: false,
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