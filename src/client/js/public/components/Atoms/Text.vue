<template>
  <component :is="tag" :class="classes">{{ text }}</component>
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
      required: true,
    },

    // ↓For Classes
    fontXl: {
      type: Boolean,
      default: false,
    },
    fontL: {
      type: Boolean,
      default: false,
    },
    fontM: {
      type: Boolean,
      default: false,
    },
    fontS: {
      type: Boolean,
      default: false,
    },
    fontXs: {
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
  computed: {
    classes() {
      return {
        'text--font-xl': this.fontXl,
        'text--font-l': this.fontL,
        'text--font-m': this.fontM,
        'text--font-s': this.fontS,
        'text--font-xs': this.fontXs,
        'text--key-color': this.keyColor,
        'text--dark-gray': this.darkGray,
        'text--left': this.left,
        'text--right': this.right,
        'text--center': this.center,
        'text--underline': this.underline,
      };
    },
  },
};
</script>

<style lang="postcss" scoped>
.text {
  &--font-xl {
    font-size: 26px;
    @mixin mobile {
      font-size: 23px;
    }
  }
  &--font-l {
    font-size: 24px;
    @mixin mobile {
      font-size: 21px;
    }
  }
  &--font-m {
    font-size: 20px;
    @mixin mobile {
      font-size: 17px;
    }
  }
  &--font-s {
    font-size: 16px;
    @mixin mobile {
      font-size: 14px;
    }
  }
  &--font-xs {
    font-size: 14px;
    @mixin mobile {
      font-size: 12px;
    }
  }
  &--key-color {
    color: var(--keyColor);
  }
  &--dark-gray {
    color: var(--darkGray);
  }
  &--white {
    color: #fff;
  }
  &--left {
    text-align: left;
  }
  &--right {
    text-align: right;
  }
  &--center {
    text-align: center;
  }
  &--underline {
    text-decoration: underline;
  }
}
</style>
