<template lang="html">
  <book-list :books="books" />
</template>

<script>
import { BookList } from '@Admin/components/Molecules';

export default {
  components: { BookList },
  computed: {
    books() {
      return this.$store.state.books;
    },
  },
  created() {
    this.$store.dispatch('getAllBooks');
  },
};
</script>
