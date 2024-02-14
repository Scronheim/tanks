<template>
  <v-card>
    <v-card-text>
      <v-tabs v-model="tab">
        <v-tab v-for="country in appStore.countries" :value="country.name" :prependIcon="country.icon">
          {{ country.name }}
        </v-tab>
      </v-tabs>
      <v-window v-model="tab">
        <v-window-item value="СССР">
          <v-table>
            <thead>
              <tr>
                <th v-for="item in 10" class="text-center">
                  <v-icon :icon="`mdi-roman-numeral-${item}`" size="35" />
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colspan="4"></td>
                <td>
                  <TankButtonSearch tankName="СУ-122А" />
                </td>
                <td>
                  <TankButtonSearch tankName="СУ-8" />
                </td>
                <td>С-51</td>
                <td>СУ-14-2</td>
                <td>212А</td>
                <td>Об. 261</td>
              </tr>
              <tr>
                <td colspan="6"></td>
                <td><TankButtonSearch tankName="СУ-100М1" /></td>
                <td>СУ-101</td>
                <td>Об. 263</td>
                <td>Об. 268/4</td>
              </tr>
              <tr>
                <td colspan="4"></td>
                <td>СУ-85</td>
                <td>СУ-100</td>
                <td>СУ-152</td>
                <td>ИСУ-152</td>
                <td>Об. 704</td>
                <td>Об. 268</td>
              </tr>
              <tr>
                <td colspan="5"></td>
                <td>КВ-2</td>
                <td colspan="2"></td>
                <td>Т-10</td>
                <td>Об. 277</td>
              </tr>
              <tr>
                <td>
                  <TankButtonSearch tankName="МС-1" />
                </td>
                <td>
                  <TankButtonSearch tankName="БТ-2" />
                </td>
                <td>
                  <TankButtonSearch tankName="БТ-5" />
                </td>
                <td>
                  <TankButtonSearch tankName="Т-28" />
                </td>
                <td>
                  <TankButtonSearch tankName="КВ-1" />
                </td>
                <td>
                  <TankButtonSearch tankName="КВ-1С" />
                </td>
                <td>
                  <TankButtonSearch tankName="ИС" />
                </td>
                <td>
                  <TankButtonSearch tankName="ИС-3" />
                </td>
                <td>
                  <TankButtonSearch tankName="Об. 257" />
                </td>
                <td>
                  <TankButtonSearch tankName="ИС-7" />
                </td>
              </tr>
              <tr>
                <td colspan="7"></td>
                <td>ИС-М</td>
                <td>Об. 705</td>
                <td>Об. 705А</td>
              </tr>
              <tr>
                <td colspan="5"></td>
                <td>Т-150</td>
                <td>КВ-3</td>
                <td>КВ-4</td>
                <td>СТ-I</td>
                <td>ИС-4</td>
              </tr>
              <tr>
                <td colspan="7"></td>
                <td>ИС-2-II</td>
                <td>ИС-3-II</td>
                <td>СТ-II</td>
              </tr>
              <tr>
                <td colspan="8"></td>
                <td>Об. 430</td>
                <td>Об. 430У</td>
              </tr>
              <tr>
                <td colspan="3"></td>
                <td>БТ-7</td>
                <td>Т-34</td>
                <td>Т-34-85</td>
                <td>Т-43</td>
                <td>Т-44</td>
                <td>Т-54</td>
                <td>Об. 140</td>
              </tr>
              <tr>
                <td colspan="5"></td>
                <td>А-43</td>
                <td>А-44</td>
                <td>Об. 416</td>
                <td>Об. 430 II</td>
                <td>К-91</td>
              </tr>
              <tr>
                <td colspan="4"></td>
                <td>А-20</td>
                <td>МТ-25</td>
                <td>ЛТГ</td>
                <td>ЛТТБ</td>
                <td>Т-54 обл.</td>
                <td>Т-100 ЛТ</td>
              </tr>
            </tbody>
          </v-table>
        </v-window-item>
      </v-window>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { useAppStore } from '@/store/app'
import { useTanksStore } from '@/store/tanks'

import TankButton from '@/components/buttons/TankButton.vue'
import TankButtonSearch from '@/components/buttons/TankButtonSearch.vue'

export default {
  setup() {
    const appStore = useAppStore()
    const tankStore = useTanksStore()

    return { appStore, tankStore }
  },
  computed: {

  },
  data() {
    return {
      tab: '',
      firstSteps: ['Выбор страны', 'Выбор первого танка'],
    }
  },
  methods: {

  },
  components: { TankButton, TankButtonSearch }
}
</script>

<style scoped></style>