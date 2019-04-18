<template lang="html">
  <div class="books">
    <h1 class="books-title">Books</h1>
    <div class="books-content">
      <div class="books-form">
        <atoms-input-text
          class-name="books-input"
          label="URL"
          name="bookTitle"
          inputType="text"
        />
      </div>
      <div class="books-form">
        <atoms-textarea
          class-name="books-textarea"
          label="概要・感想"
          name="bookDetail"
        />
      </div>
      <div class="books-foot">
        <atoms-button
          className="books-button"
          name="addBookButton"
          type="button"
          text="追加する"
        />
      </div>
    </div>
  </div>
</template>

<script>
import atomsInputText from '@Admin/components/atoms/InputText';
import atomsTextarea from '@Admin/components/atoms/Textarea';
import atomsButton from '@Admin/components/atoms/Button';

export default {
  components: {
    atomsInputText,
    atomsTextarea,
    atomsButton,
  },
  computed: {
  },
  created() {
  },
};
</script>

<style lang="scss" scoped>
.books {
  &-title {
    padding: 5px 15px;
    font-size: 24px;
    background-color: #efefef;
  }
  &-content {
    margin-top: 20px;
  }
  &-form {
    & + & {
      margin-top: 20px;
    }
  }
}
</style>
