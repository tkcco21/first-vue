<template lang="html">
  <div class="wrapper">
    <app-header />
    <app-menu />
    <div class="inner">
      <router-view />
    </div>
    <app-footer />
  </div>
</template>

<script>
import { Header, Menu, Footer } from '@Public/components/globals';

export default {
  components: {
    appHeader: Header,
    appMenu: Menu,
    appFooter: Footer,
  },
};
</script>

<style lang="scss" scoped>
.inner {
  margin: 0 auto;
  padding: 30px;
  max-width: $publicContentWidth;
  box-sizing: content-box;
}
</style>
