<template>
  <v-list-group>
    <template v-slot:activator="{ props }">
      <v-list-item v-bind="props" :title="title"></v-list-item>
    </template>
    <TankListItem v-for="tank in getTanks(country.name, typeNumber)" :key="tank.name" :tank="tank" />
  </v-list-group>
</template>

<script lang="ts">
import { PropType } from 'vue'
import { useTanksStore } from '@/store/tanks'
import { useUserStore } from '@/store/user'

import TankListItem from './TankListItem.vue'

import type { Country, Tank } from '@/types/types'

export default {
  setup() {
    const tanksStore = useTanksStore()
    const userStore = useUserStore()

    return { tanksStore, userStore }
  },
  props: {
    title: {
      type: String
    },
    typeNumber: {
      type: Number,
      default: 1,
    },
    country: {
      type: Object as PropType<Country>,
      required: true,
    }
  },
  methods: {
    getTanks(country: string, type: number) {
      const tanks = this.tanksStore.tanks.filter((tank: Tank) => {
        return tank.name.toUpperCase().indexOf(this.tanksStore.filter.toUpperCase()) >= 0
          && tank.country.name === country
          && tank.type === type
      })
      
      const result = []
      for (const tank of tanks) {
        if (this.userStore.user.tanks.some(t => t._id === tank._id)) {
          result.push(tank)
        }
      }
      return result
    },
  },
  components: { TankListItem }
}
</script>