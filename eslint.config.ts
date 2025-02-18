import { createRequire } from 'node:module'
import antfu from '@antfu/eslint-config'

const iRequire = createRequire(import.meta.url)
const autoImport = iRequire('./.eslintrc-auto-import.json')
export default antfu(
  {
    type: 'app',
    formatters: {
      css: true,
      html: true,
      markdown: 'prettier',
    },
    stylistic: {
      indent: 2, // 4, or 'tab'
      quotes: 'single', // or 'double'
    },
    languageOptions: {
      globals: {
        ...autoImport.globals,
      },
    },
    typescript: true,
    vue: {
      overrides: {
        // enforce order of component top-level elements 自定义 Vue 文件中标签的顺序，模板 -> 脚本 -> 样式
        'vue/block-order': [
          'error',
          {
            order: ['template', 'script', 'style'],
          },
        ],
      },
    },
    jsonc: false,
    yaml: false,
    ignores: [
      './node_modules/**',
      // ...globs
    ],
  },
  // 第二部分，应用于所有 TypeScript 文件的规则配置

  {
    files: ['**/*.ts'], // 仅匹配 TypeScript 文件
    rules: {},
  },
  // 第三部分，额外的规则配置
  {
    rules: {},
  },
)
