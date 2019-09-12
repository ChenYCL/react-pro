import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Route, Redirect } from 'react-router-dom';

class AuthRouter extends React.Component {
  render() {
    const { component: Component, User, ...rest } = this.props;
    // console.log(this.props);
    // const isLogged = sessionStorage.getItem("isLogin") === "1" ? true : false;
    const { isAuth } = User; // 初步模拟数据用户是否登陆，如未登陆，则跳转到login
    // console.log(rest);
    console.log(isAuth);
    return (
      <Route
        exact
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...rest}
        render={props => {
          // eslint-disable-next-line react/jsx-props-no-spreading
          return isAuth ? <Component {...props} /> : <Redirect to="/login" />;
        }}
      />
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default withRouter(connect(mapStateToProps)(AuthRouter));
