# @tomjs/vite-plugin-iconify

[![npm](https://img.shields.io/npm/v/@tomjs/vite-plugin-iconify)](https://www.npmjs.com/package/@tomjs/vite-plugin-iconify) ![node-current (scoped)](https://img.shields.io/node/v/@tomjs/vite-plugin-iconify) ![NPM](https://img.shields.io/npm/l/@tomjs/vite-plugin-iconify) [![Docs](https://img.shields.io/badge/API-unpkg-orange)](https://www.unpkg.com/browse/@tomjs/vite-plugin-iconify/dist/index.d.ts)

**English** | [中文](./README.zh_CN.md)

> A Vite plugin for handling iconify icon sets in environments without internet access.

## Install

```bash
# pnpm
pnpm add @iconify/json @tomjs/vite-plugin-iconify -D

# yarn
yarn add @iconify/json @tomjs/vite-plugin-iconify -D

# npm
npm i @iconify/json @tomjs/vite-plugin-iconify --save-dev
```

## Usage

Using Vue/React projects as examples:

### Using the plugin

#### Vue Example

```js
import iconify from '@tomjs/vite-plugin-iconify';
import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';

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
import iconify from '@tomjs/vite-plugin-iconify';
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

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

- [index.d.ts](https://www.unpkg.com/browse/@tomjs/vite-plugin-iconify/dist/index.d.ts) provided by [unpkg.com](https://www.unpkg.com).

#### Parameters

| Parameter | Type                                        | Default | Description                                                      |
| --------- | ------------------------------------------- | ------- | ---------------------------------------------------------------- |
| selector  | `string`                                    | 'title' | The tag selector to inject the IconifyProviders script after     |
| resources | `string[]`                                  | []      | Icon API URLs, default includes https://api.iconify.design       |
| rotate    | `number`                                    | 750     | Timeout in milliseconds before using the next host               |
| timeout   | `number`                                    | 5000    | Timeout in milliseconds before an API query is considered failed |
| local     | `'boolean'\|'IconifySet[]'\|IconifyLocal[]` | false   | Local icon set configuration                                     |

**resources**: You can add npm cdn or custom url:

- npmmirror:
  - https://registry.npmmirror.com/@iconify/json/{version}/files/json
  - https://registry.npmmirror.com/@iconify/json/latest/files/json
  - https://registry.npmmirror.com/@iconify/json/2.2.187/files/json
- jsdelivr:
  - https://cdn.jsdelivr.net/npm/@iconify/json@{version}/json
  - https://cdn.jsdelivr.net/npm/@iconify/json/json
  - https://cdn.jsdelivr.net/npm/@iconify/json@2.2.187/json
- unpkg:
  - https://unpkg.com/@iconify/json@{version}/json
  - https://unpkg.com/@iconify/json/json
  - https://unpkg.com/@iconify/json@2.2.187/json

##### IconifySet

Iconify icon set, refer to [icon sets](https://icon-sets.iconify.design/) or [Icônes](https://icones.js.org/)

##### IconifyLocal

By configuring this parameter, the local icon set will be copied to the `outDir` directory based on the `sets` configuration.

| Parameter | Type           | Default                       | Description                                                                                    |
| --------- | -------------- | ----------------------------- | ---------------------------------------------------------------------------------------------- |
| **sets**  | `IconifySet[]` | []                            | Iconify icon sets                                                                              |
| base      | `string`       | '/'                           | Same as the `base` option in Vite configuration                                                |
| outDir    | `string`       | 'dist'                        | Local output directory, default is the same as the `build.outDir` option in Vite configuration |
| path      | `string`       | 'npm/@iconify/json@{version}' | Local output path, the corresponding module URL will also be replaced with this path           |

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
