import { defineStore } from 'pinia'

export const useServiceTypesStore = defineStore('servicetypes', {
  state: () => ({
    types: [
      {
        value: 1,
        label: 'Procedimientos Corporales',
        services: [
          {
            value: 1,
            label: 'Abdominoplastia',
            image: 'procedimientos_corporales/Rectangle 187.png'
          },
          {
            value: 2,
            label: 'Cambio de imagen para mamás',
            image: 'procedimientos_corporales/Rectangle 189.png'
          },
          {
            value: 3,
            label: 'Contorno corporal',
            image: 'procedimientos_corporales/Rectangle 191.png'
          },
          {
            value: 4,
            label: 'Cirugía de Ginecomastia',
            image: 'procedimientos_corporales/Rectangle 193.png'
          },
          {
            value: 5,
            label: 'Liposucción',
            image: 'procedimientos_corporales/Rectangle 195.png'
          },
          {
            value: 6,
            label: 'Liposucción Láser Asistida',
            image: 'procedimientos_corporales/Rectangle 197.png'
          },
          {
            value: 7,
            label: 'Depilación Láser',
            image: 'procedimientos_corporales/Rectangle 199.png'
          },
          {
            value: 8,
            label: 'Gluteoplastia',
            image: 'procedimientos_corporales/Rectangle 201.png'
          },
          {
            value: 9,
            label: 'Transplante de pelo',
            image: 'procedimientos_corporales/Rectangle 203.png'
          },
          {
            value: 10,
            label: 'Microdermabrasión',
            image: 'procedimientos_corporales/Rectangle 205.png'
          },
          {
            value: 11,
            label: 'Hombres y Cirugía Plástica',
            image: 'procedimientos_corporales/Rectangle 207.png'
          },
          {
            value: 12,
            label: 'Reducción de grasa no quirúrgica',
            image: 'procedimientos_corporales/Rectangle 209.png'
          },
          {
            value: 13,
            label: 'Rejuvenecimiento vaginal no quirúrgico ',
            image: 'procedimientos_corporales/Rectangle 211.png'
          },
          {
            value: 14,
            label: 'Rejuvenecimiento vaginal',
            image: 'procedimientos_corporales/Rectangle 213.png'
          },
          {
            value: 15,
            label: 'Escleroterapia',
            image: 'procedimientos_corporales/Rectangle 215.png'
          },
          {
            value: 16,
            label: 'Eliminación de tatuajes',
            image: 'procedimientos_corporales/Rectangle 217.png'
          }
        ]
      },
      {
        value: 2,
        label: 'Procedimientos Faciales',
        services: [
          {
            value: 1,
            label: 'Blefaroplastia',
            image: 'procedimientos_faciales/Rectangle 187.png'
          },
          {
            value: 2,
            label: 'Cirugía de mentón',
            image: 'procedimientos_faciales/Rectangle 189.png'
          },
          {
            value: 3,
            label: 'Dermoabrasión',
            image: 'procedimientos_faciales/Rectangle 191.png'
          },
          {
            value: 4,
            label: 'Exfoliación química',
            image: 'procedimientos_faciales/Rectangle 193.png'
          },
          {
            value: 5,
            label: 'Implantes faciales',
            image: 'procedimientos_faciales/Rectangle 195.png'
          },
          {
            value: 6,
            label: 'Toxina botulínica',
            image: 'procedimientos_faciales/Rectangle 197.png'
          },
          {
            value: 7,
            label: 'Eliminación de grasa bucal',
            image: 'procedimientos_faciales/Rectangle 199.png'
          },
          {
            value: 8,
            label: 'Otoplastia',
            image: 'procedimientos_faciales/Rectangle 201.png'
          },
          {
            value: 9,
            label: 'Procedimiento de cuidado de la piel',
            image: 'procedimientos_faciales/Rectangle 203.png'
          },
          {
            value: 10,
            label: 'Rejuvenecimiento de la piel',
            image: 'procedimientos_faciales/Rectangle 205.png'
          },
          {
            value: 11,
            label: 'Rinoplastia',
            image: 'procedimientos_faciales/Rectangle 207.png'
          },
          {
            value: 12,
            label: 'Ritidectomía',
            image: 'procedimientos_faciales/Rectangle 209.png'
          },
          {
            value: 13,
            label: 'Rellenos dérmicos',
            image: 'procedimientos_faciales/Rectangle 211.png'
          }
        ]
      },
      {
        value: 3,
        label: 'Procedimientos de Busto',
        services: [
          {
            value: 10,
            label: 'Aumento de senos',
            image: 'procedimientos_de_busto/Rectangle 187.png'
          },
          {
            value: 11,
            label: 'Revisión de implantes mamarios',
            image: 'procedimientos_de_busto/Rectangle 189.png'
          },
          {
            value: 12,
            label: 'Mastopexia',
            image: 'procedimientos_de_busto/Rectangle 191.png'
          },
          {
            value: 13,
            label: 'Mamoplastia de reducción',
            image: 'procedimientos_de_busto/Rectangle 193.png'
          }
        ]
      },
      {
        value: 4,
        label: 'Liftings',
        services: [
          {
            value: 10,
            label: 'Lifting de cejas',
            image: 'liftings/Rectangle 187.png'
          },
          {
            value: 11,
            label: 'Lifting de muslos',
            image: 'liftings/Rectangle 189.png'
          },
          {
            value: 12,
            label: 'Lifting de cuello',
            image: 'liftings/Rectangle 191.png'
          },
          {
            value: 13,
            label: 'Lifting corporal',
            image: 'liftings/Rectangle 193.png'
          },
          {
            value: 14,
            label: 'Lifting de brazos',
            image: 'liftings/Rectangle 195.png'
          }
        ]
      }
    ]
  }),
  getters: {
    // doubleCount: (state) => state.counter * 2
  },
  actions: {
    increment () {
      // this.counter++
    }
  }
})
