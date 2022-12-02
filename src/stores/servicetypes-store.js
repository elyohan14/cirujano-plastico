import { defineStore } from 'pinia'
import { api } from 'boot/axios'

export const useServiceTypesStore = defineStore('servicetypes', {
  state: () => ({
    types: [],
    typeRecord: {},
    service: {}
  }),
  getters: {
    // doubleCount: (state) => state.counter * 2
  },
  actions: {
    async getServiceTypes () {
      try {
        const data = await api.get('service_types')
        this.types = data.data
      } catch (error) {
        alert(error)
        console.log(error)
      }
    },
    async getServiceType (id) {
      try {
        const { data } = await api.get(`service_types/${id}`)
        this.typeRecord = data
      } catch (error) {
        alert(error)
        console.log(error)
      }
    },
    async getService (id) {
      try {
        const { data } = await api.get(`services/${id}`)
        this.service = data
      } catch (error) {
        alert(error)
        console.log(error)
      }
    }
  }
})
