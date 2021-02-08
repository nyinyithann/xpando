import { terser } from 'rollup-plugin-terser';
import babel from '@rollup/plugin-babel';
import { eslint } from 'rollup-plugin-eslint';

export default [
  {
    input: 'src/index.js',
    plugins: [terser(), babel({ babelHelpers: 'bundled' }), eslint()],
    output: {
      file: 'build/umd/xpando.js',
      format: 'umd',
      name: 'xpando',
      esModule: false,
    },
  },
  {
    input: 'src/index.js',
    plugins: [terser(), babel({ babelHelpers: 'bundled' }), eslint()],
    output: {
      file: 'build/esm/xpando.js',
      format: 'esm',
    },
  },
];
