<template lang="html">
  <section class="books-form">
    <mole-book-form />
    <v-alert
      v-if="doneMessage"
      :value="true"
      type="success"
    >
      {{ doneMessage }}
    </v-alert>
    <v-alert
      v-if="errorMessage"
      :value="true"
      type="error"
    >
      {{ errorMessage }}
    </v-alert>
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
</style>
