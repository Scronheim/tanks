import { defineStore } from 'pinia'
import axios from 'axios'

import { Tank } from '@/types/types'

export const useTanksStore = defineStore('tanks', {
  state: () => ({
    filter: <string> '',
    tanks: <Tank[]> [],
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
