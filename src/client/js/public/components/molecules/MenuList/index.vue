<template lang="html">
  <ul class="menu-list">
    <atoms-router-link
      v-for="routeLink in routeLinksArray"
      :key="routeLink.id"
      :path="routeLink.path"
      tag="li"
      button
      gray
    >
      {{ routeLink.name }}
    </atoms-router-link>
  </ul>
</template>

<script>
import routeLinksArray from '@Public/_helper/routeLinksArray';
import { RouterLink } from '@Public/components/atoms';

export default {
  components: {
    atomsRouterLink: RouterLink,
  },
  data() {
    return {
      routeLinksArray,
    };
  },
};
</script>

<style lang="scss" scoped>
.menu-list {
  display: flex;
  justify-content: flex-start;
  padding: 0 20px;
  border-bottom: 1px solid $lightGray;
  > li {
    margin-left: 10px;
    border: 1px solid $lightGray;
    border-bottom: none;
    &:first-child {
      margin-left: 0;
    }
  }
}
</style>
