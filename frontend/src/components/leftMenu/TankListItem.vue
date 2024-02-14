<template>
  <v-list-item :title="tank.name" class="pa-0" @click="buyTank(tank)">
    <template #prepend>
      <v-avatar>
        <v-img :src="tank.image" cover />
      </v-avatar>
    </template>
    <template #append>
      <v-icon :icon="`mdi-roman-numeral-${tank.level}`" />
      <v-chip color="blue">{{ getTankCount(tank).count }}</v-chip>
      <v-chip class="ml-2" color="yellow">{{ tank.cost }}<v-icon icon="mdi-currency-rub" size="13" /></v-chip>
    </template>
  </v-list-item>
</template>

<script lang="ts">
import { useTanksStore } from '@/store/tanks';
import { useUserStore } from '@/store/user';

export default {
  setup() {
    const tanksStore = useTanksStore()
    const userStore = useUserStore()

    return { tanksStore, userStore }
  },
  props: {
    tank: {
      type: Object,
    }
  },
  methods: {
    subtractUserGold(tank) {
      this.userStore.user.gold = this.userStore.user.gold - tank.cost
    },
    checkBeforeBuy(tank): boolean {
      const tankCost = tank.cost
      if (this.userStore.user.gold > tankCost) {
        return true
      }
      return false
    },
    buyTank(tank) {
      if (this.checkBeforeBuy(tank)) {
        const userTank = this.userStore.user.tanks.find(userTank => userTank.image === tank.image)
        if (userTank) {
          userTank.count++
        } else {
          this.userStore.user.tanks.push({ image: tank.image, count: 1 })
        }
        this.subtractUserGold(tank)
      }
    },
    getTankCount(tank): number {
      return this.userStore.user.tanks.find(userTank => userTank.image === tank.image) || { count: 0 };
    },
  }
}
</script>

<style scoped>
.v-list-group__items .v-list-item {
  padding-inline-start: 0 !important;
}
</style>