<template lang="html">
  <div>
    <app-sidebar />
    <main class="content">
      <div class="content__inner">
        <router-view />
      </div>
    </main>
  </div>
</template>

<script>
import { Sidebar } from '@Admin/layouts';

export default {
  components: {
    appSidebar: Sidebar,
  },
  watch: {
    $route() {
      this.$store.dispatch('books/clearMessage');
      this.$store.dispatch('books/resetForm');
    },
  },
};
</script>

<style lang="postcss" scoped>
.wrapper {
}
.content {
  padding-left: var(--sidebarWidth);
  &__inner {
    padding: 20px;
    width: 100%;
  }
}
</style>
