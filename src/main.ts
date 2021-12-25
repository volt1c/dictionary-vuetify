import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './routes'
import { loadFonts } from './plugins/webfontloader'

loadFonts()

createApp(App).use(router).use(vuetify).mount('#app')
