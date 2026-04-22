import { h, createApp } from 'vue';
import singleSpaVue from 'single-spa-vue';
import App from './App.vue';

// 1. Single-SPA ke lifecycle hooks generate karein
const vueLifecycles = singleSpaVue({
    createApp,
    appOptions: {
        render() {
            return h(App);
        },
    },
});

// 2. YAHI SABSE ZAROORI HAI: in functions ko export karna
export const bootstrap = vueLifecycles.bootstrap;
export const mount = vueLifecycles.mount;
export const unmount = vueLifecycles.unmount;

// 🚨 WARNING: Agar is file mein niche kahin bhi
// `createApp(App).mount('#app')` likha hai, toh use DELETE kar dein! 🚨