import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import store from './store/index';

import AuthHandler from '@/components/AuthHandler.vue';
import ImageList from '@/components/ImageList.vue';
import UploadForm from '@/components/UploadForm.vue';

Vue.use(VueRouter);

export const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: ImageList },
        { path: '/uploads', component: UploadForm },
        { path: '/oauth2/callback', component: AuthHandler }
    ]
});

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');