import React, { useReducer, useState } from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import './index.scss';
import { connect, useDispatch } from 'react-redux';
import jwtDecode from 'jwt-decode';
import { loginIn } from '../../store/user';
import User from '../../api/user';
import setAuthToken from '../../untils/setAuthToken';

const LoginForm = props => {
  const dispatch = useDispatch();
  const { history } = props;
  const handleSubmit = e => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        console.log('登陆信息', values);
        const { username, password } = values;
        // 登陆存入redux中
        console.log(props);
        User.loginIn({ username, password })
          .then(res => {
            const { token } = res;
            localStorage.setItem('jwToken', token);
            // 之后接口请求头带上 自定义的token
            setAuthToken(token);
            // 解析token
            const decoded = jwtDecode(token);
            dispatch(loginIn(decoded)); // update user state
            history.replace('/Home1/a');
          })
          .catch(error => {
            // eslint-disable-next-line no-alert
            alert(error.message);
          });
      }
    });
  };
  const { getFieldDecorator } = props.form;
  return (
    <Form onSubmit={handleSubmit} className="login-form">
      <Form.Item className="login-form-item">
        {getFieldDecorator('username', {
          rules: [{ required: true, message: '请输入用户名!' }],
        })(
          <Input
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder="用户名"
          />
        )}
      </Form.Item>
      <Form.Item className="login-form-item">
        {getFieldDecorator('password', {
          rules: [{ required: true, message: '请输入账户密码!' }],
        })(
          <Input
            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
            type="password"
            placeholder="密码"
          />
        )}
      </Form.Item>
      <Form.Item className="login-form-item">
        {getFieldDecorator('remember', {
          valuePropName: 'checked',
          initialValue: false,
        })(<Checkbox>记住我</Checkbox>)}
        <a className="login-form-forgot" href="/">
          忘记密码
        </a>
        <Button type="primary" htmlType="submit" className="login-form-button">
          登陆
        </Button>
        Or <a href="/">注册!</a>
      </Form.Item>
    </Form>
  );
};
const mapStateToProps = state => {
  return {
    user: state.User,
  };
};
const WrappedNormalLoginForm = Form.create({ name: 'login_module' })(LoginForm);

export default connect(
  mapStateToProps,
  { loginIn }
)(WrappedNormalLoginForm);
