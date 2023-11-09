/**
 * iconify icon sets
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
   * Iconify icon sets
   */
  sets: IconifySet[];
  /**
   * Same as Vite configuration base option, default is '/'
   */
  base?: string;
  /**
   * Local output directory, default is the same as Vite configuration build.outDir option, which is 'dist' by default
   */
  outDir?: string;
  /**
   * Local output path, module URLs will also be replaced with this path, default is npm/@iconify/json@{version}
   */
  path?: string;
  /**
   * Whether to copy the icon to the local device, with a default value of true.
   */
  copy?: boolean;
}

/**
 * Iconify plugin configuration
 */
export interface IconifyOptions {
  /**
   * Selector for the tag to inject IconifyProviders script after, default is 'title'
   */
  selector?: string;
  /**
   * Icon API URLs, default value is 'https://api.iconify.design'
   */
  resources?: string[];
  /**
   * Timeout before using next host, in milliseconds, default value is 750
   */
  rotate?: number;
  /**
   * Timeout for API query to be considered as failed, in milliseconds, default value is 5000
   */
  timeout?: number;
  /**
   * Local icon set configuration, default is false
   */
  local?: boolean | IconifySet[] | IconifyLocal;
}
