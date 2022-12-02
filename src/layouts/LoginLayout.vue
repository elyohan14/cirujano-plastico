<template>
  <q-layout style="height: 100vh;">
    <CoverDoctor />
    <q-card
      class="q-pa-lg"
      style="border-radius: 25px 25px 0px 0px;position: relative; top: -60px;"
    >
      <div
        class="title-grey text-center text-bold"
        style="font-size: 20px"
      >Iniciar sesión</div>
      <div>
        <div class="q-pb-md">
          <label class="text-black q-ml-sm">Cédula</label>
          <q-input
            v-model="form.identificationNumber"
            placeholder="123456789101112"
            outlined
            dense
            push
          />
        </div>

        <div class="q-pb-md">
          <label class="text-black q-ml-sm">Clave</label>
          <q-input
            type="password"
            v-model="form.password"
            placeholder="****"
            outlined
            dense
            push
          />
        </div>

        <div class="row q-pb-lg">
          <div class="col-8 text-primary">
            <q-checkbox
              v-model="remember"
              size="xs"
            />
            Recuérdame
          </div>
          <div
            class="col-4 text-primary text-right q-pt-xs"
            @click="router.push('recover_password')"
          >
            Olvidé mi clave
          </div>
        </div>

        <div>
          <q-btn
            class="full-width"
            color="primary"
            label="Iniciar sesión"
            push
            no-caps
            @click="submit"
          />
        </div>
      </div>
    </q-card>
  </q-layout>
</template>
<script setup>
import CoverDoctor from 'components/CoverDoctor.vue'
import { reactive, ref } from 'vue'
import { useQuasar } from 'quasar'
import { useVuelidate } from '@vuelidate/core'
import { required, numeric } from '@vuelidate/validators'
import { useRouter } from 'vue-router'

// Data

const $q = useQuasar()
const router = useRouter()
const form = reactive({
  identificationNumber: $q.localStorage.getItem('identificationNumber') || '', //
  password: ''
})
const formRules = {
  identificationNumber: { required, numeric },
  password: { required }
}
const v$ = useVuelidate(formRules, form)
const remember = ref(false)

// Methods

const submit = async () => {
  const isFormCorrect = await v$.value.$validate()

  if (!isFormCorrect) {
    $q.dialog({
      title: 'Alerta',
      message: 'Debes completar todos los campos'
    })
    return
  }

  $q.localStorage.set('identificationNumber', form.identificationNumber)
  router.replace('menu')
}
</script>
