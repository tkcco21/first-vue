<template>
  <button
    :class="className"
    :type="buttonType"
    :name="buttonName"
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
    }
  }
}
</script>

<style lang="scss" scoped>
button {
  padding: 10px 25px;
  font-size: 14px;
  border-radius: 7px;
}
</style>
