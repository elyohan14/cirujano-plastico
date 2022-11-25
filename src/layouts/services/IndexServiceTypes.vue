<template>
  <q-layout class="q-pa-md">
    <LogoName class="q-pt-xl" />

    <div class="text-h6 flex flex-center q-pt-lg grey">Nuestros Procedimientos</div>
    <q-separator
      color="black"
      inset
    />

    <p class="q-pt-xl grey text-center">Contamos con un amplio portafolio de procedimientos estéticos realizados con las mejores tecnologías para garantizar a nuestros pacientes resultados satisfactorios y profesionales</p>

    <div
      class="q-mb-md"
      v-for="(item, key) in buttons"
      :key="key"
    >
      <q-btn
        class="full-width"
        :label="item.label"
        color="rose"
        text-color="primary"
        :to="`services/${item.value}`"
        no-caps
        push
      />
    </div>

  </q-layout>
</template>
<script setup>
import LogoName from 'components/LogoName.vue'
import { useServiceTypesStore } from 'stores/servicetypes-store'

const serviceTypesStore = useServiceTypesStore()

// Data

const buttons = serviceTypesStore.types
</script>
<style>
.grey {
  color: #717171;
}
</style>
