import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NProgress from 'nprogress';
import * as serviceWorker from './serviceWorker';
import store from './store/store';
import Loading from './components/Loading'; // loading
import View from './view/layout/index';
import AuthRouter from './untils/AuthRouter';
import Login from './pages/Login';
import Register from './pages/register';
import RouteList from './router';
import './untils/avoidFreshLoseInfo';

// lazy import

class App extends React.Component {
  componentWillUpdate() {
    NProgress.start();
  }

  componentDidUpdate() {
    NProgress.done();
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/login" exact component={Login} />
            <Route path="/register" component={Register} />
            {/*窗体包裹 view */}
            <View>
              <Suspense fallback={<Loading />}>
                {/*登录权限控制组件*/}
                {RouteList.map((route, idx) => {
                  const { path, auth, title, component: Component } = route;
                  return (
                    <AuthRouter
                      path={path}
                      title={title}
                      auth={auth}
                      component={Component}
                      key={idx}
                    />
                  );
                })}
              </Suspense>
              {/* <Redirect from="*" to="/NotFound" component={NotFound}/> */}
            </View>
          </Switch>
        </Router>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
