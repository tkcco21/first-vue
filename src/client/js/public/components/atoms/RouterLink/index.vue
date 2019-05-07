<template lang="html">
  <router-link
    :to="{ path }"
    :tag="tag"
    :class="classes"
    :active-class="activeClass"
    :exact-active-class="exactActiveClass"
  >
    <slot />
  </router-link>
</template>

<script>
export default {
  props: {
    path: {
      type: String,
      default: '',
    },
    tag: {
      type: String,
      default: 'a',
    },
    activeClass: {
      type: String,
      default: '',
    },
    exactActiveClass: {
      type: String,
      default: '',
    },
    button: {
      type: Boolean,
      default: false,
    },
    gray: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classes() {
      return {
        'router-link': true,
        'router-link--button': this.button,
        'router-link--gray': this.gray,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.router-link {
  font-size: 16px;
  cursor: pointer;
  &--button {
    padding: 5px 20px;
  }
  &--gray {
    color: $gray;
  }
}
</style>
