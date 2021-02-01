import { terser } from 'rollup-plugin-terser';

export default [
  {
    input: 'src/index.js',
    plugins: [terser()],
    output: {
      file: 'build/umd/xpando.js',
      format: 'umd',
      name: 'xpando',
      esModule: false,
    },
  },
  {
    input: 'src/index.js',
    plugins: [terser()],
    output: {
      file: 'build/esm/xpando.js',
      format: 'esm',
    },
  },
];
