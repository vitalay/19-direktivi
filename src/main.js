import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import transleytPlagen from './transleytPlagen'

 const app = createApp(App)
 const ru = {
    app: {
        title: 'как работают плагины в vue?'
        
    }
 }

 const en = {
    app: {
        title: 'How do plugins work in Vue?'
    }
 }
// .directive('focus', {
//     mounted(el) {
//         el.focus()
//     }
// })

app.use(transleytPlagen , {ru, en})
app.mount('#app')
