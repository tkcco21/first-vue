<template>
  <div :class="wrapperClass">
    <PlaneText
      v-if="textExist"
      :text-class="textClass"
      :text="text"
    />

    <FormInput
      :input-type="inputType"
      :input-name="inputName"
      :input-placeholder="inputPlaceholder"
      :input-value="inputValue"
    />
  </div>
</template>

<script>
import { PlaneText } from 'Components/todo_router/Atoms/Text/index.js';
import { FormInput } from 'Components/todo_router/Atoms/Form/index.js';

export default {
  components: {
    PlaneText,
    FormInput
  },
  props: {
    wrapperClass: {
      type: String,
      default: 'register__input'
    },
    textExist: {
      type: Boolean,
      default: true
    },
    textClass: {
      type: String,
      default: 'register__input__title'
    },
    text: {
      type: String,
      default: 'タイトル'
    },
    inputType: {
      type: String,
      default: 'text'
    },
    inputName: {
      type: String,
      default: 'title'
    },
    inputPlaceholder: {
      type: String,
      default: 'タイトルを記入してください。'
    },
    inputValue: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.register__input__title {
  margin-bottom: 5px;
  font-weight: bold;
}
</style>
