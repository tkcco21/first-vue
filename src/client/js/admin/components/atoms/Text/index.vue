<template lang="html">
  <p :class="classes"><slot /></p>
</template>

<script>
export default {
  props: {
    small: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classes() {
      return {
        text: true,
        'text--small': this.small,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.text {
  font-size: 16px;
}
.text--small {
  font-size: 14px;
}
</style>
