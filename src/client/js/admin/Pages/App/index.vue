<template lang="html">
  <div>
    <Sidebar />
    <main class="content">
      <div class="content__inner">
        <router-view />
      </div>
    </main>
  </div>
</template>

<script>
import Sidebar from '@Admin/components/globals';

export default {
  components: {
    Sidebar,
  },
  watch: {
    $route() {
      this.$store.dispatch('clearMessage');
      this.$store.dispatch('resetForm');
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
