// Utilities
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    user: {
      gold: 1000,
      tanks: [],
    }
  }),
  actions: {
    checkBeforeBuy(tank): boolean {
      const tankCost = tank.cost
      if (this.user.gold > tankCost) {
        return true
      }
      return false
    },
    buyTank(tank) {
      if (this.checkBeforeBuy(tank)) {
        const userTank = this.user.tanks.find(userTank => userTank._id === tank._id)
        if (userTank) {
          userTank.count++
        } else {
          this.user.tanks.push({ _id: tank._id, count: 1 })
        }
        this.subtractUserGold(tank)
      }
    },
    subtractUserGold(tank) {
      this.user.gold = this.user.gold - tank.cost
    },
  }
})
