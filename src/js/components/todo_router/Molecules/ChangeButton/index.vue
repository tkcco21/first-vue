<template>
  <div :class="wrapperClassName">
    <SmallButton
      :class-name="editClassName"
      :button-type="editButtonType"
      :form="editTargetForm"
      :button-name="editButtonName"
      :button-text="editButtonText"
      :is-submit="isSubmit"
      @click-button="handleEdit"
    />

    <SmallButton
      :class-name="deleteClassName"
      :button-type="deleteButtonType"
      :button-name="deleteButtonName"
      :button-text="deleteButtonText"
      @click-button="handleDelete"
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
    editClassName: {
      type: String,
      default: ''
    },
    editTargetForm: {
      type: String,
      default: ''
    },
    editButtonType: {
      type: String,
      default: 'button'
    },
    editButtonName: {
      type: String,
      default: 'button'
    },
    editButtonText: {
      type: String,
      default: '送信'
    },
    isSubmit: {
      type: Boolean,
      default: false
    },
    deleteClassName: {
      type: String,
      default: ''
    },
    deleteButtonType: {
      type: String,
      default: 'button'
    },
    deleteButtonName: {
      type: String,
      default: 'deleteButton'
    },
    deleteButtonText: {
      type: String,
      default: '削除'
    }
  },
  methods: {
    handleEdit(event) {
      this.$emit('editClick', event);
    },
    handleDelete() {
      this.$emit('deleteClick');
    }
  }
}
</script>

<style lang="scss" scoped>
.todos__btn {
  width: 10%;
  min-width: 70px;
  text-align: center;
  &__edit,
  &__delete {
    color: #fff;
  }
  &__edit {
    background-color: #148cfa;
  }
  &__delete {
    margin-top: 5px;
    background-color: #ff1919;
  }
}
</style>
