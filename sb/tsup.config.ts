import { defineConfig } from 'tsup'

export default defineConfig({
    entry: ['./index.ts'],
    splitting: false,
    sourcemap: true,
    clean: true,
    dts: true,
    minify: true,
    outDir: 'dist',
    format: ['cjs', 'esm'],
})