<template lang="html">
  <section class="books">
    <mole-book-list
      v-for="date in completedDate"
      :key="date"
      :date="date"
    />
  </section>
</template>

<script>
import { BookList } from '@Admin/components/molecules';

export default {
  components: {
    moleBookList: BookList,
  },
  computed: {
    completedDate() {
      return this.$store.getters.completedDate;
    },
  },
  created() {
    if (!this.$store.state.books.length) {
      this.$store.dispatch('getBooks');
    }
  },
};
</script>

<style lang="css" scoped>
</style>
