import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
    build: {
    outDir: 'public/assets',
    rollupOptions: {
        input: {
            main: path.resolve(__dirname, 'src/index.html'),
        },
    },
},
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
},
    server: {
        port: 3000,
    },
});
