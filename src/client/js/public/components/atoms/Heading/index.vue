<template lang="html">
  <component
    :is="tag"
    :class="className || defaultClass"
  >
    <slot />
  </component>
</template>

<script>
export default {
  props: {
    level: {
      type: Number,
      default: 1,
    },
    className: {
      type: String,
      default: '',
    },
  },
  computed: {
    tag() {
      return `h${this.level}`;
    },
    defaultClass() {
      switch (this.level) {
        case 1:
          return 'heading--primary';
        case 2:
          return 'heading--secondary';
        case 3:
          return 'heading--tertiary';
        case 4:
          return 'heading--quaternary';
        default:
          return 'heading--primary';
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.heading--primary {}
.heading--secondary {}
.heading--tertiary {}
.heading--quaternary {}

.header__title {
  display: inline-block;
  color: $keycolor;
  font-weight: $bold;
  font-size: 48px;
}
</style>
