import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from 'vite-tsconfig-paths'
import { resolve } from 'path'

export default defineConfig({
    plugins: [react(), tsconfigPaths()],
    build: {
        lib: {
            entry: resolve(__dirname, 'src/main.ts'),
            name: 'index',
            fileName: 'index',
            formats: ['es', 'cjs'],
        },
        rollupOptions: {
            external: ['react', 'react-dom', 'lodash', '@emotion/react', '@radix-ui/react-slot', 'polished', 'csstype'],
        },
    },
})
