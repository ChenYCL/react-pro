## 支持

---

- [x] sass 支持
- [x] redux
- [x] 登陆
- [ ] 注册
- [x] 路由表配置
- [x] dllPlugin 拆分第三方
- [x] compress 引入打包输出 gzip
- [x] 依赖分析工具，可视化添加
- [x] 打包进度添加

## 依赖

---

- classnames
- react-router-dom
- hooks 相关 react-redux
- redux-thunk thunk
- axios
- nprogress

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

    yarn run mock

## 指令

    yarn dll 第三方依赖抽取
    yarn prod:build 生产环境打包
    yarn dev:build 开发环境打包
    yarn start 开发环境模拟启动
    yarn link 检查代码错误
    yarn fix 尝试修复
    yarn prettier 自动格式化代码

## 代码约束

---

- eslint+prettier
- 增加 commit 提交前约束
- 格式化

## 文件结构

---

waiting

## 部署

---

docker
