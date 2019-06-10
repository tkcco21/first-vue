<template lang="html">
  <book-list
    :books="books"
    :completed-date="completedDate"
  />
</template>

<script>
import { BookList } from '@Admin/components/Molecules';

export default {
  components: { BookList },
  computed: {
    completedDate() {
      return this.$store.getters.completedDate;
    },
    books() {
      return this.$store.state.books;
    },
  },
  created() {
    if (!this.$store.state.books.length) {
      this.$store.dispatch('getAllBooks');
    }
  },
};
</script>
