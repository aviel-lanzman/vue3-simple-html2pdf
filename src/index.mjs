import Vue3Html2pdf from './vue3-html2pdf.vue'
const pdf = {
  install: function (app) {
    app.component('v-pdf', Vue3Html2pdf)
  },
}

export default pdf
