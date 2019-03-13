<template>
  <div :class="wrapperClass">
    <PlaneText
      :text-class="labelClass"
      :text="labelText"
    />
  </div>
</template>

<script>
import { PlaneText } from 'Components/todo_router/Atoms/Text/index.js';

export default {
  components: {
    PlaneText
  },
  props: {
    wrapperClass: {
      type: String,
      default: ''
    },
    labelClass: {
      type: String,
      default: ''
    },
    labelText: {
      type: String,
      default: 'タイトル'
    }
  }
}
</script>

<style lang="scss" scoped>
.todos__error {
  margin-bottom: 10px;
  text-align: center;
  &__text {
    padding: 5px;
    color: #f00;
    background-color: #efefef;
  }
}
.todos__empty {
  text-align: center;
}
</style>
