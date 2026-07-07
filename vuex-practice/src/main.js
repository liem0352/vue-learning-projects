import { createApp } from 'vue'
import './style.css'
import App from './App.vue'


//引入仓库模块
import store from '../store'
createApp(App).use(store).mount('#app')
