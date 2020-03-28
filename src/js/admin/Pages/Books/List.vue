<template lang="html">
  <div>
    <global-loading v-if="isLoading" />
    <book-list :book-list="bookList" />
  </div>
</template>

<script>
import { GlobalLoading } from '@Admin/components/globals';
import { BookList } from '@Admin/components/Molecules';

export default {
  components: { BookList, GlobalLoading },
  computed: {
    isLoading() {
      return this.$store.state.generics.isLoading;
    },
    bookList() {
      return this.$store.state.books.bookList;
    },
  },
  created() {
    this.$store.dispatch('books/getAllBooks');
  },
};
</script>
