<template>
  <div :class="wrapperClassName">
    <MediumButton
      :class-name="className"
      :button-type="buttonType"
      :button-name="buttonName"
      :button-text="buttonText"
    />
  </div>
</template>

<script>
import { MediumButton } from 'Components/todo_router/Atoms/Button/index.js';

export default {
  components: {
    MediumButton
  },
  props: {
    wrapperClassName: {
      type: String,
      default: ''
    },
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
.register__submit {
  margin-top: 10px;
  text-align: right;
  &__btn {
    color: #fff;
    background-color: #54b363;
  }
}
</style>
