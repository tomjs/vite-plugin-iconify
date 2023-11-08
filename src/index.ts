import type { PluginOption } from 'vite';
import { parse as htmlParser } from 'node-html-parser';
import { HtmlIconifyOptions } from './types';

export * from './types';

export function useIconifyPlugin(options?: HtmlIconifyOptions): PluginOption {
  return {
    name: '@tomjs/iconify',
    apply: 'build',
    enforce: 'post',
    transformIndexHtml(html) {
      const opts = Object.assign({ selector: 'title' } as HtmlIconifyOptions, options);

      const root = htmlParser(html);
      const title = root.querySelector(opts?.selector || 'title');
      if (!title) {
        const head = root.querySelector('head');
        if (!head) {
          root?.insertAdjacentHTML('beforeend', '<head></head>');
        }
        head?.insertAdjacentHTML('beforeend', '<title></title>');
      }

      title?.insertAdjacentHTML(
        'afterend',
        `
<script>
  IconifyProviders = {
      '': {
          resources: [
              'https://unpkg.com/@iconify/json/json',
              'https://api.iconify.design',
          ],
          rotate: 1000,
      },
  };
</script>`,
      );

      return root.toString();
    },
  };
}

export default useIconifyPlugin;
