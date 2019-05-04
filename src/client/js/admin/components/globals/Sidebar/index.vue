<template lang="html">
  <aside class="sidebar">
    <atoms-heading :level="1" className="sidebar__title">
      First Vue
    </atoms-heading>
    <ul class="sidebar__list">
      <atoms-list-item
        v-for="routeLink in routeLinksArray"
        :key="routeLink.id"
      >
        <router-link
          :to="routeLink.path"
          v-if="routeLink.path"
          class="sidebar__list__item"
        >
          {{ routeLink.name }}
        </router-link>
        <div v-else>
          <p class="sidebar__list__title">{{ routeLink.name }}</p>
          <ul>
            <atoms-list-item
              v-for="routeChildLink in routeLink.children"
              :key="routeChildLink.id"
            >
              <router-link
                :to="routeChildLink.path"
                class="sidebar__list__item"
              >
                {{ routeChildLink.name }}
              </router-link>
            </atoms-list-item>
          </ul>
        </div>
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
  position: fixed;
  top: 0;
  left: 0;
  padding: 20px 10px;
  width: $sidebarWidth;
  height: 100%;
  background-color: $keycolor;
  &__list {
    margin-top: 20px;
    &__title {
      padding: 5px;
      font-size: 18px;
      border-bottom: 1px solid #fff;
    }
    &__item {
      display: block;
      padding: 5px 15px;
      padding-left: 20px;
      color: #fff;
      font-size: 16px;
    }
  }
}
</style>
