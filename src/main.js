import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; 
import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';

const app = createApp(App)
  .use(router);

app.use(Toast, {
// Paramètres de Toastification, si nécessaire
});

app.mount('#app');