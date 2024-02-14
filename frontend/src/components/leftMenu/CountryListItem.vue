<template>
  <v-list-item :title="country.name">
    <template #prepend>
      <v-icon :icon="country.icon" />
    </template>
  </v-list-item>
</template>

<script lang="ts">
export default {
  props: {
    country: {
      type: Object,
    }
  }
}
</script>