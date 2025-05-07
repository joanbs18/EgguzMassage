import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import compression from 'vite-plugin-compression';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/js/app.js'], // ajusta según tu entrada principal
            refresh: true,
        }),
        react(),
        compression({
            algorithm: 'brotliCompress', // compresión avanzada
            ext: '.br',
            threshold: 1024,
            deleteOriginalAssets: false,
        }),
    ],
    server: {
        historyApiFallback: true, // necesario para React Router
        port: 5173, // puedes ajustar el puerto si usas Laravel con proxy
    },
    build: {
        minify: 'terser',
        terserOptions: {
            compress: {
                drop_console: true,
                drop_debugger: true,
            },
        },
      rollupOptions: {
    output: {
        manualChunks: undefined
    }
},

    },
    define: {
        'process.env': {},
    },
});
