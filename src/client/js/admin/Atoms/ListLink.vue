<template lang="html">
  <li>
    <router-link :to="{ path: '/' }">
      {{ linkText }}
    </router-link>
  </li>
</template>

<script>
export default {
  props: {
    linkText: {
      type: String,
      default: 'リンク',
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
