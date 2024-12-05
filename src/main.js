import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import transleytPlagen from './transleytPlagen'

 const app = createApp(App)

// .directive('focus', {
//     mounted(el) {
//         el.focus()
//     }
// })
app.use(transleytPlagen)
app.mount('#app')
