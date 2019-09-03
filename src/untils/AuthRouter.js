import React from 'react'
import {connect, useSelector} from "react-redux";
import {withRouter, Route, Redirect} from 'react-router-dom'


// const requireAuthentication=(Component)=> {
//
//     class AuthenticatedComponent extends React.Component {
//         //    构造函数调用鉴权函数判断用户关键字是否存在
//         constructor(props) {
//             super(props)
//             this.checkAuth(props)
//         }
//
//         UNSAFE_componentWillReceiveProps(nextProps, nextContext) {
//             this.checkAuth(nextProps)
//         }
//
//         checkAuth = props => {
//             // 鉴权
//             const {user} = props;// 获取用户信息
//             const isLogined = user.status.isLogined && user.password && user.uid // 账号登陆 且用户账号 密码都存在 uid等
//             if (!isLogined) {
//                 // 不满足条件，去登陆吧
//                 this.props.history.replace('/login')
//             }
//         }
//
//         render() {
//             const {user, ...rest} = this.props;
//
//             const isLogined = user.status.isLogined && user.password && user.uid
//
//             if (isLogined) {
//                 return (
//                     <Component {...rest}/>
//                 )
//             }
//
//             return null
//         }
//     }
//
//     const mapStateToProps = (state)=>{
//         return state.user;
//     }
//
//     connect(mapStateToProps)(AuthenticatedComponent)
// }
//
// export default requireAuthentication;

{/*<Error>*/
}
{/*<Component {...rest}/>*/
}
{/*</Error>*/
}

class AuthRouter extends React.Component {
    render() {
        const {component: Component, User, ...rest} = this.props
        console.log(this.props);
        // const isLogged = sessionStorage.getItem("isLogin") === "1" ? true : false;
        const isLogged =User.status.isLogined
        console.log(rest)
        return (
            <Route exact {...rest} render={props => {
                return isLogged
                    ? <Component {...props} />
                    : <Redirect to="/login"/>
            }}/>
        )
    }
}

const mapStateToProps = (state) => {
    return state
}

export default withRouter(connect(mapStateToProps)(AuthRouter));

