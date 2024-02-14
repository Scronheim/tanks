<template>
  <v-row>
    <v-col cols="2">
      <v-list nav>
        <v-list-item>
          <template #prepend>
            <v-avatar color="green">
              <span class="text-h5">SC</span>
            </v-avatar>
          </template>
          <v-list-item-title class="text-h6">Scronheim</v-list-item-title>
          <template #append>
            <v-btn color="yellow">{{ userStore.user.gold }}<v-icon icon="mdi-currency-rub"/></v-btn>
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
    </v-col>
    <v-col>
      123
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { useTanksStore } from '@/store/tanks'
import { useUserStore } from '@/store/user'

import CountryListItem from '@/components/leftMenu/CountryListItem.vue'
import TankTypeGroup from '@/components/leftMenu/TankTypeGroup.vue'
import { useAppStore } from '@/store/app'

export default {
  setup() {
    const appStore = useAppStore()
    const userStore = useUserStore()
    const tanksStore = useTanksStore()

    return { appStore, userStore, tanksStore }
  },
  data() {
    return {
      open: [],
      countries: [
        { name: 'СССР', icon: 'mdi-hammer-sickle' },
        { name: 'Германия', icon: 'mdi-fullscreen-exit' },
      ],
    };
  },
  methods: {
  },
  components: { CountryListItem, TankTypeGroup },
  mounted() {
    this.appStore.getCountries()
    this.tanksStore.getTanks()
  },
}
</script>

<style scoped></style>