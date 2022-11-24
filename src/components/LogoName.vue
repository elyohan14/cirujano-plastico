<template>
  <div
    class="row"
    style="text-align: center;"
  >
    <div class="col-12">
      <img
        alt="Quasar logo"
        src="~assets/logo.svg"
        style="width: 60px; height: 60px"
      >
    </div>
    <div class="col-12">
      <img
        class="q-pa-xs col-12"
        alt="Quasar logo"
        src="~assets/name.svg"
        style="width: 160px; height: 35px"
      >
    </div>

  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'LogoName',
  props: {
  }
})
</script>
