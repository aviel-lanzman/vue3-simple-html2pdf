<script>
import html2pdf from 'html2pdf.js'

import { h } from 'vue'

export default {
  props: {
    index: {
      type: Number,
      default: 1,
    },
    filename: {
      type: String,
      default: 'filename.pdf',
    },
    readyDownload: {
      type: Boolean,
      default: false,
    },
    options: {
      type: Object,
      default: {
        margin: 15,
        image: {
          type: 'jpeg',
          quality: 1,
        },
        html2canvas: { scale: 3 },
        jsPDF: {
          unit: 'mm',
          format: 'a4',
          orientation: 'p',
        },
      },
    },
  },

  methods: {
    createPdfFromElement() {
      const el = document.getElementById(`Vue3SimpleHtml2pdf${this.index}`)
      if (!el) {
        return alert('Error!\nnot found pdf..')
      }

      return html2pdf().from(el).set(this.options)
    },
    download() {
      this.createPdfFromElement().save(this.filename)
    },
    async blobPdf() {
      const pdf = await this.createPdfFromElement().toPdf().get('pdf')
      return pdf.output('blob')
    },
    // async outImageSrc() {
    //   const el = document.getElementById(`Vue3SimpleHtml2pdf${this.index}`)
    //   if (!el) {
    //     return
    //   }

    //   const image = await html2pdf().from(el).set(this.options).outputImg()

    //   const outputType = 'blob'
    //   const pageSize = jsPDF.getPageSize(this.options.jsPDF)
    //   const x = -2
    //   const y = -2
    //   const width = pageSize.width
    //   const height = pageSize.height
    //   const doc = new jsPDF(this.options.jsPDF)
    //   doc.addImage(image.src, 'jpeg', x, y, width, height, '')
    //   return doc.output(outputType)
    // },
    openInNewTab() {
      const el = document.getElementById(`Vue3SimpleHtml2pdf${this.index}`)
      if (!el) {
        return
      }
      html2pdf()
        .from(el)
        .set(this.options)
        .toPdf()
        .get('pdf')
        .then(function (pdf) {
          window.open(pdf.output('bloburl'), '_blank')
        })
    },
  },
  render() {
    return h(
      'div',
      {
        class: 'vue3-simple-html2pdf',
        id: `Vue3SimpleHtml2pdf${this.index}`,
      },
      this.$slots.default()
    )
  },
}
</script>

<style>
.vue3-simple-html2pdf {
  position: relative;
}
.html2pdf__page-number {
  position: absolute;
  bottom: 10px;
  left: 0;
  right: 0;
  margin: auto;
  text-align: center;
}
</style>
