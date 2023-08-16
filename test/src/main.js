import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import VPdf from 'vue3-to-pdf'

createApp(App).use(VPdf).mount('#app')
