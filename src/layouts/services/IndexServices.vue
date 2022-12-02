<template>
  <q-layout class="q-pa-md">
    <div
      class="text-h6 flex flex-center q-pt-lg text-primary"
      style="font-size: 1.15rem;"
    >{{ typeRecord.name }}</div>

    <q-card
      class="q-mt-md"
      v-for="item in typeRecord.services"
      :key="item.id"
    >
      <div
        clickable
        v-ripple
        class="row back"
        @click="goToDetails(item.id)"
      >
        <div class="col-3 q-ma-none">
          <q-img :src="getImageUrl(item.image)"></q-img>
        </div>
        <div class="col-9 q-pl-md q-pt-md text-primary">
          {{ item.name }}
        </div>
      </div>
    </q-card>
    <div
      v-if="typeRecord.services && !typeRecord.services.length"
      class="q-pt-lg text-primary text-center"
    >
      No hay servicios disponibles
    </div>
  </q-layout>
</template>
<script setup>
import { useRoute, useRouter } from 'vue-router'
import { useServiceTypesStore } from 'stores/servicetypes-store'
import { computed, onMounted } from 'vue'

// Store

const serviceTypesStore = useServiceTypesStore()

// Data

const route = useRoute()
const router = useRouter()
const type = route.params.type
const url = process.env.BASEURL

// Computed
const typeRecord = computed(() => {
  return serviceTypesStore.typeRecord
})

// Mounted
onMounted(() => {
  serviceTypesStore.getServiceType(type)
})

// Methods
const getImageUrl = (image) => {
  return image ? `${url}file/${image}` : 'https://placeimg.com/500/300/nature'
}

const goToDetails = (id) => {
  router.push(`/services/${id}/detail`)
}

</script>
<style scoped>
.back {
  background-color: #f6f6f6;
}
</style>
