<template lang="html">
  <aside class="sidebar">
    <h1 class="sidebar-title">First Vue</h1>
    <ul class="sidebar-list">
      <atoms-list-link
        v-for="routeLink in routeLinksArray"
        :key="routeLink.id"
      >
        <router-link :to="routeLink.path">
          {{ routeLink.name }}
        </router-link>
      </atoms-list-link>
    </ul>
  </aside>
</template>

<script>
import routeLinksArray from '@Admin/_helper/routeLinksArray';
import atomsListLink from '@Admin/components/atoms/ListItem';

export default {
  components: {
    atomsListLink,
  },
  computed: {
    routeLinksArray() {
      return routeLinksArray;
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
  &-list {
    > li > a {
      display: block;
      color: #fff;
    }
  }
}
</style>
