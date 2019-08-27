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
    marginTop: {
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
        'link--margin-top': this.marginTop,
        'link--small': this.small,
        'link--white': this.white,
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
  &--margin-top {
    margin-top: 5px;
  }
  &--small {
    font-size: 14px;
  }
  &--white {
    color: #fff;
  }
  &--bg-key {
    background-color: var(--keycolor);
  }
  &--bg-second {
    background-color: var(--secondColor);
  }
}
</style>
