<template>
  <button
    :class="className"
    :type="buttonType"
    :name="buttonName"
    :submit="isSubmit"
    @click="clickButton"
  >
    {{ buttonText }}
  </button>
</template>

<script>
export default {
  props: {
    className: {
      type: String,
      default: ''
    },
    buttonType: {
      type: String,
      default: 'button'
    },
    buttonName: {
      type: String,
      default: 'button'
    },
    buttonText: {
      type: String,
      default: '送信'
    },
    isSubmit: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    clickButton(event) {
      if (!this.isSubmit) {
        event.preventDefault();
        this.$emit('click-button', event);
      }
    }
  }
}
</script>

<style lang="scss" scoped>
button {
  padding: 5px 10px;
  font-size: 12px;
  border-radius: 7px;
}
</style>
