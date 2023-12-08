# @tomjs/vite-plugin-iconify

[![npm](https://img.shields.io/npm/v/@tomjs/vite-plugin-iconify)](https://www.npmjs.com/package/@tomjs/vite-plugin-iconify) ![node-current (scoped)](https://img.shields.io/node/v/@tomjs/vite-plugin-iconify) ![NPM](https://img.shields.io/npm/l/@tomjs/vite-plugin-iconify) [![Docs](https://www.paka.dev/badges/v0/cute.svg)](https://www.paka.dev/npm/@tomjs/vite-plugin-iconify)

**English** | [中文](./README.zh_CN.md)

> A Vite plugin for handling iconify icon sets in environments without internet access.

## Install

With `pnpm`

```bash
pnpm add @tomjs/vite-plugin-iconify -D
```

With `yarn`

```bash
yarn add @tomjs/vite-plugin-iconify -D
```

With `npm`

```bash
npm i @tomjs/vite-plugin-iconify --save-dev
```

## Usage

Using Vue/React projects as examples:

### Using the plugin

#### Vue Example

```js
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import iconify from '@tomjs/vite-plugin-iconify';

export default defineConfig({
  plugins: [
    vue(),
    iconify({
      resources: ['https://unpkg.com/@iconify/json/json'],
      rotate: 3000,
      local: ['ant-design', 'ep'],
    }),
  ],
});
```

#### React Example

```js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import iconify from '@tomjs/vite-plugin-iconify';

export default defineConfig({
  plugins: [
    react(),
    iconify({
      resources: ['https://unpkg.com/@iconify/json/json'],
      rotate: 3000,
      local: ['ant-design', 'ep'],
    }),
  ],
});
```

#### Documentation

- [API Doc](https://paka.dev/npm/@tomjs/vite-plugin-iconify) Power by [paka.dev](https://paka.dev).
- [index.d.ts](https://www.unpkg.com/browse/@tomjs/vite-plugin-iconify/dist/index.d.ts) Power by [unpkg.com](https://www.unpkg.com/).

#### Parameters

| Parameter | Type | Default | Description |
| --- | --- | --- | --- |
| selector | `string` | 'title' | The tag selector to inject the IconifyProviders script after |
| resources | `string[]` | [] | Icon API URLs, default includes https://api.iconify.design |
| rotate | `number` | 750 | Timeout in milliseconds before using the next host |
| timeout | `number` | 5000 | Timeout in milliseconds before an API query is considered failed |
| local | `'boolean'\|'IconifySet[]'\|IconifyLocal[]` | false | Local icon set configuration |

##### IconifySet

Iconify icon set, refer to [icon sets](https://icon-sets.iconify.design/) or [Icônes](https://icones.js.org/)

##### IconifyLocal

By configuring this parameter, the local icon set will be copied to the `outDir` directory based on the `sets` configuration.

| Parameter | Type | Default | Description |
| --- | --- | --- | --- |
| **sets** | `IconifySet[]` | [] | Iconify icon sets |
| base | `string` | '/' | Same as the `base` option in Vite configuration |
| outDir | `string` | 'dist' | Local output directory, default is the same as the `build.outDir` option in Vite configuration |
| path | `string` | 'npm/@iconify/json@{version}' | Local output path, the corresponding module URL will also be replaced with this path |

### Using CLI

Generate Iconify icon set data for icon selection and other functionalities.

- Add the following script to `package.json` under `scripts` : `ti ant-design ep --path src/constants`
- Or run the following command directly: `pnpm ti ant-design ep --path src/constants`

```bash
Usage:
  $ ti [...sets]

Commands:
  [...sets]  create icon collection data based on @iconify/json in the project

For more info, run any command with the `--help` flag:
  $ ti --help

Options:
  --path <path>  [string] output file path. (default: src)
  --name <name>  [string] output file name. if tsconfig is exists, default is 'iconify.ts', or is 'iconify.js'
  --type <type>  ["esm" | "cjs"] output file type. (default: esm)
  -h, --help     Display this message
  -v, --version  Display version number
```

## Development

- Development requirements:

  - git
  - node>=16
  - pnpm>=8

- For the first time, install dependencies by running the following command:

```bash
# Install dependencies
pnpm i
# build library
pnpm build
```

- To debug the `vue` project, execute the following commands:

```bash
cd examples/vue
pnpm build
pnpm preview
```

- To debug the `react` project, execute the following commands:

```bash
cd examples/react
pnpm build
pnpm preview
```
