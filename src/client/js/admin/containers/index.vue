<template lang="html">
  <div class="">
    <p>This is Admin</p>
    <Sidebar />
    <router-view />
  </div>
</template>

<script>
import Sidebar from '@Admin/components/Sidebar';

export default {
  components: {
    Sidebar,
  },
};
</script>

<style lang="scss" scoped>
</style>
