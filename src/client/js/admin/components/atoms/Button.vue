<template lang="html">
  <button
    :class="['button', className]"
    :name="name"
    :type="buttonType"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  props: {
    className: {
      type: String,
      default: '',
    },
    text: {
      type: String,
      default: 'ボタン',
    },
    name: {
      type: String,
      default: 'Name',
    },
    buttonType: {
      type: String,
      default: 'button',
    },
  },
};
</script>

<style lang="scss" scoped>
.button {
  padding: 10px 15px;
}

.signin-button {
  padding: 10px 25px;
  color: #fff;
  font-size: 16px;
  background-color: #00a381;
}
</style>
