import React, {lazy, Suspense} from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux'
import store from './store/store'
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom'
import Loading from "./components/Loading";
import View from "./view/layout/index";


// lazy
const Home = lazy(() => import('./pages/Home/index'));
const About = lazy(() => import('./pages/About/index'));
const NotFound = import('./pages/404/index')

const AppRouter = () => {
    return (
        <Provider store={store}>
            <Router>
                <Switch>
                    <View>
                        <Suspense fallback={<Loading/>}>
                            <Route path="/" exact component={Home}/>
                            <Route path="/About" component={About}/>
                        </Suspense>
                        {/*<Redirect from="*" to="/NotFound" component={NotFound}/>*/}
                    </View>
                </Switch>
            </Router>
        </Provider>
    )
}


ReactDOM.render(<AppRouter/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
