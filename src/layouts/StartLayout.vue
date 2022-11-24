<template>
  <q-layout class="flex flex-center">
    <q-img
      class="full-width"
      src="~assets/andresrivera-bg2 1.svg"
      style="max-width: 360px; margin-top: -13px;"
      fit="cover"
    ></q-img>
    <LogoName />
    <!-- <div
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

    </div> -->
    <div>
      <q-btn
        class="full-width"
        color="primary"
        label="Agenda Preconsulta"
        push
        no-caps
      />
      <q-btn
        class="full-width q-mt-xs"
        color="secondary"
        text-color="primary"
        label="Iniciar Sesión"
        push
        no-caps
      />
    </div>

  </q-layout>

</template>
<script setup>
import LogoName from 'components/LogoName.vue'
</script>
