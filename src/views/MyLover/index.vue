<template lang="pug">

</template>

<script>
import Vue from 'vue'
import 'swiper/dist/css/swiper.css'

import images from './images.json'
if (process.browser) {
  const VueAwesomeSwiper = require('vue-awesome-swiper/dist/ssr')
  Vue.use(VueAwesomeSwiper)
}
export default {
  name: 'Lover',
  components: {
  
  },
  data() {
    return {
     ceshi:'ceshi'

    }
  },
  mounted() {

  },
  methods: {
  }
}
</script>

<style lang="stylus">
@import './common/css/main.styl'

</style>
