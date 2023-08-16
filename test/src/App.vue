<script setup>
import { ref } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
const pdf = ref()
const download = () => {
  pdf.value.download()
}
const options = {
  margin: 0,
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
}
</script>

<template>
  <v-pdf ref="pdf" :options="options">
    <div class="app">
      <div class="center">
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" class="logo" alt="Vite logo" />
        </a>
        <a href="https://vuejs.org/" target="_blank">
          <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
        </a>
      </div>
      <HelloWorld msg="Vite + Vue" />
    </div>
  </v-pdf>
  <button class="hanging-border" @click="download">download to PDF</button>
</template>

<style scoped>
.app {
  background-color: #242424;
  /* width: 100vw; */
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
.hanging-border {
  position: relative;
  border: 2px solid transparent;
  box-shadow: 0px 0px 0px 2px rgb(240, 144, 144);
}

button:hover {
  border-color: #646cff;
}
button:focus,
button:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}
</style>
