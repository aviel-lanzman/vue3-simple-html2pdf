import Vue3SimpleHtml2pdf from './vue3-simple-html2pdf.vue'
export const install = function (app) {
  app.component('v-pdf', Vue3SimpleHtml2pdf)
}

export default {
  install,
}
