# vue3-simple-html2pdf

- Export and auto download PDF using vue3 and html2pdf.js.
- Easy to custom any PDF style because it will be export from real html.
- Can use custom css style for pdf page using vue style.

# Example sanbox code

https://codesandbox.io/s/vue3-simple-html2pdf-jxy2uz

# Install

```
npm i vue3-simple-html2pdf-test
```
or pnpm

```
pnpm i vue3-simple-html2pdf-test
```

or yarn

```
yarn add vue3-simple-html2pdf-test
```

# Register component
```
import Vue3SimpleHtml2pdf from "vue3-simple-html2pdf";
Vue.use(Vue3SimpleHtml2pdf);
```

# Use component

```
<v-pdf
  ref="pdf"
  :options="pdfOptions"
  :filename="exportFilename"
>
  <h2>HTML Table</h2>
  <table>
    <tr>
      <th>Company</th>
      <th>Contact</th>
      <th>Country</th>
    </tr>
    <tr>
      <td>Alfreds Futterkiste</td>
      <td>Maria Anders</td>
      <td>Germany</td>
    </tr>
    <tr>
      <td>Centro comercial Moctezuma</td>
      <td>Francisco Chang</td>
      <td>Mexico</td>
    </tr>
    <tr>
      <td>Ernst Handel</td>
      <td>Roland Mendel</td>
      <td>Austria</td>
    </tr>
    <tr>
      <td>Island Trading</td>
      <td>Helen Bennett</td>
      <td>UK</td>
    </tr>
    <tr>
      <td>Laughing Bacchus Winecellars</td>
      <td>Yoshi Tannamuri</td>
      <td>Canada</td>
    </tr>
    <tr>
      <td>Magazzini Alimentari Riuniti</td>
      <td>Giovanni Rovelli</td>
      <td>Italy</td>
    </tr>
  </table>

  <img src="base64 image or url">

  <!-- You can loop to display page number as you want -->
  <div class="html2pdf__page-number">1</div>

  <!-- Break page pdf -->
  <div class="html2pdf__page-break"></div>

</v-pdf>

...
// Props
pdfOptions = {
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
exportFilename: 'my-custom-file.pdf',

...

<style scoped>
table {
  font-size: 14px;
  text-align: center;
  border: 1px solid #ccc;
  border-collapse: collapse;
  th {
    background: #ddd;
    font-weight: bold;
  }
  td,
  th {
    padding: 8px;
    border: 1px solid #ccc;
  }
}
... Any other styles here

</style>
```

Call start download pdf with Options api

```
this.$refs.vue3SimpleHtml2pdf.download()
```

Call start download pdf with Composition api

```
const vue3SimpleHtml2pdf = ref(true)
const download = () => {
  vue3SimpleHtml2pdf.value.download()
}
```

To break page, use `html2pdf__page-break`

```
<div class="html2pdf__page-break"></div>
```

To add page number, use `html2pdf__page-number`

```
<div class="html2pdf__page-number">{{ pageNumber }}</div>
```
# License

The MIT License
