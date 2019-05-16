<template lang="html">
  <ul class="date-list">
    <li
      v-for="(date, index) in dateArray"
      :key="index"
    >
      <h3 class="date-list__title">{{ date }}</h3>
      <book-list :date="date" />
    </li>
  </ul>
</template>

<script>
import BookList from './BookList';

export default {
  components: {
    BookList,
  },
  computed: {
    dateArray() {
      return this.$store.getters.completedDate;
    },
  },
};
</script>

<style lang="css" scoped>
.date-list {
  margin-top: 20px;
  & > li {
    margin-top: 30px;
    &:first-child {
      margin-top: 0;
    }
  }
  &__title {
    padding: 5px 20px;
    font-size: 20px;
    background-color: var(--lightGray);
  }
}
</style>
