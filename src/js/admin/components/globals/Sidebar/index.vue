<template lang="html">
  <aside class="sidebar">
    <h1 class="sidebar__title">First Vue</h1>
    <v-list class="sidebar__list">
      <template v-for="routeLink in routeLinksArray">
        <!-- 子要素なし -->
        <router-link
          v-if="routeLink.path"
          :key="routeLink.id"
          :to="routeLink.path"
          class="sidebar__list__item"
          exact
        >
          {{ routeLink.name }}
        </router-link>
        <!-- 子要素なし -->

        <!-- 子要素あり -->
        <div v-else :key="routeLink.id">
          <p class="sidebar__list__title">
            <v-icon class="mr-2" dark>mdi-book-open</v-icon>
            <span>{{ routeLink.name }}</span>
          </p>
          <v-list class="sidebar__list__children">
            <template v-for="routeChildLink in routeLink.children">
              <router-link
                :key="routeChildLink.id"
                :to="routeChildLink.path"
                :class="[
                  'sidebar__list__item',
                  routeChildLink.disable ? 'is-disable' : ''
                ]"
                exact
              >
                {{ routeChildLink.name }}
              </router-link>
            </template>
          </v-list>
        </div>
        <!-- 子要素あり -->
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

<style lang="postcss" scoped>
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  padding: 20px 10px;
  width: var(--sidebarWidth);
  height: 100%;
  background-color: var(--keyColor);
  &__title {
    color: #fff;
    font-size: 24px;
    text-align: center;
  }
  &__list {
    margin-top: 20px;
    padding: 0;
    background-color: var(--keyColor);
    &__children {
      background-color: var(--keyColor);
    }
    &__title {
      display: flex;
      align-items: center;
      margin: 0;
      padding: 5px 0;
      color: #efefef;
      font-weight: var(--bold);
      font-size: 18px;
      border-bottom: 2px solid #efefef;
    }
    &__item {
      display: block;
      padding: 5px 15px;
      padding-left: 20px;
      color: #fff;
      font-weight: var(--bold);
      font-size: 16px;
      transition: all .5s;
      &:hover {
        background-color: rgba(220, 220, 220, .3);
      }
      &.router-link-active {
        color: var(--keyColor);
        background-color: #fff;
        cursor: default;
      }
      &.is-disable {
        cursor: default;
        pointer-events: none;
      }
    }
  }
}
</style>
