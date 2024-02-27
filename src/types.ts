/**
 * iconify icon sets, visit https://icones.js.org to preview them.
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

// get from https://www.npmjs.com/package/@iconify/json?activeTab=code

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
 * Local icon set configuration
 */
export interface IconifyLocal {
  /**
   * Iconify icon sets, visit https://icones.js.org to preview them.
   */
  sets: IconifySet[];
  /**
   * Same as Vite configuration base option. Default is "/".
   * @default "/"
   */
  base?: string;
  /**
   * Local output directory, default is the same as Vite configuration build.outDir option
   * @default "dist"
   */
  outDir?: string;
  /**
   * Local output path, module URLs will also be replaced with this path. Default is "npm/@iconify/json@{version}"
   * @default "npm/@iconify/json@{version}"
   */
  path?: string;
  /**
   * Whether to copy the icon to the local device. Default is true
   * @default true
   */
  copy?: boolean;
}

/**
 * Iconify plugin configuration
 */
export interface IconifyOptions {
  /**
   * Selector for the tag to inject IconifyProviders script after. Default is "title"
   * @default "title"
   */
  selector?: string;
  /**
   * Icon API URLs. Default is ["https://api.iconify.design"].
   *
   * You can add npm cdn or custom url:
   * * npmmirror:
   *    * https://registry.npmmirror.com/@iconify/json/{version}/files/json
   *    * https://registry.npmmirror.com/@iconify/json/latest/files/json
   *    * https://registry.npmmirror.com/@iconify/json/2.2.187/files/json
   * * jsdelivr:
   *    * https://cdn.jsdelivr.net/npm/@iconify/json@{version}/json
   *    * https://cdn.jsdelivr.net/npm/@iconify/json/json
   *    * https://cdn.jsdelivr.net/npm/@iconify/json@2.2.187/json
   * * unpkg:
   *    * https://unpkg.com/@iconify/json@{version}/json
   *    * https://unpkg.com/@iconify/json/json
   *    * https://unpkg.com/@iconify/json@2.2.187/json
   * @default ["https://api.iconify.design"]
   */
  resources?: string[];
  /**
   * Local icon set configuration. Default is false
   * @default false
   */
  local?: boolean | IconifySet[] | IconifyLocal;
  /**
   * Timeout before using next host, in milliseconds. Default is 750
   * @default 750
   */
  rotate?: number;
  /**
   * Timeout for API query to be considered as failed, in milliseconds
   * @default 5000
   */
  timeout?: number;
}
