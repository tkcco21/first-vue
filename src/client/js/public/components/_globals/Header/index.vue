<template lang="html">
  <header class="header">
    <div class="header__inner">
      <h1 class="header__title">First Vue</h1>
    </div>
  </header>
</template>

<script>
export default {
};
</script>

<style lang="postcss" scoped>
.header {
  &__inner {
    padding: 50px 0 20px;
    text-align: center;
    @mixin mobile {
      padding: 5% 0;
    }
  }
  &__title {
    display: inline-block;
    font-size: 48px;
    line-height: 1;
    @mixin mobile {
      font-size: 36px;
    }
  }
}
</style>
