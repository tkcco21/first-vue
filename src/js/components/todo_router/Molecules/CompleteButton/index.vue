<template>
  <div :class="wrapperClassName">
    <SmallButton
      :class-name="className"
      :button-type="buttonType"
      :button-name="buttonName"
      :button-text="buttonText"
      @click-button="handleClick"
    />
  </div>
</template>

<script>
import { SmallButton } from 'Components/todo_router/Atoms/Button/index.js';

export default {
  components: {
    SmallButton
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
  },
  methods: {
    handleClick() {
      this.$emit('click');
    }
  }
}
</script>

<style lang="scss" scoped>
.todos__completed {
  width: 15%;
  min-width: 100px;
  &__btn {
    color: #ff1919;
    font-weight: bold;
    border: 2px solid #ff1919;
    background-color: #fff;
    transition: all .3s;
    .is-completed & {
      text-decoration: line-through;
      color: #ccc;
      border: 2px solid #eaeaea;
      background-color: #eaeaea;
    }
  }
}
</style>
