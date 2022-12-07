import { defineStore } from 'pinia'
import { api } from 'boot/axios'
import { LocalStorage, Dialog } from 'quasar'

export const useLoginStore = defineStore('counter', {
  state: () => ({
    token: null
  }),

  getters: {
  },

  actions: {
    async login (form) {
      try {
        const { data } = await api.post('/login', form)
        this.token = data.token
        LocalStorage.set('token', data.token)
        this.router.push('/menu')
      } catch (error) {
        console.log(error.response.status)
        if (error.response.status === 401) {
          console.log(error.response.data)
          Dialog.create({
            title: 'Error',
            message: 'Datos incorrectos'
          })
        }
      }
    },
    async recoverPassword (form) {
      try {
        const { data } = await api.post('/recover-password', form)
        console.log(data)
        Dialog.create({
          title: 'Exito',
          message: 'Se ha enviado un correo con las instrucciones para recuperar su contraseña'
        }).onOk(() => {
          this.router.push('/login')
        })
      } catch (error) {
        console.log({ error })
        Dialog.create({
          title: 'Error',
          message: error.response.data.message
        })
      }
    }
  }
})
