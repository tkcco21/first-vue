<template lang="html">
  <section class="books">
    <atoms-heading :level="1">Books</atoms-heading>
    <mole-book-form />
    <atoms-text v-if="doneMessage">{{ doneMessage }}</atoms-text>
    <atoms-text v-if="errorMessage" error>
      {{ errorMessage }}
    </atoms-text>
  </section>
</template>

<script>
import { Heading, Text } from '@Admin/components/atoms';
import { BookForm } from '@Admin/components/molecules';

export default {
  components: {
    atomsHeading: Heading,
    atomsText: Text,
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

<style lang="scss" scoped>
</style>
