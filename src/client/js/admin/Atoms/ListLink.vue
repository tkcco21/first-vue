<template lang="html">
  <li>
    <router-link :to="{ path: linkPath }">
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
    linkPath: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
