# vue3-project-template

> 使用 vue3.5+vite6+element-plus+pinia+unocss 搭建

# 样式+icon

> 使用 unocss 相关技术栈

[支持@apply 指令](https://unocss.dev/transformers/directives#installation)

# 代码格式化和规范

> [@antfu/eslint-config](https://github.com/antfu/eslint-config) 统一控制代码格式化和校验

> eslint-plugin-format 在执行 pnpm lint 时，自动格式化格式不规范文件内容

> simple-git-hooks + @commitlint/cli 控制 git 提交规范

> package.json 中配置 simple-git-hooks，在每次修改后都需要使用 npx simple-git-hooks 更新配置

```json
{
  ...,
  "simple-git-hooks":{
    "pre-commit": "pnpm lint",
    "commit-msg": "pnpm commitlint"
  }
}
```
