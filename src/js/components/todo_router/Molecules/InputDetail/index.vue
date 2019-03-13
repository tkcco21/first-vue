<template>
  <div :class="wrapperClass">
    <PlaneText
      v-if="textExist"
      :text-class="textClass"
      :text="text"
    />

    <FormTextarea
      :textarea-name="textareaName"
      :textarea-rows="textareaRows"
      :textarea-placeholder="textareaPlaceholder"
      :textarea-value="textareaValue"
    />
  </div>
</template>

<script>
import { PlaneText } from 'Components/todo_router/Atoms/Text/index.js';
import { FormTextarea } from 'Components/todo_router/Atoms/Form/index.js';

export default {
  components: {
    PlaneText,
    FormTextarea
  },
  props: {
    wrapperClass: {
      type: String,
      default: ''
    },
    textExist: {
      type: Boolean,
      default: true
    },
    textClass: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: 'タイトル'
    },
    textareaRows: {
      type: String,
      default: '3'
    },
    textareaName: {
      type: String,
      default: 'title'
    },
    textareaPlaceholder: {
      type: String,
      default: 'タイトルを記入してください。'
    },
    textareaValue: {
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
