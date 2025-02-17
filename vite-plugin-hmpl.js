import { createFilter } from '@rollup/pluginutils'

export default function (options = {}) {
  const filter = createFilter('**/*.hmpl')

  return {
    name: 'vite-plugin-hmpl',

    async transform(src, id) {
      if (!filter(id)) return null;

      try {
        const content = JSON.stringify(src);
        const stringOptions = JSON.stringify(options);

        const code = `
          import { compile } from 'hmpl-js/dist/hmpl.runtime';
          const template = compile(${content}, ${stringOptions});
          export default template;
        `;

        return {
          code,
          map: null
        }
      } catch (err) {
        this.error(`HMPL Compilation Error: ${err.message}`)
      } 
    }
  }
}
