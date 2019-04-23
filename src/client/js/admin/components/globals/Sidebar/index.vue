<template lang="html">
  <aside class="sidebar">
    <atoms-heading :level="1" className="sidebar-title">
      First Vue
    </atoms-heading>
    <ul class="sidebar-list">
      <atoms-list-item
        v-for="routeLink in routeLinksArray"
        :key="routeLink.id"
      >
        <router-link :to="routeLink.path">
          {{ routeLink.name }}
        </router-link>
      </atoms-list-item>
    </ul>
  </aside>
</template>

<script>
import routeLinksArray from '@Admin/_helper/routeLinksArray';
import { Heading, ListItem } from '@Admin/components/atoms';

export default {
  components: {
    atomsHeading: Heading,
    atomsListItem: ListItem,
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
  background-color: $keycolor;
  &-list {
    > li > a {
      display: block;
      color: #fff;
    }
  }
}
</style>
