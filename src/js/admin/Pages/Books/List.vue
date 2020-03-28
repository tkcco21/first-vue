<template lang="html">
  <div>
    <app-loading v-if="isLoading" />
    <book-list :book-list="bookList" />
  </div>
</template>

<script>
import { Loading } from '@Admin/components/Atoms';
import { BookList } from '@Admin/components/Molecules';

export default {
  components: { BookList, appLoading: Loading },
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
