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
