import { defineStore } from 'pinia'
import axios from 'axios'

export const useTanksStore = defineStore('tanks', {
  state: () => ({
    filter: '',
    tanks: [],
  }),
  actions: {
    async getTanks() {
      const { data } = await axios.get('/tanks')
      this.tanks = data.data
    },
  }
})
