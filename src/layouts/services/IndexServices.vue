<template>
  <q-layout class="q-pa-md">
    <div
      class="text-h6 flex flex-center q-pt-lg text-primary"
      style="font-size: 1.15rem;"
    >{{ typeName }}</div>

    <q-card
      class="q-mt-md"
      v-for="item in services"
      :key="item.value"
    >
      <div
        clickable
        v-ripple
        class="row back"
      >
        <div class="col-3 q-ma-none">
          <q-img :src="getImageUrl(item.image)"></q-img>
        </div>
        <div class="col-9 q-pl-md q-pt-md text-primary">
          {{ item.label }}
        </div>
      </div>
    </q-card>
    <div
      v-if="!services.length"
      class="q-pt-lg text-primary text-center"
    >
      No hay servicios disponibles
    </div>
  </q-layout>
</template>
<script setup>
import { useRoute } from 'vue-router'
import { useServiceTypesStore } from 'stores/servicetypes-store'

const serviceTypesStore = useServiceTypesStore()
// Data

const route = useRoute()
const serviceTypes = serviceTypesStore.types
const type = route.params.type
const typeRecord = serviceTypes.find(val => val.value === +type)
const typeName = typeRecord.label
const services = typeRecord.services

// Methods
const getImageUrl = (path) => {
  return new URL(`../../assets/${path}`, import.meta.url).href
}

</script>
<style scoped>
.back {
  background-color: #f6f6f6;
}
</style>
