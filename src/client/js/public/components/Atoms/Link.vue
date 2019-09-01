<template>
  <component
    :is="tag"
    :[href]="to"
    :target="external ? '_blank' : false"
    :class="classes"
  >
    {{ text }}
  </component>
</template>

<script>
export default {
  props: {
    external: {
      type: Boolean,
      default: false,
    },
    to: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },

    // ↓For Classes
    block: {
      type: Boolean,
      default: false,
    },
    small: {
      type: Boolean,
      default: false,
    },
    white: {
      type: Boolean,
      default: false,
    },
    center: {
      type: Boolean,
      default: false,
    },
    bgKey: {
      type: Boolean,
      default: false,
    },
    bgSecond: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    tag() {
      return this.external ? 'a' : 'router-link';
    },
    href() {
      return this.external ? 'href' : 'to';
    },
    classes() {
      return {
        link: true,
        'link--block': this.block,
        'link--small': this.small,
        'link--white': this.white,
        'link--center': this.center,
        'link--left': this.left,
        'link--right': this.right,
        'link--bg-key': this.bgKey,
        'link--bg-second': this.bgSecond,
      };
    },
  },
};
</script>

<style lang="postcss" scoped>
.link {
  display: inline-block;
  font-size: 16px;

  &--block {
    display: block;
  }
  &--small {
    font-size: 14px;
  }
  &--white {
    color: #fff;
  }
  &--center {
    text-align: center;
  }
  &--left {
    text-align: left;
  }
  &--right {
    text-align: right;
  }
  &--bg-key {
    background-color: var(--keycolor);
  }
  &--bg-second {
    background-color: var(--secondColor);
  }
}
</style>
