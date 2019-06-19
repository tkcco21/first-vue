<template lang="html">
  <section class="books">
    <h2 class="books__title">読んだ本たち</h2>
    <books-list
      :date-array="dateArray"
      :books="books"
    />
  </section>
</template>

<script>
import BooksList from '@Public/components/Molecules';

export default {
  components: {
    BooksList,
  },
  computed: {
    dateArray() {
      return this.$store.getters.completedDate;
    },
    books() {
      return this.$store.state.books;
    },
  },
  created() {
    if (!this.$store.getters.completedDate.length) {
      this.$store.dispatch('getBooks');
    }
  },
};
</script>

<style lang="postcss" scoped>
.books {
  &__title {
    font-size: 24px;
  }
}
</style>
