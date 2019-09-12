<template>
  <button :type="type" :class="classes" @click="$emit('click')">
    {{ text }}
  </button>
</template>

<script>
export default {
  props: {
    type: {
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
    keyColor: {
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
    underline: {
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
    classes() {
      return {
        button: true,
        'button--block': this.block,
        'button--padding-s': this.paddingS,
        'button--padding-m': this.paddingM,
        'button--padding-l': this.paddingL,
        'button--font-l': this.fontL,
        'button--font-m': this.fontM,
        'button--font-s': this.fontS,
        'button--key-color': this.keyColor,
        'button--white': this.white,
        'button--center': this.center,
        'button--left': this.left,
        'button--right': this.right,
        'button--underline': this.underline,
        'button--round-s': this.roundS,
        'button--round-m': this.roundM,
        'button--round-l': this.roundL,
        'button--bg-key': this.bgKey,
        'button--bg-second': this.bgSecond,
        'button--hover-opa': this.hoverOpa,
      };
    },
  },
};
</script>

<style lang="postcss" scoped>
.button {
  display: inline-block;

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
  &--font-l {
    font-size: 18px;
    @mixin mobile {
      font-size: 16px;
    }
  }
  &--font-m {
    font-size: 16px;
    @mixin mobile {
      font-size: 14px;
    }
  }
  &--font-s {
    font-size: 14px;
    @mixin mobile {
      font-size: 12px;
    }
  }
  &--key-color {
    color: var(--keyColor);
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
  &--underline {
    text-decoration: underline;
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
    background-color: var(--keyColor);
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
