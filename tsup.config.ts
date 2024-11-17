import {defineConfig} from 'tsup';

export default defineConfig({
    entry: ['src/index.ts'],
    format: ['esm'],
    dts: true,
    clean: true,
    outDir: 'dist',
    sourcemap: true,
    target: 'esnext',
    shims: true,
    esbuildOptions: (options) => {
        options.loader = {
            '.ts': 'ts',
            '.tsx': 'tsx',
            '.js': 'js',
            '.jsx': 'jsx',
            '.css': 'css',
        };
        options.jsx = 'automatic'; // Use automatic runtime (React 17+)
    },
});
