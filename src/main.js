import { createApp } from 'vue'//导入一个跟组件
// import App from './App.vue'
// import AppProGram from './AppProjram.vue'
import TestView from './Test.vue'
// import router from './router'
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'


// const app = createApp(App);
// app.use(router);
// app.use(ElementPlus);
// app.mount('#app');

// const app2=createApp(AppProGram);
// app2.use(router);
// app2.use(ElementPlus);
// app2.mount('#app2');

const app3=createApp(TestView)
app3.mount('#app3')
