<template lang="html">
  <v-app class="wrapper">
    <Sidebar />
    <main class="content">
      <div class="content__inner">
        <router-view />
      </div>
    </main>
  </v-app>
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
    },
  },
};
</script>

<style lang="css" scoped>
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
