<template lang="html">
  <section class="books">
    <h1 class="heading-primary">Books</h1>
    <mole-book-form />
    <p v-if="doneMessage">{{ doneMessage }}</p>
    <p v-if="errorMessage">
      {{ errorMessage }}
    </p>
  </section>
</template>

<script>
import { BookForm } from '@Admin/components/molecules';

export default {
  components: {
    moleBookForm: BookForm,
  },
  computed: {
    doneMessage() {
      return this.$store.state.doneMessage;
    },
    errorMessage() {
      return this.$store.state.errorMessage;
    },
  },
};
</script>

<style lang="css" scoped>
.heading-primary {
  padding: 5px 15px;
  font-size: 26px;
  background-color: #efefef;
  border-left: 5px solid $keycolor;
}
</style>
