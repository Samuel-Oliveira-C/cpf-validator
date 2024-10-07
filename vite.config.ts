import { defineConfig } from 'vite';
import { resolve } from 'path';


export default defineConfig({
    build: {
    rollupOptions: {
        input: {
            main: resolve(__dirname, 'public/index.html')
        },
    },
},
    plugins: [
        {
            name: 'configure-response-headers',
            configureServer: (server) => {
                server.middlewares.use((_req, res, next) => {
                    res.setHeader('Cross-Origin-Embedder-Policy', 'require-corp');
                    res.setHeader('Cross-Origin-Opener-Policy', 'same-origin');
                    next();
                });
            },
        },
    ],
});