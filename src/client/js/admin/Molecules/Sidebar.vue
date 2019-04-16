<template lang="html">
  <aside class="sidebar">
    <h1 class="sidebar-title">First Vue</h1>
    <ul class="sidebar-list">
      <!-- <li>
        <router-link :to="{ path: '/admin' }">TOP</router-link>
      </li>
      <li>
        <router-link :to="{ path: '/admin/books' }">本一覧</router-link>
      </li>
      <li>
        <router-link :to="{ path: '/admin/books/create' }">本追加</router-link>
      </li> -->
      <atoms-list-link />
      <p>{{ routes }}</p>
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
    routes() {
      console.log(routesLinkArray);
      return 'test';
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
