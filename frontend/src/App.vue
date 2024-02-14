<template>
  <v-app>
    <v-navigation-drawer v-model="menuDrawerState">
      <v-list nav>
        <v-list-item>
          <template #prepend>
            <v-avatar color="green">
              <span class="text-h5">SC</span>
            </v-avatar>
          </template>
          <v-list-item-title class="text-h6">Scronheim</v-list-item-title>
          <template #append>
            <v-btn color="yellow" size="x-small">{{ userStore.user.gold }}<v-icon icon="mdi-currency-rub"/></v-btn>
          </template>
        </v-list-item>
        <v-divider class="ma-3" />
        <v-text-field label="Фильтр" v-model="tanksStore.filter" />
        <template v-for="country in appStore.countries" :key="country.name">
          <country-list-item :country="country" />
          <v-divider />
          <tank-type-group title="Легкие" :typeNumber="1" :country="country" />
          <tank-type-group title="Средние" :typeNumber="2" :country="country" />
          <tank-type-group title="Тяжёлые" :typeNumber="3" :country="country" />
          <v-divider />
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <RouterView/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { useTanksStore } from '@/store/tanks'
import { useUserStore } from '@/store/user'
import { useAppStore } from '@/store/app'

import CountryListItem from '@/components/leftMenu/CountryListItem.vue'
import TankTypeGroup from '@/components/leftMenu/TankTypeGroup.vue'

export default {
  setup() {
    const appStore = useAppStore()
    const userStore = useUserStore()
    const tanksStore = useTanksStore()

    return { appStore, userStore, tanksStore }
  },
  data() {
    return {
      menuDrawerState: true,
    }
  },
  mounted() {
    this.appStore.getCountries()
    this.tanksStore.getTanks()
  },
  components: { CountryListItem, TankTypeGroup },
}
</script>
