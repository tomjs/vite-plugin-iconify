/**
 * iconify 图标集
 */
export type IconifySet =
  | 'academicons'
  | 'akar-icons'
  | 'ant-design'
  | 'arcticons'
  | 'basil'
  | 'bi'
  | 'bpmn'
  | 'brandico'
  | 'bx'
  | 'bxl'
  | 'bxs'
  | 'bytesize'
  | 'carbon'
  | 'charm'
  | 'ci'
  | 'cib'
  | 'cif'
  | 'cil'
  | 'circle-flags'
  | 'circum'
  | 'clarity'
  | 'codicon'
  | 'covid'
  | 'cryptocurrency-color'
  | 'cryptocurrency'
  | 'dashicons'
  | 'devicon-line'
  | 'devicon-original'
  | 'devicon-plain'
  | 'devicon'
  | 'ei'
  | 'el'
  | 'emblemicons'
  | 'emojione-monotone'
  | 'emojione-v1'
  | 'emojione'
  | 'entypo-social'
  | 'entypo'
  | 'eos-icons'
  | 'ep'
  | 'et'
  | 'eva'
  | 'fa-brands'
  | 'fa-regular'
  | 'fa-solid'
  | 'fa'
  | 'fa6-brands'
  | 'fa6-regular'
  | 'fa6-solid'
  | 'fad'
  | 'fe'
  | 'feather'
  | 'file-icons'
  | 'flag'
  | 'flagpack'
  | 'flat-color-icons'
  | 'flat-ui'
  | 'fluent-emoji-flat'
  | 'fluent-emoji-high-contrast'
  | 'fluent-emoji'
  | 'fluent-mdl2'
  | 'fluent'
  | 'fontelico'
  | 'fontisto'
  | 'formkit'
  | 'foundation'
  | 'fxemoji'
  | 'gala'
  | 'game-icons'
  | 'geo'
  | 'gg'
  | 'gis'
  | 'gridicons'
  | 'grommet-icons'
  | 'guidance'
  | 'healthicons'
  | 'heroicons-outline'
  | 'heroicons-solid'
  | 'heroicons'
  | 'humbleicons'
  | 'ic'
  | 'icomoon-free'
  | 'icon-park-outline'
  | 'icon-park-solid'
  | 'icon-park-twotone'
  | 'icon-park'
  | 'iconamoon'
  | 'iconoir'
  | 'icons8'
  | 'il'
  | 'ion'
  | 'iwwa'
  | 'jam'
  | 'la'
  | 'line-md'
  | 'logos'
  | 'ls'
  | 'lucide'
  | 'majesticons'
  | 'maki'
  | 'map'
  | 'material-symbols-light'
  | 'material-symbols'
  | 'mdi-light'
  | 'mdi'
  | 'medical-icon'
  | 'memory'
  | 'meteocons'
  | 'mi'
  | 'mingcute'
  | 'mono-icons'
  | 'mynaui'
  | 'nimbus'
  | 'nonicons'
  | 'noto-v1'
  | 'noto'
  | 'octicon'
  | 'oi'
  | 'ooui'
  | 'openmoji'
  | 'pajamas'
  | 'pepicons-pencil'
  | 'pepicons-pop'
  | 'pepicons-print'
  | 'pepicons'
  | 'ph'
  | 'pixelarticons'
  | 'prime'
  | 'ps'
  | 'quill'
  | 'radix-icons'
  | 'raphael'
  | 'ri'
  | 'si-glyph'
  | 'simple-icons'
  | 'simple-line-icons'
  | 'skill-icons'
  | 'solar'
  | 'streamline-emojis'
  | 'streamline'
  | 'subway'
  | 'svg-spinners'
  | 'system-uicons'
  | 'tabler'
  | 'tdesign'
  | 'teenyicons'
  | 'topcoat'
  | 'twemoji'
  | 'typcn'
  | 'uil'
  | 'uim'
  | 'uis'
  | 'uit'
  | 'uiw'
  | 'vaadin'
  | 'vs'
  | 'vscode-icons'
  | 'websymbol'
  | 'whh'
  | 'wi'
  | 'wpf'
  | 'zmdi'
  | 'zondicons';

// 从 https://www.npmjs.com/package/@iconify/json?activeTab=code 获取

// var types = [];
// document.querySelectorAll('._75771d2d button').forEach(s => {
//   let name = s.innerText;
//   if (name.endsWith('.json')) {
//     name = name.substring(0, name.indexOf('.json'));
//     types.push(`"${name}"`);
//   }
// });
// console.log(types.join('|'));

/**
 * 本地图标集配置
 */
export interface IconifyLocal {
  /**
   * iconify 图标集
   */
  sets: IconifySet[];
  /**
   * 同 vite 配置 base 选项，默认为 /
   */
  base?: string;
  /**
   * 本地输出目录, 默认同 vite 配置 build.outDir 选项，默认为 dist
   */
  outDir?: string;
  /**
   *  本地输出路径，对应模块url也会替换为该路径，默认为 npm/@iconify/json@{version}
   */
  path?: string;
}

/**
 * iconify 插件配置
 */
export interface IconifyOptions {
  /**
   * 标签选择器，注入IconifyProviders脚本添加在指定的标签后面，默认为 title
   */
  selector?: string;
  /**
   * 图标 API 地址，默认值为 https://api.iconify.design
   */
  resources?: string[];
  /**
   * 使用下一个主机之前的超时时间（以毫秒为单位），默认值为 750
   */
  rotate?: number;
  /**
   * API 查询被视为失败之前的超时时间（以毫秒为单位），默认值为 5000
   */
  timeout?: number;
  /**
   * 本地图标集配置，默认为 false
   */
  local?: boolean | IconifySet[] | IconifyLocal;
}
