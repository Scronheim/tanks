<template>
  <v-list-item maxWidth="170" class="pa-0" nav link :title="tank.name">
    <template #subtitle>
      <v-icon icon="mdi-star" size="10"/><span class="text-green">{{ tank.unlockExp }}</span>
      /
      <v-icon icon="mdi-currency-rub" size="10"/><span class="text-yellow">{{ tank.cost }}</span>
    </template>
    <template #prepend>
      <v-avatar>
        <v-img :src="tank.image" cover />
      </v-avatar>
    </template>
    <template #append>
      <v-icon :icon="tankTypeIcon" size="10"/>
      <v-icon :icon="tankLevelIcon" size="15"/>
    </template>
  </v-list-item>
</template>

<script lang="ts">
import { useTanksStore } from '@/store/tanks'

export default {
  setup() {
      const tanksStore = useTanksStore()

      return { tanksStore }
  },
  props: {
    tank: {
      type: Object,
      required: true,
      default: () => ({
        type: 1,
      })
    }
  },
  computed: {
    tankLevelIcon() {
      return `mdi-roman-numeral-${this.tank.level}`
    },
    tankTypeIcon() {
      return this.tanksStore.tankTypes[this.tank.type - 1].icon
    }
  }
}
</script>