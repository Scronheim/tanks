// Utilities
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    user: {
      gold: 1000,
      tanks: [],
    }
  }),
})
