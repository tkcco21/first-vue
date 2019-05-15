<template lang="html">
  <footer class="footer">
    <div class="footer__inner">
      <p class="footer__copyright">© tkcco21</p>
    </div>
  </footer>
</template>

<script>
export default {
};
</script>

<style lang="css" scoped>
.footer {
  background-color: #000;
  &__inner {
    margin: 0 auto;
    padding: 10px 20px;
    max-width: $publicMaxWidth;
    text-align: right;
  }
  &__copyright {
    color: #fff;
    font-weight: $black;
    font-size: 12px;
  }
}
</style>
