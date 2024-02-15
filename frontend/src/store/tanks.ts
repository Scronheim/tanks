import { defineStore } from 'pinia'
import axios from 'axios'

import { Tank } from '@/types/types'

export const useTanksStore = defineStore('tanks', {
  state: () => ({
    filter: <string> '',
    tanks: <Tank[]> [],
    tankTypes: [
      {name: 'Лёгкие', icon: '/images/lightTank.png'},
      {name: 'Средние', icon: '/images/mediumTank.png'},
      {name: 'Тяжелые', icon: '/images/heavyTank.png', angle: 90},
      {name: 'ПТ-САУ', icon: '/images/AT-SPG.png'},
      {name: 'САУ', icon: '/images/SPG.png'},
    ],
  }),
  actions: {
    async getTanks() {
      const { data } = await axios.get('/tanks')
      this.tanks = data.data
    },
  }
})
