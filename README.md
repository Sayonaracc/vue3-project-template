# vue3-project-template

使用 vue3+element-plus+pinia 搭建

# 样式+icon

使用 unocss 相关技术栈

# 代码格式化和规范

@antfu/eslint-config 统一控制代码格式化和校验

eslint-plugin-format 在执行 pnpm lint 时，自动格式化格式不规范文件内容

simple-git-hooks + @commitlint/cli 控制 git 提交规范

package.json 中配置 simple-git-hooks，在每次修改后都需要使用 npx simple-git-hooks 更新配置
