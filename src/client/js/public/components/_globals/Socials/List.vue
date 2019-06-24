<template lang="html">
  <ul class="social-list">
    <li
      v-for="social in socialsArray"
      :key="social.id"
    >
      {{ social.name }}
    </li>
  </ul>
</template>

<script>
import socialsArray from '@Public/_helper/socialsArray';

export default {
  data() {
    return {
      socialsArray,
    };
  },
};
</script>

<style lang="postcss" scoped>
</style>
