<template lang="html">
  <footer class="footer">
    <div class="footer__inner">
      <atoms-text ex-small ex-bold white>
        © tkcco21
      </atoms-text>
    </div>
  </footer>
</template>

<script>
import { Text } from '@Public/components/atoms';

export default {
  components: {
    atomsText: Text,
  },
};
</script>

<style lang="scss" scoped>
.footer {
  background-color: #000;
  &__inner {
    margin: 0 auto;
    padding: 10px 20px;
    max-width: $publicMaxWidth;
    text-align: right;
  }
}
</style>
