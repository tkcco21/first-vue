<template lang="html">
  <div class="wrapper">
    <app-header />
    <app-menu />
    <main class="content">
      <router-view />
    </main>
    <app-footer />
  </div>
</template>

<script>
import {
  Header,
  Menu,
  Footer,
} from '@Public/layouts';

export default {
  components: {
    appHeader: Header,
    appMenu: Menu,
    appFooter: Footer,
  },
};
</script>

<style lang="postcss" scoped>
.content {
  margin: 0 auto;
  padding: 30px;
  max-width: var(--publicContentWidth);
  box-sizing: content-box;
  @mixin tab {
    padding: 20px 0 30px;
    width: 95%;
  }
  @mixin mobile {
    padding: 3% 0;
    width: 97%;
  }
}
</style>
