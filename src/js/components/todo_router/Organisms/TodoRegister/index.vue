<template>
  <form
    class="register"
    @submit.prevent="addTodo"
  >
    <InputTitle
      wrapper-class="register__input"
      text-class="register__input__title"
      text="やることのタイトル"
      input-type="text"
      input-name="title"
      input-placeholder="ここにTODOのタイトルを記入してください"
    />

    <InputDetail
      wrapper-class="register__input"
      text-class="register__input__title"
      text="やることの内容"
      textarea-rows="3"
      textarea-name="detail"
      textarea-placeholder="ここにTODOの内容を記入してください。改行は半角スペースに変換されます。"
    />

    <RegisterFoot
      wrapper-class-name="register__submit"
      class-name="register__submit__btn"
      button-type="submit"
      button-name="button"
      button-text="登録する"
    />
  </form>
</template>

<script>
import InputTitle from 'Components/todo_router/Molecules/InputTitle';
import InputDetail from 'Components/todo_router/Molecules/InputDetail';
import RegisterFoot from 'Components/todo_router/Molecules/RegisterFoot';

export default {
  components: {
    InputTitle,
    InputDetail,
    RegisterFoot
  },
  props: {
    addTodo: {
      type: Function,
      default() {
        return () => ({});
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.register {
  padding: 10px 20px;
  padding-bottom: 0;
  &__input {
    & + & {
      margin-top: 10px;
    }
  }
}
</style>
