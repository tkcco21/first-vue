<template lang="html">
  <div class="wrapper">
    <Sidebar />
    <main class="content">
      <router-view />
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
  display: flex;
  height: 100vh;
}
.content {
  padding: 20px;
  width: 100%;
}
</style>
