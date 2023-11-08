# @tomjs/vite-plugin-iconify

![npm](https://img.shields.io/npm/v/%40tomjs/vite-plugin-iconify) ![NPM](https://img.shields.io/npm/l/%40tomjs%2Feslint) ![npm package minimized gzipped size (scoped version select exports)](https://img.shields.io/bundlejs/size/%40tomjs/vite-plugin-iconify)

vite 插件，用于处理 iconify 图标集局域网等环境使用

## 安装

使用 `pnpm` 安装

```bash
pnpm add @tomjs/vite-plugin-iconify -D
```

使用 `yarn` 安装

```bash
yarn add @tomjs/vite-plugin-iconify -D
```

使用 `npm` 安装

```bash
npm i @tomjs/vite-plugin-iconify -D
```

## 使用说明

以 vue/react 项目为例

### 使用插件

#### vue示例

```js
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import iconify from '@tomjs/vite-plugin-iconify';

export default defineConfig({
  plugins: [vue(), iconify({})],
});
```

#### react示例

```js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import iconify from '@tomjs/vite-plugin-iconify';

export default defineConfig({
  plugins: [react(), iconify({})],
});
```

#### 参数

| 参数名   | 类型     | 默认值  | 说明                                                     |
| -------- | -------- | ------- | -------------------------------------------------------- |
| selector | `string` | 'title' | 标签选择器，注入IconifyProviders脚本添加在指定的标签后面 |

## 开发

- 开发环境

  - git
  - node>=16
  - pnpm>=8

- 首次使用，需要安装依赖，执行如下命令

```bash
# 安装依赖
pnpm i
# 生成本库的dist，安装 examples 依赖
pnpm bootstrap
```
