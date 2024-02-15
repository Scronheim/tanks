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
          <v-img :src="tankTypeIcon" width="15" cover />
        </template>
      </v-btn>
    </template>
    <v-card maxWidth="500">
      <v-card-title>Описание танка {{ searchedTank.name }}</v-card-title>
      <v-card-subtitle>
        <v-row>
          <v-col cols="1">
            <v-icon :icon="tankLevelIcon" size="25" />
          </v-col>
          <v-col>
            <v-img :src="tankTypeIcon" width="20" height="25" />
          </v-col>
        </v-row>

        <v-icon icon="mdi-star" size="10" class="pb-1" /><span class="text-green pa-1">{{ searchedTank.unlockExp }}</span>
        <span class="text-yellow pa-1">{{ formattedCost }}</span>
      </v-card-subtitle>
      <v-card-text>
        <p>{{ searchedTank.description }}</p>
        <TurretIcon />
        <RadioIcon />
        <EngineIcon />
        <SuspensionIcon />
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn color="success">Исследовать</v-btn>
        <v-btn color="yellow" :disabled="buyIsDisabled" @click="buyTank">Купить</v-btn>
      </v-card-actions>
    </v-card>
  </v-menu>
</template>

<script lang="ts">
import { useTanksStore } from '@/store/tanks'
import { useUserStore } from '@/store/user'

import TurretIcon from './TurretIcon.vue'
import EngineIcon from './EngineIcon.vue'
import RadioIcon from './RadioIcon.vue'
import SuspensionIcon from './SuspensionIcon.vue'

import { Tank } from '@/types/types'

export default {
  setup() {
    const tanksStore = useTanksStore()
    const userStore = useUserStore()

    return { tanksStore, userStore }
  },
  props: {
    tankName: {
      type: String,
      required: true,
      default: '',
    }
  },
  computed: {
    formattedCost(): string {
      const formatter = new Intl.NumberFormat('ru-RU', {
        style: 'currency',
        currency: 'rub',
        maximumFractionDigits: 0,
      })

      return formatter.format(this.searchedTank.cost)
    },
    buyIsDisabled(): boolean {
      return this.userStore.user.gold < this.searchedTank.cost
    },
    searchedTank(): Tank {
      return this.tanksStore.tanks.find(tank => tank.name === this.tankName) || this.defaultTank
    },
    tankLevelIcon(): string {
      return `mdi-roman-numeral-${this.searchedTank.level}`
    },
    tankTypeIcon(): string {
      return this.tanksStore.tankTypes[this.searchedTank.type - 1].icon
    }
  },
  data() {
    return {
      menu: <boolean>false,
      defaultTank: <Tank>{
        _id: '',
        country: { name: '', icon: '' },
        level: 1,
        type: 1,
        icon: '',
        name: '',
        image: '',
        description: '',
        unlockExp: 0,
        cost: 0,
      }
    }
  },
  methods: {
    buyTank(): void {
      this.userStore.buyTank(this.searchedTank)
    }
  },
  components: { TurretIcon, EngineIcon, RadioIcon, SuspensionIcon }
}
</script>

<style scope>
.rotateTypeIcon {
  rotate: 140deg;
}
</style>