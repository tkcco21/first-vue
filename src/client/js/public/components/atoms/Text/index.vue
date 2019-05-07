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
    exSmall: {
      type: Boolean,
      default: false,
    },
    bold: {
      type: Boolean,
      default: false,
    },
    exBold: {
      type: Boolean,
      default: false,
    },
    white: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classes() {
      return {
        text: true,
        'text--small': this.small,
        'text--ex-small': this.exSmall,
        'text--bold': this.bold,
        'text--ex-bold': this.exBold,
        'text--white': this.white,
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
.text--ex-small {
  font-size: 12px;
}
.text--bold {
  font-weight: $bold;
}
.text--ex-bold {
  font-weight: $black;
}
.text--white {
  color: #fff;
}
</style>
