<template lang="html">
  <div class="wrapper">
    <Sidebar />
    <main class="content">
      <div class="content-inner">
        <router-view />
      </div>
    </main>
  </div>
</template>

<script>
import Sidebar from '@Admin/components/globals/Sidebar';

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
  padding: 20px 0;
  width: 100%;
  &-inner {
    margin: 0 auto;
    width: 95%;
  }
}
</style>
