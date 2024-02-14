<template>
  <v-menu v-model="menu" :close-on-content-click="false" location="end">
    <template v-slot:activator="{ props }">
      <v-btn v-bind="props" nav link :title="searchedTank.name">
        <template #default>
          {{ searchedTank.name }}
        </template>
        <template #prepend>
          <v-avatar>
            <v-img :src="searchedTank.image" cover />
          </v-avatar>
        </template>
        <template #append>
          <v-icon :icon="tankLevelIcon" size="15" />
          <v-icon :icon="tankTypeIcon" size="10" />
        </template>
      </v-btn>
    </template>
    <v-card maxWidth="500">
      <v-card-title>Описание танка {{ searchedTank.name }}</v-card-title>
      <v-card-subtitle>
        <v-icon :icon="tankLevelIcon" size="25" />
        <v-icon :icon="tankTypeIcon" size="12" />
        
        <v-icon icon="mdi-star" size="10" /><span class="text-green pa-1">{{ searchedTank.unlockExp }}</span>
        <v-icon icon="mdi-currency-rub" size="10" /><span class="text-yellow pa-1">{{ searchedTank.cost }}</span>
      </v-card-subtitle>
      <v-card-text>{{ searchedTank.description }}</v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn color="success">Исследовать</v-btn>
        <v-btn color="yellow">Купить</v-btn>
      </v-card-actions>
    </v-card>
  </v-menu>
</template>

<script lang="ts">
import { useTanksStore } from '@/store/tanks'

export default {
  setup() {
    const tanksStore = useTanksStore()

    return { tanksStore }
  },
  props: {
    tankName: {
      type: String,
      required: true,
      default: '',
    }
  },
  computed: {
    searchedTank() {
      return this.tanksStore.tanks.find(tank => tank.name === this.tankName) || this.defaultTank
    },
    tankLevelIcon() {
      return `mdi-roman-numeral-${this.searchedTank.level}`
    },
    tankTypeIcon() {
      return this.tanksStore.tankTypes[this.searchedTank.type - 1].icon
    }
  },
  data() {
    return {
      menu: false,
      defaultTank: {
        type: 1,
        icon: '',
        name: '',
        image: '',
        description: '',
        unlockExp: 0,
        cost: 0,
      }
    }
  }
}
</script>