<template lang="html">
  <button
    :class="['button', className]"
    :name="name"
    :type="buttonType"
    @click="handleSubmit"
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
  methods: {
    handleSubmit() {
      this.$emit('handleSubmit');
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
.books-button {
  margin-top: 20px;
  padding: 10px 25px;
  color: #fff;
  font-size: 16px;
  background-color: #00a381;
}
</style>
