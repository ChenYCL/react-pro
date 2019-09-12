

## 支持

---

- [x] sass 支持
- [x] redux
- [x] 登陆
- [ ] 注册
- [x] 路由表配置

## 依赖

---

- classnames
- react-router-dom
- hooks 相关 react-redux
- redux-thunk thunk
- axios

### mock

- mocker-api
- express

## UI

---

1.antd 引入并按需加载

安装依赖 yarn add babel-plugin-import --save-dev， package.json

    "babel": {
    "presets": [
    "react-app"
    ],
    "plugins": [
    [
    "import",
    {
    "libraryName": "antd",
    "style": "css"
    }
    ]
    ]
    }

2.布局添加
3.postcss autoprefix 支持

## mock

---

    npm run mock

## 代码约束

---

- eslint+prettier
- 增加 commit 提交前约束
- 格式化

## 文件结构

---

wating

## 部署

---

docker
