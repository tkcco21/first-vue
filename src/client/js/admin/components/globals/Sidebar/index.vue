<template lang="html">
  <aside class="sidebar">
    <h1 class="sidebar__title">First Vue</h1>
    <v-list class="sidebar__list">
      <template v-for="routeLink in routeLinksArray">
        <router-link
          v-if="routeLink.path"
          :key="routeLink.id"
          :to="routeLink.path"
          class="sidebar__list__item"
          exact
        >
          {{ routeLink.name }}
        </router-link>
        <div v-else :key="routeLink.id">
          <p class="sidebar__list__title">{{ routeLink.name }}</p>
          <v-list class="sidebar__list__children">
            <template v-for="routeChildLink in routeLink.children">
              <router-link
                :key="routeChildLink.id"
                :to="routeChildLink.path"
                class="sidebar__list__item"
                exact
              >
                {{ routeChildLink.name }}
              </router-link>
            </template>
          </v-list>
        </div>
      </template>
    </v-list>
  </aside>
</template>

<script>
import routeLinksArray from '@Admin/_helper/routeLinksArray';

export default {
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
  &__title {
    color: #fff;
    font-size: 24px;
    text-align: center;
  }
  &__list {
    margin-top: 20px;
    padding: 0;
    background-color: $keycolor;
    &__children {
      background-color: $keycolor;
    }
    &__title {
      margin: 0;
      padding: 5px;
      color: #efefef;
      font-weight: $bold;
      font-size: 18px;
      border-bottom: 2px solid #efefef;
    }
    &__item {
      display: block;
      padding: 5px 15px;
      padding-left: 20px;
      color: #fff;
      font-weight: $bold;
      font-size: 16px;
      &.router-link-active {
        color: $keycolor;
        background-color: #fff;
      }
    }
  }
}
</style>
