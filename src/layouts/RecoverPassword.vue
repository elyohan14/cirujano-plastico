<template>
  <q-layout>
    <div class="row q-pa-md">
      <q-btn
        flat
        icon="arrow_back_ios"
        @click="router.back()"
      />
    </div>

    <div
      class="text-bold text-center"
      style="font-size: 22px"
    >Recuperar clave</div>
    <div class="q-pa-lg">
      <p class="title-grey text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi id ac feugiat id ac metus maecenas et. Tempus tempus eu ut blandit neque, ut lorem faucibus</p>
    </div>
    <div class="q-pl-lg q-pr-lg">
      <label class="text-black q-ml-sm">Correo electrónico</label>
      <q-input
        v-model="email"
        placeholder="correo@example.com"
        outlined
        dense
        push
      />
    </div>
    <div class="q-pa-lg">
      <q-btn
        class="full-width"
        color="primary"
        label="Obtener nueva clave"
        push
        no-caps
      />
    </div>
  </q-layout>
</template>
<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const email = ref('')
const router = useRouter()
</script>
