import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import store from './store/store';
import Index from './components/Loading'; // loading
import NotFound from './components/404'; // loading
import View from './view/layout/index';
import AuthRouter from './untils/AuthRouter';
import Login from './pages/Login';
import Register from './pages/register';
import RouteList from './router';
import './untils/avoidFreshLoseInfo';
import Progress from './components/Npgrogress';
// lazy import

const callFakeAPI = delay =>
  new Promise(resolve => {
    setTimeout(resolve, delay);
  });

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
    };
  }

  async componentDidMount() {
    await callFakeAPI(1000);
    this.setState(() => ({
      // eslint-disable-next-line react/no-unused-state
      isLoading: false,
    }));
  }

  render() {
    const supportsHistory = 'pushState' in window.history;
    return (
      <>
        <Progress isAnimating={this.state.isLoading} />
        <Provider store={store}>
          <Router forceRefresh={!supportsHistory}>
            <Switch>
              <Route path="/login" exact component={Login} />
              <Route path="/register" exact component={Register} />
              <Route path="/404" component={NotFound} />
              {/*窗体包裹 view */}
              <View>
                <Suspense fallback={<Index />}>
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
                  {/*重定向*/}
                  {/*<Redirect to="/Home1/a" />*/}
                </Suspense>
              </View>
            </Switch>
          </Router>
        </Provider>
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
