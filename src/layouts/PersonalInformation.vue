<template>
  <q-layout>
    <div class="text-h6 flex flex-center q-pt-lg grey">Datos generales</div>
    <div class="q-pa-lg">
      <div class="q-pa-xs">
        <label class="grey">Nombre completo</label>
        <q-input
          v-model="form.fullname"
          outlined
          dense
          @blur="v$.fullname.$touch"
          :error="v$.fullname.$error"
          error-message="Campo obligatorio"
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
          v-model="form.identityNumber"
          outlined
          dense
          @blur="v$.identityNumber.$touch"
          :error="v$.identityNumber.$error"
          error-message="Campo obligatorio"
        />
      </div>
      <div class="q-pa-xs">
        <label class="grey">Teléfono</label>
        <q-input
          v-model="form.phone"
          outlined
          dense
          @blur="v$.phone.$touch"
          :error="v$.phone.$error"
          error-message="Campo obligatorio"
        />
      </div>
      <div class="q-pa-xs">
        <label class="grey">Correo electrónico</label>
        <q-input
          v-model="form.email"
          outlined
          dense
          @blur="v$.email.$touch"
          :error="v$.email.$error"
          error-message="Campo obligatorio"
        />
      </div>
      <div class="q-pa-xs">
        <label class="grey">Ciudad</label>
        <q-input
          v-model="form.city"
          outlined
          dense
          @blur="v$.city.$touch"
          :error="v$.city.$error"
          error-message="Campo obligatorio"
        />
      </div>
      <div class="q-pa-xs">
        <label class="grey">Edad</label>
        <q-input
          v-model="form.age"
          outlined
          dense
          @blur="v$.age.$touch"
          :error="v$.age.$error"
          error-message="Campo obligatorio"
        />
      </div>
      <div class="q-pa-xs">
        <label class="grey">Género</label>
        <q-select
          v-model="form.gender"
          outlined
          dense
          @blur="v$.gender.$touch"
          :error="v$.gender.$error"
          error-message="Campo obligatorio"
          :options="genders"
          emit-value
          map-options
        />
      </div>

      <div class="q-pa-xs q-mt-md">
        <q-btn
          class="full-width"
          color="primary"
          label="Continuar"
          push
          no-caps
          @click="submit"
        />
      </div>

    </div>
  </q-layout>
</template>
<script setup>
import { reactive, ref } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { required, email, minLength, maxLength, numeric, minValue, maxValue } from '@vuelidate/validators'
import { useRouter } from 'vue-router'
import { useQuasar } from 'quasar'

const router = useRouter()
const $q = useQuasar()

const identity = ref('CC')
const identityOptions = ref([
  {
    label: 'CC',
    value: 'CC'
  }
])
const genders = reactive([
  {
    label: 'Masculino',
    value: 'M'
  },
  {
    label: 'Femenino',
    value: 'F'
  }
])

const form = reactive({
  fullname: '',
  identityNumber: '',
  phone: '',
  email: '',
  city: '',
  age: '',
  gender: 'M'
})

const formRules = {
  fullname: { required, minLength: minLength(4), maxLength: maxLength(50) },
  identityNumber: { required, numeric },
  phone: { required, numeric, minLength: minLength(7), maxLength: maxLength(14) },
  email: { required, email },
  city: { required, minLength: minLength(2), maxLength: maxLength(50) },
  age: { required, numeric, minValue: minValue(18), maxValue: maxValue(100) },
  gender: { required }
}

const v$ = useVuelidate(formRules, form)

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

  // Guardar los datos para enviarlos después que el pago sea aprobado
  router.push('payment_process')
}
</script>
<style>
.grey {
  color: #717171;
}
.q-field--outlined .q-field__control {
  border-radius: 10px;
}
</style>
