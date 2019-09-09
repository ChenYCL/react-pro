module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat', // 新特性
        'fix', // 修复 bug
        'docs', // 文档
        'typo', // 修改简单的文字或变量名
        'style', // 样式
        'refactor', // 重构
        'test', // 测试
        'chore', // 构建过程或辅助工具的变动
        'revert', // 回滚
        'dev', // 笼统的新需求修改
      ],
    ],
  },
};
