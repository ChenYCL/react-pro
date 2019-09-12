module.exports = {
  extends: [
    'react-app',
    //  react帮配置好了一些语法，譬如箭头函数
    'airbnb',
    'plugin:prettier/recommended',
    // prettier配置
  ],
  rules: {
    'no-debugger': 2,
    'react/jsx-filename-extension': 'off',
    // 关闭airbnb对于jsx必须写在jsx文件中的设置
    'react/prop-types': 'off',
    //使用key做关键字
    'react/no-array-index-key': 0,
    'import/no-mutable-exports': 1, //imutable数据
    // 关闭airbnb对于必须添加prop-types的校验
    'no-use-before-define': 1,
    'react/no-unescaped-entities': 0, //安全escape
    'react/jsx-one-expression-per-line': 0, // 自动换行
    'react/prefer-stateless-function': 0, // 避免class组件
    'react/jsx-curly-newline': 0, // 颗粒化调用换行
    'no-else-return': 0, //else中必须有return
    'react/destructuring-assignment': [
      0,
      'always',
      {
        ignoreClassFields: false,
      },
    ],
    'no-unused-vars': 1,
    'react/jsx-curly-brace-presence': 2,
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'no-console': process.env.NODE_ENV === 'production' ? 2 : 0,
    'import/prefer-default-export': 0, //建议default导出
    'spaced-comment': 0, //注释要求检测关闭
    // 关闭要求一个表达式必须换行的要求，和Prettier冲突了
    'react/jsx-wrap-multilines': 'off', // 关闭要求jsx属性中写jsx必须要加括号，和Prettier冲突了
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'only-multiline',
        // 关闭airbnb对函数调用参数，非一行，最后也要加逗号的限制
      },
    ],
    'jsx-a11y/no-static-element-interactions': 'off',
    // 关闭非交互元素加事件必须加 role
    'jsx-a11y/click-events-have-key-events': 'off',
    // 关闭click事件要求有对应键盘事件
    'no-bitwise': 'off',
    // 不让用位操作符
  },
  overrides: [
    // {
    //     files: ['**/Mi/*.js', '**/Mi/*.jsx'],
    //     rules: {
    //         'react/prop-types': 'error', // Mi 文件夹下的是系统组件，必须写prop-types
    //     },
    // },
  ],
};
