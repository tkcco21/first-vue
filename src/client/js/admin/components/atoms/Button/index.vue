<template lang="html">
  <button
    :class="classes"
    :name="name"
    :type="buttonType"
    @click="handleSubmit"
  >
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: 'Name',
    },
    buttonType: {
      type: String,
      default: 'button',
    },
    inline: {
      type: Boolean,
      default: false,
    },
    large: {
      type: Boolean,
      default: false,
    },
    small: {
      type: Boolean,
      default: false,
    },
    error: {
      type: Boolean,
      default: false,
    },
    disable: {
      type: Boolean,
      default: false,
    },
    caution: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classes() {
      return {
        button: true,
        'button-inline': this.inline,
        'button-large': this.large,
        'button-small': this.small,
        'button-error': this.error,
        'button-disable': this.disable,
        'button-caution': this.caution,
      };
    },
  },
  methods: {
    handleSubmit() {
      if (this.buttonType === 'button') {
        this.$emit('handleSubmit');
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.button {
  display: block;
  padding: 10px 15px;
  width: 100%;
  color: #fff;
  font-size: 16px;
  background-color: $keycolor;
}

.button-inline {
  display: inline-block;
  width: auto;
}
.button-large {
  padding: 10px 35px;
  font-size: 18px;
}
.button-small {
  padding: 5px 10px;
  font-size: 14px;
}
.button-error {
  background-color: $errorColor;
}
.button-disable {
  background-color: $disabledColor;
}
.button-caution {
  background-color: $cautionColor;
}
</style>
