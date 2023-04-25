import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import './assets/global.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const pinia = createPinia();
createApp(App).use(pinia).mount('#app');
