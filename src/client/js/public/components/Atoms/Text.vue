<template>
  <component :is="tag">{{ text }}</component>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
    tag: {
      type: String,
      default: 'h1',
    },

    // ↓For Classes
    fontXl: { // 26
      type: Boolean,
      default: false,
    },
    fontL: { // 24
      type: Boolean,
      default: false,
    },
    fontM: { // 20
      type: Boolean,
      default: false,
    },
    fontS: { // 16
      type: Boolean,
      default: false,
    },
    fontXs: { // 14
      type: Boolean,
      default: false,
    },
    keyColor: {
      type: Boolean,
      default: false,
    },
    darkGray: {
      type: Boolean,
      default: false,
    },
    left: {
      type: Boolean,
      default: false,
    },
    right: {
      type: Boolean,
      default: false,
    },
    center: {
      type: Boolean,
      default: false,
    },
    underline: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="postcss" scoped>
h2 {
  font-size: 24px;
  @mixin mobile {
    font-size: 20px;
  }
}
p {
  font-size: 14px;
  color: var(--darkGray);
  @mixin mobile {
    font-size: 12px;
    line-height: 1.4;
  }
}
</style>
