<template lang="html">
  <ul class="menu-list">
    <li v-for="route in routesArray" :key="route.id">
      <router-link
        :to="{ path: route.path }"
        class="menu-list__link"
        exact-active-class="active"
      >
        {{ route.name }}
      </router-link>
    </li>
  </ul>
</template>

<script>
import routesArray from '@Public/helper/routesArray';

export default {
  data() {
    return {
      routesArray,
    };
  },
};
</script>

<style lang="postcss" scoped>
.menu-list {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: flex-start;
  padding: 0 20px;
  width: 100%;
  box-sizing: border-box;
  @mixin mobile {
    padding: 0 2%;
  }
  & > li {
    margin-left: 10px;
    @mixin mobile {
      margin-left: 2%;
    }
    &:first-child {
      margin-left: 0;
    }
  }
  &__link {
    padding: 5px 20px;
    color: $gray;
    font-size: 12px;
    border: 1px solid var(--lightGray);
    border-bottom: none;
    transition: all .5s;
    @mixin mobile {
      padding: 2px 10px;
    }
    &.active {
      color: var(--keyColor);
      border-color: var(--keyColor);
    }
  }
}
</style>
