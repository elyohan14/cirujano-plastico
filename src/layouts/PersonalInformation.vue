<template>
  <q-layout>
    <div class="text-h6 flex flex-center q-pt-lg grey">Datos generales</div>
    <div class="q-pa-lg">
      <div class="q-pa-xs">
        <label class="grey">Nombre completo</label>
        <q-input
          v-model="fullname"
          outlined
          dense
        />
      </div>
      <div class="q-pa-xs row">
        <label class="col-12 grey">Documento de identidad</label>
        <q-select
          class="col-2"
          v-model="identity"
          :options="identityOptions"
          outlined
          dense
        />
        <q-input
          class="col-10"
          v-model="identityNumber"
          outlined
          dense
        />
      </div>
      <div class="q-pa-xs">
        <label class="grey">Teléfono</label>
        <q-input
          v-model="phone"
          outlined
          dense
        />
      </div>
      <div class="q-pa-xs">
        <label class="grey">Correo electrónico</label>
        <q-input
          v-model="email"
          outlined
          dense
        />
      </div>
      <div class="q-pa-xs">
        <label class="grey">Ciudad</label>
        <q-input
          v-model="city"
          outlined
          dense
        />
      </div>
      <div class="q-pa-xs">
        <label class="grey">Edad</label>
        <q-input
          v-model="age"
          outlined
          dense
        />
      </div>
      <div class="q-pa-xs">
        <label class="grey">Género</label>
        <q-input
          v-model="gender"
          outlined
          dense
        />
      </div>

      <div class="q-pa-xs q-mt-md">
        <q-btn
          class="full-width"
          color="primary"
          label="Continuar"
          push
          no-caps
          to="/payment"
        />
      </div>

    </div>
  </q-layout>
</template>
<script setup>
import { ref } from 'vue'

const identity = ref('CC')
const identityOptions = ref([
  {
    label: 'CC',
    value: 'CC'
  }
])
</script>
<style>
.grey {
  color: #717171;
}
.q-field--outlined .q-field__control {
  border-radius: 10px;
}
</style>
