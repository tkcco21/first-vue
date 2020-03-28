<template lang="html">
  <div>
    <global-sidebar />
    <main class="content">
      <div class="content__inner">
        <router-view />
      </div>
    </main>
  </div>
</template>

<script>
import { GlobalSidebar } from '@Admin/components/globals';

export default {
  components: {
    GlobalSidebar,
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
