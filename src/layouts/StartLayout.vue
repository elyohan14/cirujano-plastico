<template>
  <q-layout class="flex flex-center">
    <CoverDoctor />
    <LogoName />
    <div>
      <q-btn
        class="full-width"
        color="primary"
        label="Agenda Preconsulta"
        push
        no-caps
        to="/service_types"
      />
      <q-btn
        class="full-width q-mt-xs"
        color="secondary"
        text-color="primary"
        label="Iniciar Sesión"
        push
        no-caps
        to="/login"
      />
    </div>

  </q-layout>

</template>
<script setup>
import LogoName from 'components/LogoName.vue'
import CoverDoctor from 'components/CoverDoctor.vue'
</script>
