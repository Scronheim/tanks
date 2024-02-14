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
      <v-card-text>
        <p>{{ searchedTank.description }}</p>
        <TurretIcon/>
        <RadioIcon/>
        <EngineIcon/>
        <SuspensionIcon/>
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
    buyIsDisabled() {
      return this.userStore.user.gold < this.searchedTank.cost
    },
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
  },
  methods: {
    buyTank() {
      this.userStore.buyTank(this.searchedTank)
    }
  },
  components: { TurretIcon, EngineIcon, RadioIcon, SuspensionIcon }
}
</script>