<template lang="html">
  <book-form
    :target-book="targetBook"
    :done-message="doneMessage"
    :error-message="errorMessage"
    @updateValue="updateValue"
    @clear="clear"
    @invalidateSubmit="invalidateSubmit"
    @handleSubmit="handleSubmit"
  />
</template>

<script>
import { BookForm } from '@Admin/components/Molecules';

export default {
  components: { BookForm },
  computed: {
    doneMessage() {
      return this.$store.state.books.doneMessage;
    },
    errorMessage() {
      return this.$store.state.books.errorMessage;
    },
    targetBook() {
      return this.$store.state.books.targetBook;
    },
  },
  methods: {
    updateValue(target) {
      this.$store.dispatch('books/updateValue', target);
    },
    clear() {
      this.$store.dispatch('books/clearMessage');
    },
    invalidateSubmit() {
      this.$store.dispatch('books/invalidate', '必須項目が未入力か、ちゃんとした値が入力されてないよ。');
    },
    handleSubmit(book) {
      this.$store.dispatch('books/addBook', book).then(() => {
        this.$store.dispatch('books/resetForm');
      });
    },
  },
};
</script>
