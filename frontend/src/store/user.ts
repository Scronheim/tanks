import { defineStore } from 'pinia'

import { Tank, UserTank } from '@/types/types'

export const useUserStore = defineStore('user', {
  state: () => ({
    user: {
      gold: <number> 1000,
      tanks: <UserTank[]> [],
    }
  }),
  actions: {
    checkBeforeBuy(tank: Tank): boolean {
      const tankCost = tank.cost
      if (this.user.gold > tankCost) {
        return true
      }
      return false
    },
    buyTank(tank: Tank) {
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
    subtractUserGold(tank: Tank) {
      this.user.gold = this.user.gold - tank.cost
    },
  }
})
