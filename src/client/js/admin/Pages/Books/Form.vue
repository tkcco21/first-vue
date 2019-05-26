<template lang="html">
  <book-form @handleSubmit="handleSubmit" />
</template>

<script>
import BookForm from '@Admin/components/Molecules';

export default {
  components: { BookForm },
  methods: {
    handleSubmit(book) {
      this.$store.dispatch('addBook', book);
    },
  },
};
</script>
