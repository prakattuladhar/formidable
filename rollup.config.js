import { nodeResolve } from '@rollup/plugin-node-resolve';
import { babel } from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';

export default {
    input: 'src/index.js',
    output: {
        dir: 'dist',
        format: 'cjs',
        exports:'named'
    },
    plugins: [
        nodeResolve(),
        commonjs(),
        babel({ babelHelpers: 'bundled' })
    ]
};