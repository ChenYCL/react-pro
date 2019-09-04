import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux'
import store from './store/store'
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom'
import Loading from "./components/Loading"; // loading
import View from "./view/layout/index";
import AuthRouter from "./untils/AuthRouter";
import Login from "./pages/Login";
import RouteList from './router'


// lazy

const NotFound = import('./pages/404/index')

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route path="/login" component={Login}></Route>
                    {/*<Route path="/register" component={Register}></Route>*/}
                    <View>
                        <Suspense fallback={<Loading/>}>
                            {/*登录权限控制组件*/}
                            {
                                RouteList.map((route, idx) => {
                                    const {path, auth, title, component: Component} = route;
                                    // console.log(path, auth, title, Component)
                                    return (
                                        auth
                                            ? <AuthRouter
                                                path={path}
                                                title={title}
                                                component={Component}
                                                key={idx}
                                              />
                                            : <Route key={idx} path={path} render={ ()=> <div>未开放</div>}/>
                                    )
                                })
                            }
                        </Suspense>
                        {/*<Redirect from="*" to="/NotFound" component={NotFound}/>*/}
                    </View>
                </Switch>
            </Router>
        </Provider>
    )
}


ReactDOM.render(<App/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
