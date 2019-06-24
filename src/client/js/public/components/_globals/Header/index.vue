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
    padding: 50px 0 30px;
    text-align: center;
  }
  &__title {
    display: inline-block;
    padding: 0 50px;
    font-weight: $bold;
    font-size: 48px;
    line-height: 1;
  }
}
</style>
