const Vue3ToPdf = require('./vue3-to-pdf.vue')
module.exports = {
  install: function (app) {
    app.component('v-pdf', Vue3ToPdf)
  },
}
