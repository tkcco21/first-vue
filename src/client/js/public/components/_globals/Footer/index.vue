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

<style lang="postcss" scoped>
.footer {
  background-color: #000;
  &__inner {
    margin: 0 auto;
    padding: 10px 20px;
    max-width: var(--publicMaxWidth);
    text-align: right;
  }
  &__copyright {
    color: #fff;
    font-weight: var(--black);
    font-size: 12px;
  }
}
</style>
