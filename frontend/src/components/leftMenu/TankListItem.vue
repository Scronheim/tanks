<template>
  <v-list-item link :title="tank.name" class="pa-0">
    <template #prepend>
      <v-avatar>
        <v-img :src="tank.image" cover />
      </v-avatar>
    </template>
    <template #append>
      <v-icon :icon="`mdi-roman-numeral-${tank.level}`" />
      <v-chip color="blue">{{ getTankCount(tank).count }}</v-chip>
    </template>
  </v-list-item>
</template>

<script lang="ts">
import { PropType } from 'vue'

import { useTanksStore } from '@/store/tanks'
import { useUserStore } from '@/store/user'

import type { Tank } from '@/types/types'

export default {
  setup() {
    const tanksStore = useTanksStore()
    const userStore = useUserStore()

    return { tanksStore, userStore }
  },
  props: {
    tank: {
      type: Object as PropType<Tank>,
        required: true,
    }
  },
  methods: {
    getTankCount(tank: Tank): {count: number} {
      return this.userStore.user.tanks.find(userTank => userTank._id === tank._id) || { count: 0 };
    },
  }
}
</script>

<style scoped>
.v-list-group__items .v-list-item {
  padding-inline-start: 0 !important;
}
</style>