<template lang="html">
  <aside class="sidebar">
    <h1 class="sidebar-title">First Vue</h1>
    <ul class="sidebar-list">
      <atoms-list-link
        v-for="routeLink in routesLinkArray"
        :key="routeLink.id"
        :link-text="routeLink.name"
        :link-path="routeLink.path"
      />
    </ul>
  </aside>
</template>

<script>
import routesLinkArray from '@Admin/_helper/routesLinkArray';
import atomsListLink from '@Admin/Atoms/ListLink';

export default {
  components: {
    atomsListLink,
  },
  computed: {
    routesLinkArray() {
      return routesLinkArray;
    },
  },
};
</script>

<style lang="scss" scoped>
.sidebar {
  padding: 20px 10px;
  width: 230px;
  height: 100%;
  background-color: #00a381;
  &-title {
    color: #fff;
    font-size: 24px;
    text-align: center;
  }
}
</style>
