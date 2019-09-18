<template lang="html">
  <book-list :book-list="bookList" />
</template>

<script>
import { BookList } from '@Admin/components/Molecules';

export default {
  components: { BookList },
  computed: {
    bookList() {
      return this.$store.state.books.bookList;
    },
  },
  created() {
    this.$store.dispatch('books/getAllBooks');
  },
};
</script>
