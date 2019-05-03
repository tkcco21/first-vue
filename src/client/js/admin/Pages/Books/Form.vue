<template lang="html">
  <section class="books">
    <atoms-heading :level="1">Books</atoms-heading>
    <mole-book-form />
  </section>
</template>

<script>
import { Heading } from '@Admin/components/atoms';
import { BookForm } from '@Admin/components/molecules';

export default {
  components: {
    atomsHeading: Heading,
    moleBookForm: BookForm,
  },
};
</script>

<style lang="scss" scoped>
</style>
