import type { PluginOption, UserConfig } from 'vite';
import type { IconifyLocal, IconifyOptions as IconifyOptions, IconifySet } from './types';
import fs from 'node:fs';
import path from 'node:path';
import _ from 'lodash';
import { parse as htmlParser } from 'node-html-parser';
import { mkdirpSync, urlConcat } from './utils';

export * from './types';

const PKG_NAME = '@iconify/json';

/**
 * Get @iconify/json version
 */
function getIconifyInfo() {
  const pwd = process.cwd();
  const modulePath = path.join(pwd, 'node_modules', PKG_NAME);
  const pkgFile = path.join(modulePath, 'package.json');
  if (!fs.existsSync(pkgFile)) {
    return;
  }

  const pkg = JSON.parse(fs.readFileSync(pkgFile, 'utf-8'));
  const json = fs.readdirSync(path.join(modulePath, 'json')) || [];
  const sets: string[] = json.map(s => s.substring(0, s.lastIndexOf('.json')));

  return {
    version: pkg.version,
    sets,
  };
}

const DEFAULT_API = 'https://api.iconify.design';

function checkInstallPkg(pkgInfo) {
  const { version, sets } = pkgInfo || {};
  if (version && Array.isArray(sets) && sets.length > 0) {
    return;
  }
  throw new Error(`Please install ${PKG_NAME} package`);
}

type PreHandleOptions = Omit<IconifyOptions, 'local'> & {
  local: IconifyLocal;
  version?: string;
};

function preHandleOptions(options?: IconifyOptions): PreHandleOptions {
  const opts: PreHandleOptions = Object.assign(
    { local: false } as IconifyOptions,
    _.cloneDeep(options),
  );

  opts.resources = opts.resources || [];
  opts.rotate = opts.rotate || 750;
  opts.timeout = opts.timeout || 5000;

  const { local } = opts;
  const pkgInfo = getIconifyInfo();

  opts.version = pkgInfo?.version;

  const localOpts: IconifyLocal = {
    sets: [],
  };

  if (typeof local === 'boolean') {
    if (local) {
      checkInstallPkg(pkgInfo);
      localOpts.sets = (pkgInfo?.sets || []) as IconifySet[];
    } else {
      localOpts.sets = [];
    }
  } else if (Array.isArray(local)) {
    localOpts.sets = local as IconifySet[];
  } else {
    Object.assign(localOpts, local);
  }

  localOpts.sets = localOpts.sets || [];

  if (localOpts.sets.length > 0) {
    checkInstallPkg(pkgInfo);
    localOpts.sets = (localOpts.sets || []).filter(s => pkgInfo?.sets.includes(s));
  }

  localOpts.path = localOpts.path || 'npm/@iconify/json@{version}';
  localOpts.copy = localOpts.copy ?? true;

  opts.local = localOpts;

  return opts;
}

function getUrlPath(url, version?: string): string {
  const dest = url || '';
  if (version) {
    return dest.replace('{version}', version);
  } else {
    return dest.replace(/[/@]{version}/g, '');
  }
}

/**
 * Iconify icon sets plugin
 */
export function useIconifyPlugin(options?: IconifyOptions): PluginOption {
  const opts = preHandleOptions(options);
  let userConfig: UserConfig = {};

  return {
    name: '@tomjs/html-iconify',
    apply: 'build',
    enforce: 'post',
    config(config) {
      userConfig = config;
    },
    transformIndexHtml(html) {
      const root = htmlParser(html);
      const title = root.querySelector(opts?.selector || 'title');
      if (!title) {
        const head = root.querySelector('head');
        if (!head) {
          root?.insertAdjacentHTML('beforeend', '<head></head>');
        }
        head?.insertAdjacentHTML('beforeend', '<title></title>');
      }

      const { sets } = opts.local;
      let urls = opts.resources || [];
      if (Array.isArray(sets) && sets.length > 0) {
        const baseUrl = opts.local.base || userConfig?.base || '/';
        urls = [urlConcat(baseUrl, opts.local.path || '')];
      }

      urls = [...new Set(urls.map(s => getUrlPath(s, opts.version)).concat([DEFAULT_API]))].map(
        s => `'${s}'`,
      );

      title?.insertAdjacentHTML(
        'afterend',
        `
<script>
  IconifyProviders = {
      '': {
          resources: [${urls.join(',')}],
          rotate: 1000,
      },
  };
</script>`,
      );

      return root.toString();
    },
    closeBundle() {
      const { sets } = opts.local || {};
      if (!opts.local.copy || !Array.isArray(sets) || sets.length === 0) {
        return;
      }

      // Output directory
      const outDir = opts.local.outDir || userConfig.build?.outDir || 'dist';

      const outPath = path.join(process.cwd(), outDir);
      if (!fs.existsSync(outPath)) {
        mkdirpSync(outPath);
      }

      const srcFolder = path.join(process.cwd(), 'node_modules', PKG_NAME, 'json');
      const destFolder = path.join(outPath, getUrlPath(opts.local.path || '', opts.version));

      mkdirpSync(destFolder);

      sets.forEach(s => {
        const name = `${s}.json`;
        fs.copyFileSync(path.join(srcFolder, name), path.join(destFolder, name));
      });
    },
  } as PluginOption;
}

export default useIconifyPlugin;
