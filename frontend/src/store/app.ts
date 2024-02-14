import axios from 'axios'
import { defineStore } from 'pinia'

import { Country } from '@/types/types'

export const useAppStore = defineStore('app', {
  state: () => ({
    countries: <Country[]> [],
  }),
  actions: {
    async getCountries() {
      const { data } = await axios.get('/countries')
      this.countries = data.data
    }
  }
})
