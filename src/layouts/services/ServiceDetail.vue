<template>
  <q-layout>
    <div class="q-mt-lg">
      <q-img :src="`${url}file/${service.image}`">
        <div
          class="q-pb-md absolute-bottom text-subtitle1 text-left text-bold"
          style="font-size: 40px; background: rgb(0 0 0 / 19%); line-height: 2rem;"
        >
          {{ service.name }}
        </div>
      </q-img>
    </div>
    <div class="q-mt-lg">
      <p class="q-pa-md text-grey">
        {{ service.description }}
      </p>
    </div>

    <div class="q-pa-md">
      <q-btn
        class="full-width"
        color="primary"
        label="Agendar cita"
        push
        no-caps
        to="/personal_information"
      />
    </div>

  </q-layout>
</template>
<script setup>
import { useServiceTypesStore } from 'stores/servicetypes-store'
import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'

// Store

const serviceTypesStore = useServiceTypesStore()

// Data

const route = useRoute()
const id = route.params.id
const url = process.env.BASEURL

// Computed
const service = computed(() => {
  return serviceTypesStore.service
})

// Mounted
onMounted(() => {
  serviceTypesStore.getService(id)
})
</script>
