<template>
  <q-layout class="q-pa-md">
    <LogoName class="q-pt-xl" />

    <div class="text-h6 flex flex-center q-pt-lg title-grey">Nuestros Procedimientos</div>
    <q-separator
      color="black"
      inset
    />

    <p class="q-pt-xl title-grey text-center">Contamos con un amplio portafolio de procedimientos estéticos realizados con las mejores tecnologías para garantizar a nuestros pacientes resultados satisfactorios y profesionales</p>

    <div
      class="q-mb-md"
      v-for="(item, key) in buttons"
      :key="key"
    >
      <q-btn
        class="full-width"
        :label="item.name"
        color="rose"
        text-color="primary"
        :to="`services/${item.id}`"
        no-caps
        push
      />
    </div>

  </q-layout>
</template>
<script setup>
import LogoName from 'components/LogoName.vue'
import { useServiceTypesStore } from 'stores/servicetypes-store'
import { onMounted, computed } from 'vue'

const serviceTypesStore = useServiceTypesStore()

// Data

// Computed
const buttons = computed(() => {
  return serviceTypesStore.types
})

// Mounted
onMounted(() => {
  serviceTypesStore.getServiceTypes()
})

</script>
