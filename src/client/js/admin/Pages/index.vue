<template lang="html">
  <div class="wrapper">
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
};
</script>

<style lang="scss" scoped>
.wrapper {
  height: 100vh;
}
.content {
  padding-left: $sidebarWidth;
  &__inner {
    padding: 20px;
    width: 100%;
  }
}
</style>
