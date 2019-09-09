## 支持

- sass 支持
- redux 支持
- 路由支持

## 依赖

1. classnames
2. react-router-dom
3. hooks 相关 react-redux
4. redux-thunk thunk 等
5. axios

## UI

1.antd 引入并按需加载

```$xslt

//安装依赖 yarn add babel-plugin-import --save-dev， package.json
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
3.postcss autoprefix支持
```

## 代码约束

    eslint+prettier
    commit - pre

## 权限控制

## 文件结构

## 部署
