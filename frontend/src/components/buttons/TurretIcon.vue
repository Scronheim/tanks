<template>
  <v-avatar :size="size">
    <v-img src="/images/modules/Ico_turret_alpha.png" cover />
  </v-avatar>
</template>

<script lang="ts">
export default {
  props: {
    size: {
      type: Number,
      default: 60,
    }
  }
}
</script>