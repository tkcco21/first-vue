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
    paddingS: {
      type: Boolean,
      default: false,
    },
    paddingM: {
      type: Boolean,
      default: false,
    },
    paddingL: {
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
    left: {
      type: Boolean,
      default: false,
    },
    right: {
      type: Boolean,
      default: false,
    },
    roundS: {
      type: Boolean,
      default: false,
    },
    roundM: {
      type: Boolean,
      default: false,
    },
    roundL: {
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
    hoverOpa: {
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
        'link--padding-s': this.paddingS,
        'link--padding-m': this.paddingM,
        'link--padding-l': this.paddingL,
        'link--small': this.small,
        'link--white': this.white,
        'link--center': this.center,
        'link--left': this.left,
        'link--right': this.right,
        'link--round-s': this.roundS,
        'link--round-m': this.roundM,
        'link--round-l': this.roundL,
        'link--bg-key': this.bgKey,
        'link--bg-second': this.bgSecond,
        'link--hover-opa': this.hoverOpa,
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
  &--padding-s {
    padding: 5px 8px;
  }
  &--padding-m {
    padding: 10px 15px;
  }
  &--padding-l {
    padding: 15px 20px;
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
  &--round-s {
    border-radius: 3px;
  }
  &--round-m {
    border-radius: 5px;
  }
  &--round-l {
    border-radius: 8px;
  }
  &--bg-key {
    background-color: var(--keycolor);
  }
  &--bg-second {
    background-color: var(--secondColor);
  }
  &--hover-opa {
    transition: opacity .5s;
    &:hover {
      opacity: .7;
    }
  }
}
</style>
