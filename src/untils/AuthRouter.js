import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

class AuthRouter extends React.Component {
  render() {
    const { component: Component, User, auth, ...rest } = this.props;
    const { isAuth } = User; // 初步模拟数据用户是否登陆，如未登陆，则跳转到login
    // 登陆情况下
    if (isAuth) {
      return (
        <Route
          exact
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...rest}
          render={props => {
            // eslint-disable-next-line react/jsx-props-no-spreading
            return auth ? <Component {...props} /> : <div>无查看权限</div>;
          }}
        />
      );
    }
    return <Redirect to="/login" />;
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps)(AuthRouter);
