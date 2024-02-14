import { defineStore } from 'pinia'
import axios from 'axios'

export const useTanksStore = defineStore('tanks', {
  state: () => ({
    filter: '',
    tanks: [],
    tankTypes: [
      {name: 'Лёгкие', icon: 'mdi-cards-diamond'},
      {name: 'Средние', icon: 'mdi-cards-diamond'},
      {name: 'Тяжелые', icon: 'mdi-cards-diamond'},
      {name: 'ПТ-САУ', icon: 'mdi-cards-diamond'},
      {name: 'САУ', icon: 'mdi-cards-diamond'},
    ],
  }),
  actions: {
    async getTanks() {
      const { data } = await axios.get('/tanks')
      this.tanks = data.data
    },
  }
})
