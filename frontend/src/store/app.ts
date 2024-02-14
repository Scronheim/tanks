import axios from 'axios'
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    countries: [],
  }),
  actions: {
    async getCountries() {
      const { data } = await axios.get('/countries')
      this.countries = data.data
    }
  }
})
