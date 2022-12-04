import * as path from 'path'
import vueI18n from '@intlify/vite-plugin-vue-i18n'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import pluginRewriteAll from 'vite-plugin-rewrite-all'
import WindiCSS from 'vite-plugin-windicss'
// import inject from '@rollup/plugin-inject'
// https://vitejs.dev/config/
export default defineConfig({
    base: 'https://supakjack.github.io/demo-geo-chart/',
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src')
        }
    },
    build: {
        target: 'esnext'
    },
    plugins: [
        Vue(),
        pluginRewriteAll(),
        WindiCSS(),
        Pages({
            exclude: ['**/components/*.vue']
        }),
        Layouts({
            defaultLayout: 'public'
        }),
        AutoImport({
            imports: ['vue-i18n', 'vue', 'vue-router', '@vueuse/core'],
            dts: 'src/auto-imports.d.ts'
        }),
        Components({
            dts: 'src/auto-components.d.ts'
        }),
        vueI18n({
            include: path.resolve(__dirname, 'locales/**')
        })
    ]
})
