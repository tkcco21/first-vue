<template>
  <form
    :id="formId"
    :class="formClassName"
    @submit.prevent="hundleSubmit"
  >
    <InputTitle
      :wrapper-class="titleWrapperClass"
      :text-exist="titleExist"
      :input-type="titleType"
      :input-name="titleName"
      :input-value="titleValue"
    />

    <InputDetail
      :wrapper-class="detailWrapperClass"
      :text-exist="detailExist"
      :textarea-name="detailName"
      :textarea-value="detailValue"
    />
  </form>
</template>

<script>
import InputTitle from 'Components/todo_router/Molecules/InputTitle';
import InputDetail from 'Components/todo_router/Molecules/InputDetail';

export default {
  components: {
    InputTitle,
    InputDetail
  },
  props: {
    formId: {
      type: String,
      default: ''
    },
    formClassName: {
      type: String,
      default: ''
    },
    titleWrapperClass: {
      type: String,
      default: ''
    },
    titleExist: {
      type: Boolean,
      default: false
    },
    titleType: {
      type: String,
      default: ''
    },
    titleName: {
      type: String,
      default: ''
    },
    titleValue: {
      type: String,
      default: ''
    },
    detailWrapperClass: {
      type: String,
      default: ''
    },
    detailExist: {
      type: Boolean,
      default: false
    },
    detailName: {
      type: String,
      default: ''
    },
    detailValue: {
      type: String,
      default: ''
    }
  },
  methods: {
    hundleSubmit(event) {
      this.$emit('submitEditTodo', event);
    }
  }
}
</script>

<style lang="scss" scoped>
.todos__desc {
  width: 70%;
  min-width: 450px;
  &__title {
    transition: all .3s;
  }
  &__detail {
    margin-top: 5px;
    color: #777;
    transition: all .3s;
  }
  .is-completed &__title,
  .is-completed &__detail {
    color: #ccc;
  }
}

</style>
