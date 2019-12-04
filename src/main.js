import Vue from 'vue';
import App from './pages/App.vue';
import './assets/styles/reset.less';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios';


Vue.use(ElementUI) //will mount `Vue.prototype.$message`
axios.defaults.baseURL = '/api';
axios.defaults.headers.post['Content-Type'] = 'application/json; charset=utf-8';
axios.defaults.crossDomain = true;
axios.defaults.withCredentials = true;
//axios.defaults.headers.common['Authorization'] = '';
axios.defaults.timeout = 5000;
Vue.prototype.$axios = axios;
Vue.config.productionTip = false;



new Vue({
    render: h => h(App),
}).$mount('#app')



