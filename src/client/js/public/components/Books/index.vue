<template lang="html">
  <section class="books">
    <h2 class="books__title">読んだ本たち</h2>
    <date-list />
  </section>
</template>

<script>
import DateList from './DateList';

export default {
  components: {
    DateList,
  },
  created() {
    if (!this.$store.getters.completedDate.length) {
      this.$store.dispatch('getBooks');
    }
  },
};
</script>

<style lang="css" scoped>
.books {
  &__title {
    font-size: 24px;
  }
}
</style>
