import Vue3ToPdf from './vue3-to-pdf.vue'
export default {
  install: function (app) {
    app.component('v-pdf', Vue3ToPdf)
  },
}
